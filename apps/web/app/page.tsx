import { api } from "@/lib/api";

export default async function Page() {
  // Example: call your backend /health
  let health: { ok: boolean } | null = null;
  try {
    health = await api<{ ok: boolean }>("/health");
  } catch (e) {
    // swallow for demo
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Name of App which I cant say yet</h1>
      <p>Next.js app is running along with my backend :)</p>
      <input placeholder="Enter Goal"></input>
      <button>submit</button>
      <div style={{ marginTop: 16 }}>
        <h2>Backend health</h2>
        <pre>{JSON.stringify(health ?? { error: "API not reachable" }, null, 2)}</pre>
      </div>
    </main>
  );
}
