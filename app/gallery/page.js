import { pool } from "../../lib/db";

export default async function Gallery() {

    const result = await pool.query("SELECT * FROM gallery ORDER BY id");
    const photos = result.rows;

    return(
        <main>
            <section id="gallery">
                <h2>Gallery</h2>
                <p>Some of my Favorite Creations! </p>

                <div id="gallery-grid">
                    {photos.map((photo) => (
                        <div className="gallery-card" key={photo.id}>
                            <img src={photo.image_url} alt={photo.description || photo.event_name}/>
                            <h3>{photo.event_name}</h3>
                            <p>{photo.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}