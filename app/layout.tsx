import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchEvents } from "@/lib/data";
import NavBar from "@/components/ui/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Event Signup Board",
  description: "Find your next event to volunteer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const events = await fetchEvents();
  console.log("Fetched events:", events);
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
