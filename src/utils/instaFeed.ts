

export interface post {
    id: string
    caption: string
    media_type: string
    media_url: string
    permalink: string
    timestamp: string
}

const baseUrl = "https://graph.instagram.com/v12.0";

export async function getInstagramFeed():Promise<post[]>{
    return fetch(`${baseUrl}/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.META_USER_TOKEN}`)
        .then(response => response.json())
        .then(data => {
            return data.data
        })
        .catch(error => console.error(error));
}

export async function getPostById(id: string):Promise<post[]>{
    return fetch(`${baseUrl}/${id}/children?fields=id,media_type,media_url&access_token=${process.env.META_USER_TOKEN}`)
    .then(response => response.json())
    .then(data => {
        return data.data
    })
    .catch(error => console.error(error));
}