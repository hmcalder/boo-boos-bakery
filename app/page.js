import Link from "next/link";
import DailyVerse from "./components/DailyVerse";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div id="hero-text">
          <h2>Homemade with love, baked with faith.</h2>
          <p>Custom cakes and sweet treats for life's sweetest moments.</p>
          <Link href="/order" id="order-button">Place an Order</Link>


        </div>
        <img id="hero-image" src="/images/hero.jpg" alt="Thompson Wedding Cake" />
      </section>

      <section id="occasions">
        <h2>Made for Every Occasion</h2>
        <p>Something sweet for every celebration.</p>

        <div id="occasion-grid">

          <div className="occasion-card">
            <img src="/images/cakes.png" alt="Custom Cakes" />
            <h3>Custom Cakes</h3>
          </div>

          <div className="occasion-card">
            <img src="/images/cupcakes.jpg" alt="Custom Cupcakes" />
            <h3>Cupcakes</h3>
          </div>

          <div className="occasion-card">
            <img src="/images/macarons.jpeg" alt="Custom macarons" />
            <h3>Macarons</h3>
          </div>

          <div className="occasion-card">
            <img src="/images/catering.jpg" alt="Catering" />
            <h3>Event Catering</h3>
          </div>

          <div className="occasion-card">
            <img src="/images/cookies.png" alt="Cookies" />
            <h3>Homemade Cookies</h3>
          </div>

        </div>

        <Link href="/menu" id="menu-button">View my Menu</Link>

      </section>

      <DailyVerse/>
      
    </main>
  );
}