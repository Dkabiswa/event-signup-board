"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useEventContext } from "@/context/EventContext";
import { EventType } from "@/types/event";
import { Clock, Calendar1, MapPin } from "lucide-react";
import Comments from "@/components/ui/Comments";

export default function EventDetailDrawer() {
  const { events } = useEventContext();
  const { id } = useParams();
  const [event, setEvent] = useState<EventType | undefined>(
    events.find((event) => event.id === 1) || undefined
  );

  useEffect(() => {
    if (id) {
      const foundEvent = events.find(
        (ev) => ev.id === parseInt(Array.isArray(id) ? id[0] : id, 10)
      );
      setEvent(foundEvent);
    }
  }, [id, events]);

  return (
    <main className="p-6 bg-my_blue min-h-calc(100vh-112px)">
      <Card className=" shadow-sm p-5 rounded-sm gap-3">
        <div className="w-10 flex items-center justify-center font-bold text-sm bg-blue-100">
          #{event?.id}
        </div>
        <h1 className="text-2xl font-bold mb-0">{event?.title}</h1>
        <p className="mt-1 text-gray-700">{event?.body}</p>
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <span>
            <Calendar1 className="w-5 h-5 inline-block" /> June 6, 2025
          </span>
          <span>
            <Clock className="w-5 h-5 inline-block" /> 9:00 AM - 5:00 PM GMT+2
          </span>
          <span>
            <MapPin className="w-5 h-5 inline-block" /> Worldwide
          </span>
        </div>

        {/* <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Join Event Now
          </button>
        </div> */}
      </Card>

      <Comments eventId={event?.id || 0} />
    </main>
  );
}
