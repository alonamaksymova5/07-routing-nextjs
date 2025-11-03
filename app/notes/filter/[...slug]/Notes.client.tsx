"use client";

import { useQuery } from "@tanstack/react-query";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotesByTag } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

interface NotesClientProps {
  selectedTag?: string;
}

export default function NotesClient({ selectedTag }: NotesClientProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", selectedTag],
    queryFn: () =>
      fetchNotesByTag(selectedTag === ALL_NOTES ? undefined : selectedTag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes</p>;

  return <NoteList notes={data.notes} />;
}
