import { EventType } from "@/types/event";

export async function fetchEvents(): Promise<EventType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
