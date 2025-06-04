"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useEventContext } from "@/context/EventContext";
import { EventType } from "@/types/event";
import { Clock, Calendar1, MapPin } from "lucide-react";
import Comments from "@/components/ui/Comments";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
  const { events, interestedEventIds, toggleInterest } = useEventContext();
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventType | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const eventId = parseInt(id, 10);
      const foundEvent = events.find((ev) => ev.id === eventId);
      setEvent(foundEvent);
    }
  }, [id, events]);

  const isInterested = event ? interestedEventIds.includes(event.id) : false;

  return (
    <main className="p-6 bg-my_blue min-h-calc(100vh-112px)">
      {event && (
        <>
          <Card className=" shadow-sm p-5 rounded-sm gap-3">
            <div className="flex items-center justify-between">
              <div className="w-10 flex items-center justify-center font-bold text-sm bg-blue-100">
                #{event?.id}
              </div>

              <Button
                onClick={() => toggleInterest(event?.id)}
                variant={isInterested ? "secondary" : "default"}
                className={`${
                  isInterested ? "bg-green-100 text-yellow-800" : ""
                } cursor-pointer`}
              >
                {isInterested ? "Marked as Interested" : "I'm Interested"}
              </Button>
            </div>
            <h1 className="text-2xl font-bold mb-0">{event?.title}</h1>
            <p className="mt-1 text-gray-700">{event?.body}</p>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <span>
                <Calendar1 className="w-5 h-5 inline-block" /> June 6, 2025
              </span>
              <span>
                <Clock className="w-5 h-5 inline-block" /> 9:00 AM - 5:00 PM
                GMT+2
              </span>
              <span>
                <MapPin className="w-5 h-5 inline-block" /> Worldwide
              </span>
            </div>
          </Card>
          <Comments eventId={event?.id || 0} />
        </>
      )}
      {!event && (
        <div className="text-center text-gray-500">
          Event not found or does not exist.
        </div>
      )}
    </main>
  );
}
