import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm bg-my-blue sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={25}
          height={25}
          className="object-cover"
        />
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
