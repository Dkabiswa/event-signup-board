"use client";

import { useEventContext } from "@/context/EventContext";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const colors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
];

export default function EventsPage() {
  const router = useRouter();

  const {
    paginatedEvents,
    currentPage,
    totalPages,
    setPage,
    searchTerm,
    setSearchTerm,
    refetchEvents,
    interestedEventIds,
  } = useEventContext();

  console.log(interestedEventIds);

  const handleEventClick = (id: number) => {
    router.push(`/events/${id}`);
  };

  return (
    <main className="p-6">
      <div className="flex flex-col gap-4 min-h-[calc(100vh-112px)]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl semi-bold">Events</h1>
          <div className="flex gap-2 items-center">
            <Button variant="outline" onClick={() => refetchEvents()}>
              Refresh Events
            </Button>
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => {
                setPage(1);
                setSearchTerm(e.target.value);
              }}
              className="w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.map((event, index) => (
            <Card
              key={event.id}
              className="flex border hover:bg-my-blue transition-colors hover:cursor-pointer p-4 gap-2"
              onClick={() => handleEventClick(event.id)}
            >
              {" "}
              <div className="flex justify-between">
                <div
                  className={cn(
                    "w-10 flex items-center justify-center font-bold text-sm",
                    colors[index % colors.length]
                  )}
                >
                  #{event.id}
                </div>
                {interestedEventIds.includes(event.id) && (
                  <span className="top-2 right-2 text-xs bg-green-100 text-yellow-800 px-2 py-0.5 rounded-full">
                    Interested
                  </span>
                )}
              </div>
              <CardContent className="p-0">
                <h2 className="text-lg font-semibold mb-1">
                  {event.title.slice(0, 50)}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {event.body.slice(0, 80)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-auto gap-4">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <Button
                key={idx + 1}
                variant={currentPage === idx + 1 ? "default" : "outline"}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
