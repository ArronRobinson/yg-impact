import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";

export async function InstaList() {
  // Fetch the posts
  const posts = await getInstagramFeed();
  console.log(posts);

  // Slice to get only the first 3 posts
  const limitedPosts = posts.slice(0, 3);

  // Use Promise.all to handle async operations before mapping
  const postElements = await Promise.all(
    limitedPosts.map(async (post, key) => {
      if (post.media_type === "CAROUSEL_ALBUM") {
        const carouselItems = await getPostById(post.id);

        return carouselItems.map((item) => (
          item.media_type === "VIDEO" ? (
            <Video src={item.media_url} key={item.id} />
          ) : (
            <Image src={item.media_url} key={item.id} />
          )
        ));
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[70vw]">
      {postElements.flat()}
    </div>
  );
}