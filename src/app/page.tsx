import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Portfolio</h1>

      <Link href="/contact">Contact</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
