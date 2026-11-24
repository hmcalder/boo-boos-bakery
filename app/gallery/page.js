import { pool } from "../../lib/db";

export default async function Gallery() {
  try {
    const result = await pool.query("SELECT NOW()");

    return (
      <main>
        <h2>Database Connection Test</h2>
        <p>Connected to Neon successfully!</p>
        <p>Database time: {result.rows[0].now.toString()}</p>
      </main>
    );
  } catch (error) {
    console.error("Database connection failed:", error);

    return (
      <main>
        <h2>Database Connection Test</h2>
        <p>Database connection failed. Check your terminal.</p>
      </main>
    );
  }
}