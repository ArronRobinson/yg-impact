// InstaList.tsx
import React from "react";
import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image2";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselWrapper } from "./CarouselWrapper";

interface CaptionOverlayProps {
  caption: string;
}

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  caption: string;
}

interface CarouselItemData {
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
}

const CaptionOverlay: React.FC<CaptionOverlayProps> = ({ caption }) => (
  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-60 text-white flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <p className="line-clamp-4 text-base md:text-base overflow-hidden">
      {caption || "No caption available"}
    </p>
  </div>
);

export async function InstaList() {
  try {
    const posts = await getInstagramFeed() as InstagramPost[];

    if (!posts || !Array.isArray(posts)) {
      return <div>No posts available</div>;
    }

    const limitedPosts = posts.slice(0, 3);

    const postElements = await Promise.all(
      limitedPosts.map(async (post) => {
        if (!post?.id) return null;

        if (post.media_type === "CAROUSEL_ALBUM") {
          try {
            const carouselItems = await getPostById(post.id) as CarouselItemData[];
            if (!carouselItems?.[0]) return null;
            const firstItem = carouselItems[0];

            return (
              <Card key={post.id} className="w-full group overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="aspect-square relative">
                    {firstItem.media_type === "VIDEO" ? (
                      <Video src={firstItem.media_url} />
                    ) : (
                      <Image src={firstItem.media_url} />
                    )}
                    <CaptionOverlay caption={post.caption} />
                  </div>
                </CardContent>
              </Card>
            );
          } catch (error) {
            console.error("Error fetching carousel item:", error);
            return null;
          }
        }

        return (
          <Card key={post.id} className="w-full group overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-square relative">
                {post.media_type === "VIDEO" ? (
                  <Video src={post.media_url} />
                ) : (
                  <Image src={post.media_url} />
                )}
                <CaptionOverlay caption={post.caption} />
              </div>
            </CardContent>
          </Card>
        );
      })
    );

    const filteredElements = postElements.filter((element): element is JSX.Element => 
      element !== null
    );

    return (
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile: Show Carousel */}
        <div className="block md:hidden overflow-hidden">
          <CarouselWrapper elements={filteredElements} />
        </div>

        {/* Desktop: Show Responsive Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredElements.length > 0 ? filteredElements : <div>No posts available</div>}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in InstaCarousel:", error);
    return <div>Error loading posts</div>;
  }
}

export default InstaList;