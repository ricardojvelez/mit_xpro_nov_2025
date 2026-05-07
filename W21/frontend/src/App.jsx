import { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:5001";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/items`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Backend error:", error));
  }, []);

  async function onAddItem() {
    if (!input.trim()) return;

    const response = await fetch(`${BACKEND_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: input }),
    });

    if (response.ok) {
      setItems([...items, input]);
      setInput("");
    }
  }

  return (
    <main className="container">
      <h1>Docker Demo App</h1>
      <p>React frontend reading data from an Express backend.</p>

      <section className="form">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && onAddItem()}
          placeholder="Add a new item"
        />
        <button onClick={onAddItem}>Add</button>
      </section>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
