import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";

export async function InstaList() {
  try {
    // Fetch the posts
    const posts = await getInstagramFeed();
    
    // Add null check before slicing
    if (!posts || !Array.isArray(posts)) {
      console.error('No posts returned or posts is not an array:', posts);
      return <div>No posts available</div>;
    }

    // Slice to get only the first 3 posts
    const limitedPosts = posts.slice(0, 3);

    // Map the posts to elements
    const postElements = await Promise.all(
      limitedPosts.map(async (post, key) => {
        if (!post || !post.id) {
          return null;
        }

        if (post.media_type === "CAROUSEL_ALBUM") {
          try {
            // Fetch the first item from the carousel
            const carouselItems = await getPostById(post.id);
            if (!carouselItems || !carouselItems[0]) {
              return null;
            }
            const firstItem = carouselItems[0];

            return firstItem.media_type === "VIDEO" ? (
              <Video src={firstItem.media_url} key={post.id} />
            ) : (
              <Image src={firstItem.media_url} key={post.id} />
            );
          } catch (error) {
            console.error('Error fetching carousel item:', error);
            return null;
          }
        } else {
          return post.media_type === "VIDEO" ? (
            <Video src={post.media_url} key={post.id} />
          ) : (
            <Image src={post.media_url} key={post.id} />
          );
        }
      })
    );

    // Filter out any null elements
    const filteredElements = postElements.filter(Boolean);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-[60vw] md:w-[70vw]">
        {filteredElements.length > 0 ? filteredElements : <div>No posts available</div>}
      </div>
    );
  } catch (error) {
    console.error('Error in InstaList:', error);
    return <div>Error loading posts</div>;
  }
}