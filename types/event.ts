export type EventType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type EventComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};