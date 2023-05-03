import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link href="/components/form/csv">Welcome Back</Link>
    </main>
  );
}
