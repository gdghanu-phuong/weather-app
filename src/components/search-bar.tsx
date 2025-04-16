import { useState } from "react";

export default function SearchBar({ setName }: {setName: (value:string) => void}) {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(input);
    setInput("");
  };

  return (
    <div className="m-4 flex">
      <form onSubmit={handleSubmit}>
        <input
          className="outline-hidden"
          type="search"
          placeholder="Enter city or region"
          id="city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="bg-black text-white" type="submit">
          <i className="fa-solid fa-magnifying-glass p-4" />
        </button>
      </form>
    </div>
  );
}
