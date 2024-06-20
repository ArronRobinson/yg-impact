import { getInstagramFeed, getPostById } from "@/utils/instaFeed";
import { Video } from "./video";


export async function InstaList(){

    const posts = await getInstagramFeed();

    return (
        <>
        {posts && (
            posts.map(async (post, key) => (
                // If post has multiple videos
                (post.media_type === "CAROUSEL_ALBUM" ? (
                    <div key={key}>
                        <div>mediatype: {post.media_type}</div>
                        <div className="flex">
                            {(await getPostById(post.id)).map(item => (
                                <Video src={item.media_url} key={item.id}/>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div key={key}>
                        <div>mediatype: {post.media_type}</div>
                        <Video src={post.media_url} key={key}/>
                    </div>
                ))
                
            ))
        )}
        </>
    )
}





