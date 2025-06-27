export const handler= async () => {
    const CLIENT_ID = process.env.UNSPLASH_CLIENT_ID;
    const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=12`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if(response.ok && data.length){
            return{
                statusCode: 200,
                body: JSON.stringify(data)
            }
        }else{
            return{
                statusCode: response.status,
                body: JSON.stringify({error: "API returned an error"})
            }
        }
    } catch (error) {
        return{
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        }
    }
}