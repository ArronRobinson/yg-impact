import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";

export async function InstaList() {
  // Fetch the posts
  const posts = await getInstagramFeed();
  console.log(posts);

  // Use Promise.all to handle async operations before mapping
  const postElements = await Promise.all(
    posts.map(async (post, key) => {
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
    <div className="grid grid-cols-1 max-w-7xl sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {postElements.flat()}
    </div>
  );
}