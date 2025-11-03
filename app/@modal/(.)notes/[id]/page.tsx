import ModalPreview from "./ModalPreview";
import NotePreviewClient from "./NotePreview.client";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <ModalPreview>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
          <p className={css.tag}>{note.tag}</p>
          <NotePreviewClient />
        </div>
      </div>
    </ModalPreview>
  );
}
