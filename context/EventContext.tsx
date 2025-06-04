"use client";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { EventType } from "@/types/event";
import { fetchEvents } from "@/lib/data";

interface EventContextType {
  events: EventType[];
  filteredEvents: EventType[];
  paginatedEvents: EventType[];
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refetchEvents: () => Promise<void>;
  loading: boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({
  initialEvents,
  children,
}: {
  initialEvents: EventType[];
  children: React.ReactNode;
}) => {
  const [events, setEvents] = useState<EventType[]>(initialEvents);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const eventsPerPage = 9;

  const refetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const updated = await fetchEvents();
      setEvents(updated);
    } catch (err) {
      console.error("Failed to refetch events:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [events, searchTerm]);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(start, start + eventsPerPage);
  }, [filteredEvents, currentPage]);

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        paginatedEvents,
        currentPage,
        totalPages,
        setPage: setCurrentPage,
        searchTerm,
        setSearchTerm,
        refetchEvents,
        loading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context)
    throw new Error("useEventContext must be used inside EventProvider");
  return context;
};
