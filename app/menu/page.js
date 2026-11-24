export default function Menu() {
    return (
      <main>
        <section id="menu">
          <h2>My Menu</h2>
          <p>Freshly baked with love for every occasion.</p>
  
          <div id="menu-grid">
  
            <div className="menu-card">
              <h3>Custom Cakes</h3>
              <p>Beautiful custom cakes for your special celebrations.</p>

              <h4>Vintage Designs:</h4>
              <ul>
                <li>4-inch: $30.00</li>
                <li>6-inch: $50.00</li>
                <li>8-inch: $70.00</li>
              </ul>

              <h4>Cake Flavors:</h4>
              <ul>
                <li>Vanilla</li>
                <li>Chocolate</li>
                <li>Red Velvet</li>
                <li>Carrot</li>
              </ul>

              <h4>Icing:</h4>
              <ul>
                <li>Buttercream</li>
                <li>Whipped Cream</li>
              </ul>

              <h4>Filling:</h4>
              <ul>
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Cookie Dough</li>
              </ul>
            </div>
  
            <div className="menu-card">
              <h3>Cupcakes</h3>
              <p>Delicious cupcakes for parties and special occasions.</p>

              <h4>Price:</h4>
              <ul>
                <li>$36.00 Per Normal Dozen.</li>
                <li>$48.00 Per Custom Decorated Dozen. </li>
              </ul>

              <h4>Customizations:</h4>
              <ul>
                <li>Fillings</li>
                <li>Designs</li>
                <li>Special Layouts</li>
                <li>Pull Apart</li>
              </ul>

            </div>
  
            <div className="menu-card">
              <h3>Macarons</h3>
              <p>Sweet, delicate macarons made with love.</p>
              <h4>Flavors:</h4>
              <ul>
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Moravian</li>
                <li>Chocolate</li>
                <li>Vanilla</li>
                <li>Cookie Dough</li>
              </ul>

              <h4>Price:</h4>
              <p>$40 per batch (yields 30 to 40).</p>
              <p>Extra $3.00 for Cookie Dough.</p>

            </div>
  
            <div className="menu-card">
              <h3>Homemade Cookies</h3>
              <p>Freshly baked cookies for every occasion.</p>

              <h4>S'mores Cookies:</h4>
              <p>$30.00 One Batch - Yields 15 Cookies.</p>
            </div>
  
            <div className="menu-card">
              <h3>Event Catering</h3>
              <p>Custom desserts for weddings, parties, and events.</p>

              <h4>Events:</h4>
              <ul>
                <li>Weddings</li>
                <li>Birthday Parties</li>
                <li>Anniversaries</li>
                <li>General Parties</li>
              </ul>
              <p>Contact for more details.</p>
            </div>
  
          </div>
        </section>
      </main>
    );
  }