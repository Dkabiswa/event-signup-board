import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchEvents } from "@/lib/data";
import NavBar from "@/components/ui/NavBar";
import { EventProvider } from "@/context/EventContext";
import { use } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Event Signup Board",
  description: "Find your next event to volunteer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const events = use(fetchEvents());

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <NavBar />
        <EventProvider initialEvents={events}>{children}</EventProvider>
      </body>
    </html>
  );
}
