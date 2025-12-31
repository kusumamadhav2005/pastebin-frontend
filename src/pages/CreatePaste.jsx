import { useState } from "react";
import { createPaste } from "../api/pasteApi";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const payload = {
        content,
        max_views: maxViews ? Number(maxViews) : null,
      };
      const res = await createPaste(payload);
      setResult(res);
      setError("");
    } catch {
      setError("Failed to create paste");
    }
  };

  return (
    <div>
      <h2>Create Paste</h2>

      <textarea
        rows="6"
        placeholder="Paste content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max views (optional)"
        value={maxViews}
        onChange={(e) => setMaxViews(e.target.value)}
      />

      <button onClick={handleSubmit}>Create</button>

      {result && (
        <p>
          Link: <a href={result.url}>{result.url}</a>
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
