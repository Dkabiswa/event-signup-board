import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm bg-blue-50">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">🎫</span>
        <span className="text-xl font-semibold">Event Signup Board</span>
      </div>
      <div className="space-x-4">
        <Link href="/" className="text-sm hover:underline">
          Home
        </Link>
        <Link href="/events" className="text-sm hover:underline">
          Events
        </Link>
      </div>
    </nav>
  );
}
