'use client';
import { useEffect, useState } from 'react';

export default function Ping() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('http://localhost:4000/health')
      .then(r => r.json())
      .then(setData)
      .catch(e => setData({ error: String(e) }));
  }, []);
  return (
    <main style={{maxWidth:640, margin:'0 auto', padding:24}}>
      <h2>API Health</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <a href="/">Back</a>
    </main>
  );
}
