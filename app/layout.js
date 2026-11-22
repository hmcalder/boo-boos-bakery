import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Boo Boo's Bakery",
  description: "Homemade with love, baked with faith."
};


export default function RootLayout({ children }) {  //shared page setup
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Boo Boo's Bakery</h1>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/order">Order</Link>
            <Link href="/my-orders">My Orders</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>

        {children}  

        <footer>
          <p>Boo Boo's Bakery</p>
        </footer>
      </body>
    </html>
  );
}