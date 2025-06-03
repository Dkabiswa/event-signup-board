"use client";
import { createContext, useContext, useState, useMemo } from "react";
import { EventType } from "@/types/event";

interface EventContextType {
  events: EventType[];
  filteredEvents: EventType[];
  paginatedEvents: EventType[];
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({
  initialEvents,
  children,
}: {
  initialEvents: EventType[];
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const EVENTS_PER_PAGE = 9;

  const filteredEvents = useMemo(() => {
    return initialEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialEvents, searchTerm]);

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);

  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * EVENTS_PER_PAGE;
    return filteredEvents.slice(start, start + EVENTS_PER_PAGE);
  }, [filteredEvents, currentPage]);

  return (
    <EventContext.Provider
      value={{
        events: initialEvents,
        filteredEvents,
        paginatedEvents,
        currentPage,
        totalPages,
        setPage: setCurrentPage,
        searchTerm,
        setSearchTerm,
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
