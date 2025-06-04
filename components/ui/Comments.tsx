"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { fetchCommentsByEventId } from "@/lib/data";
import { EventComment } from "@/types/event";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export interface CommentsProps {
  eventId: number;
}

export default function Comments({ eventId }: CommentsProps) {
  const [comments, setComments] = useState<EventComment[]>([]);
  const [commentBody, setCommentBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCommentsByEventId(eventId)
      .then((comments) => setComments(comments))
      .catch((err) => {
        console.error("Failed to load comments", err);
        setError("Failed to load comments.");
      })
      .finally(() => setLoading(false));
  }, [eventId]);

  const handleAddComment = () => {
    if (!commentBody.trim()) return;
    const newComment: EventComment = {
      id: Date.now(),
      postId: eventId,
      name: "John Doe",
      email: "johndoe@example.com",
      body: commentBody.trim(),
    };
    setComments((prev) => [newComment, ...prev]);
    setCommentBody("");
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 text-lg font-semibold py-4">
        <MessageSquare className="w-5 h-5 text-muted-foreground" />
        <span>Comments ({comments.length})</span>
      </div>

      <div className="mb-6 p-4 space-y-3 border shadow-sm rounded-sm">
        <Textarea
          placeholder="Write your comment..."
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <div className="text-right">
          <Button
            onClick={handleAddComment}
            disabled={!commentBody.trim().length}
          >
            Add Comment
          </Button>
        </div>
      </div>
      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card
              key={i}
              className="flex items-start gap-4 bg-white shadow-sm border rounded-sm px-5 py-3"
            >
              <CardContent className="p-0 flex gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[550px]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-4 rounded-sm border border-red-200">
          <span>
            Error while fetching comments, try again by refreshing the page
          </span>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card
              key={comment.id}
              className="flex items-start gap-4 bg-white shadow-sm border rounded-sm px-5 py-3"
            >
              <CardContent className="p-0 flex gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={`https://i.pravatar.cc/100?u=${comment.email}`}
                  />
                  <AvatarFallback>
                    {comment.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{comment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.body}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
