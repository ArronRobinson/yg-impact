import React from 'react';
import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image2";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export async function InstaList() {
  try {
    const posts = await getInstagramFeed();

    if (!posts || !Array.isArray(posts)) {
      return <div>No posts available</div>;
    }

    const limitedPosts = posts.slice(0, 3);

    const postElements = await Promise.all(
      limitedPosts.map(async (post) => {
        if (!post?.id) return null;

        if (post.media_type === "CAROUSEL_ALBUM") {
          try {
            const carouselItems = await getPostById(post.id);
            if (!carouselItems?.[0]) return null;
            const firstItem = carouselItems[0];

            return (
              <Card key={post.id} className="w-full">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    {firstItem.media_type === "VIDEO" ? (
                      <Video src={firstItem.media_url} />
                    ) : (
                      <Image src={firstItem.media_url} />
                    )}
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
          <Card key={post.id} className="w-full">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                {post.media_type === "VIDEO" ? (
                  <Video src={post.media_url} />
                ) : (
                  <Image src={post.media_url} />
                )}
              </div>
            </CardContent>
          </Card>
        );
      })
    );

    const filteredElements = postElements.filter(Boolean);

    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Mobile: Show Carousel */}
        <div className="block md:hidden overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="w-full max-w-full">
              {filteredElements.length > 0 ? filteredElements.map((post, index) => (
                <CarouselItem key={index} className="w-full">
                  {post}
                </CarouselItem>
              )) : <div>No posts available</div>}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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