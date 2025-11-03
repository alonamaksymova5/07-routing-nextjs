import NoteList from "@/components/NoteList/NoteList";
import { fetchNotesByTag } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

interface FilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { slug } = await params;
  const selectedTag = slug?.[0];

  const res = await fetchNotesByTag(
    selectedTag === ALL_NOTES ? undefined : selectedTag
  );

  return <NoteList notes={res.notes} />;
}
