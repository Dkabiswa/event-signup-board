import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="flex flex-1 min-h-[calc(100vh-64px)] items-center justify-between px-8 py-12 md:px-16">
      <div className="hidden md:block w-1/2">
        <Image
          src="/43052.jpg"
          alt="Volunteering"
          width={600}
          height={400}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Welcome to the Event Signup Board
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover, sign up, and participate in amazing volunteering events.
        </p>
        <Link href="/events">
          <Button size="lg" className="cursor-pointer">
            View All Events
          </Button>
        </Link>
      </div>
    </section>
  );
}
