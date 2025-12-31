const BASE_URL = "http://localhost:8080/api/pastes";

export async function createPaste(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create paste");
  return res.json();
}

export async function getPaste(id) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Server error");

  return res.json();
}
