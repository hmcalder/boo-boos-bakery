export default async function DailyVerse() {

    try{
        const response = await fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=daily",{ cache: "no-store"});

        if(!response.ok){
            throw new Error("Failed to load the daily Bible verse...");
        }

        const data = await response.json();
        const verse = data.verse.details;

        return (
            <section id="daily-verse">
                <h2>Daily Bread for the Soul</h2>
                <p>{verse.text}</p>
                <h3>{verse.reference}</h3>
                <p>{verse.version}</p>
            </section>
        );
    }
    catch (error) { 
        return(
            <section id="daily-verse">
                <h2>Daily Bread for the Soul</h2>
                <p>Unable to load today's Bible verse...</p>
            </section>
        );
    }
}
