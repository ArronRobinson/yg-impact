import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";

export async function InstaList() {
  // Fetch the posts
  const posts = await getInstagramFeed();

  // Slice to get only the first 3 posts
  const limitedPosts = posts.slice(0, 3);

  // Map the posts to elements
  const postElements = await Promise.all(
    limitedPosts.map(async (post, key) => {
      if (post.media_type === "CAROUSEL_ALBUM") {
        // Fetch the first item from the carousel
        const carouselItems = await getPostById(post.id);
        const firstItem = carouselItems[0];

        return firstItem.media_type === "VIDEO" ? (
          <Video src={firstItem.media_url} key={post.id} />
        ) : (
          <Image src={firstItem.media_url} key={post.id} />
        );
      } else {
        return post.media_type === "VIDEO" ? (
          <Video src={post.media_url} key={key} />
        ) : (
          <Image src={post.media_url} key={key} />
        );
      }
    })
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-[70vw]">
      {postElements}
    </div>
  );
}