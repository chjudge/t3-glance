import { useState } from "react";
import type { Student } from "@/utils/types";
import data from "@/utils/stud_directory.json";

const Search = () => {
  const students = data as Student[];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Student[]>([]);

  const handleChange = (e: React.ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResults([]);
    if (search) {
      const res = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
      );
      setResults(res);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
      <button type="submit">Search</button>
      {results.map((result) => (
        <div key={result.name}>{result.name}</div>
      ))}
    </form>
  );
};

export default Search;
