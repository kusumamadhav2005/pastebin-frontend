import { useEffect, useState } from "react";
import { getPaste } from "../api/pasteApi";

export default function ViewPaste() {
  const [paste, setPaste] = useState(null);
  const [error, setError] = useState("");

  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    getPaste(id)
      .then((res) => {
        if (!res) setError("Paste not found");
        else setPaste(res);
      })
      .catch(() => setError("Server error"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!paste) return <p>Loading...</p>;

  return (
    <div>
      <h2>Paste</h2>
      <pre>{paste.content}</pre>
      <p>Remaining views: {paste.remainingViews ?? "∞"}</p>
    </div>
  );
}
