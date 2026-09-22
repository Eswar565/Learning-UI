import { useEffect, useState } from "react";
import { LiveProvider, LivePreview, LiveError, LiveEditor } from "react-live";

type Props = {
  name: string;
  code: string;
};

export function EditableComponent({ name, code }: Props) {
  const [liveCode, setLiveCode] = useState(code);
  const [draft, setDraft] = useState(code);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <LiveProvider code={liveCode}>
      <div
        className="editable"
        role="button"
        tabIndex={0}
        onClick={() => {
          setDraft(liveCode);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setDraft(liveCode);
            setOpen(true);
          }
        }}
      >
        <span className="editable__tag">{name}.jsx</span>
        <LivePreview />
        <LiveError className="live-error" />
      </div>

      {open && (
        <div className="devpanel__backdrop" onClick={() => setOpen(false)}>
          <div className="devpanel" onClick={(e) => e.stopPropagation()}>
            <header className="devpanel__bar">
              <span className="devpanel__dot devpanel__dot--red" />
              <span className="devpanel__title">{name}.jsx</span>
              <button className="devpanel__close" aria-label="Close" onClick={() => setOpen(false)}>
                ×
              </button>
            </header>
            <div className="devpanel__editor">
              <LiveProvider code={draft}>
                <LiveEditor
                  onChange={setDraft}
                  className="devpanel__code"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}
                />
              </LiveProvider>
            </div>
            <footer className="devpanel__actions">
              <button className="btn btn--ghost" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button
                className="btn btn--race"
                onClick={() => {
                  setLiveCode(draft);
                  setOpen(false);
                }}
              >
                Save &amp; Run
              </button>
            </footer>
          </div>
        </div>
      )}
    </LiveProvider>
  );
}
