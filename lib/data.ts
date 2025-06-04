import { EventComment, EventType } from "@/types/event";

export async function fetchEvents(): Promise<EventType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export async function fetchCommentsByEventId(eventId: number): Promise<EventComment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${eventId}`
  );
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}
