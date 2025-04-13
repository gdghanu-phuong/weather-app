import { useState } from "react";
import { CityValue } from "../type/city.type";

export default function SearchBar({ setName }: CityValue) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div className="m-4 flex">
      <form onSubmit={handleSubmit}>
        <input
          className="outline-hidden"
          type="text"
          placeholder="Enter city or region"
          id="city"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button className="bg-black text-white" type="submit">
          <i className="fa-solid fa-magnifying-glass p-4"></i>
        </button>
      </form>
    </div>
  );
}
