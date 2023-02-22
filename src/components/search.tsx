import { useState } from "react";
import type { Student } from "@/utils/types";
import data from "@/utils/stud_directory.json";
import ResultsView from "./resultsView";
import StudentView from "./studentView";

const Search = () => {
  const students = data as Student[];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Student[]>([]);
  const [selected, setSelected] = useState<Student | null>(null);

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
    <>
      <div>
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search by name"
            className="input-bordered input w-full max-w-xs"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div className="mt-4">
          {selected ? (
            <StudentView student={selected} />
          ) : (
            <ResultsView results={results} setSelected={setSelected} />
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
