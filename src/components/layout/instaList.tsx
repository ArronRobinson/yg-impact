import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";

export async function InstaList() {
  const posts = await getInstagramFeed(); // Cached by ISR (1 hour)
  console.log(posts);

  const postElements = await Promise.all(
    posts.map(async (post, key) => {
      if (post.media_type === "CAROUSEL_ALBUM") {
        const carouselItems = await getPostById(post.id);

        if (carouselItems?.length > 0) {
          const firstItem = carouselItems[0];

          return (
            <div className="post-container" key={post.id}>
              {firstItem.media_type === "VIDEO" ? (
                <Video src={firstItem.media_url} />
              ) : (
                <Image src={firstItem.media_url} />
              )}
              <div className="caption">{post.caption}</div>
            </div>
          );
        }
      } else {
        return (
          <div className="post-container" key={key}>
            {post.media_type === "VIDEO" ? (
              <Video src={post.media_url} />
            ) : (
              <Image src={post.media_url} />
            )}
            <div className="caption">{post.caption}</div>
          </div>
        );
      }
    })
  );

  return (
    <div className="grid grid-cols-1 max-w-7xl md:grid-cols-3 gap-5 mb-20">
      {postElements.filter(Boolean)}
    </div>
  );
}