import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";
import { Image } from "./image";
// import "./InstaList.css"; // Import your CSS file

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
          <div className="post-container" key={item.id}>
            {item.media_type === "VIDEO" ? (
              <Video src={item.media_url} />
            ) : (
              <Image src={item.media_url} />
            )}
            <div className="caption">{post.caption}</div>
          </div>
        ));
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
    <div className="grid grid-cols-1 max-w-7xl grid-cols-2 md:grid-cols-3 gap-5 mb-24">
      {postElements.flat()}
    </div>
  );
}