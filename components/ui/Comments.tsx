import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { fetchCommentsByEventId } from "@/lib/data";
import { MessageSquare } from "lucide-react";

export default async function Comments({ eventId }: { eventId: number }) {
  const comments = await fetchCommentsByEventId(eventId);

  return (
    <div className="">
      <div className="flex items-center gap-2 text-lg font-semibold py-4">
        <MessageSquare className="w-5 h-5 text-muted-foreground" />
        <span>Comments ({comments.length})</span>
      </div>

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
                <p className="text-sm text-muted-foreground">{comment.body}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
