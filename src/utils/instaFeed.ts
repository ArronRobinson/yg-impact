export interface post {
    id: string
    caption: string
    media_type: string
    media_url: string
    permalink: string
    timestamp: string
}

const baseUrl = "https://graph.instagram.com/v18.0";

export async function getInstagramFeed(): Promise<post[]> {
    try {
        const response = await fetch(
            `${baseUrl}/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.META_USER_TOKEN}`,
            {
                next: { revalidate: 3600 }, // Cache for 1 hour (ISR)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.data) {
            throw new Error("No data received from Instagram API");
        }

        return data.data;
    } catch (error) {
        console.error("Error fetching Instagram feed:", error);
        return []; // Return empty array instead of undefined
    }
}


export async function getPostById(id: string): Promise<post[]> {
    try {
        const response = await fetch(`${baseUrl}/${id}/children?fields=id,media_type,media_url&access_token=${process.env.META_USER_TOKEN}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.data) {
            throw new Error('No data received from Instagram API');
        }
        
        return data.data;
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        return []; // Return empty array instead of undefined
    }
}