import { useState } from "react";
import type { StudentData, StudentDisplayData } from "@/utils/types";
import data from "@/utils/stud_directory.json";
import ResultsView from "./resultsView";
import StudentView from "./studentView";

const year_map = new Map<string, string>();
const building_map = new Map<string, string>();

year_map
  .set("GR", "Graduate")
  .set("FF", "Freshman")
  .set("FR", "Freshman")
  .set("SO", "Sophomore")
  .set("JR", "Junior")
  .set("SR", "Senior")
  .set("SS", "Senior");

building_map.set('HO', 'Hopeman')
.set('KE', 'Ketler')
.set('HI', 'Hicks')
.set('AL', 'Alumni')
.set('LI', 'Lincoln')
.set('ME', 'Memorial')
.set('HA', 'Harker')
.set('MP', 'MEP')
.set('SO', 'MAP South')
.set('NO', 'MAP North')
.set('WE', 'MAP West')
.set('Commuter', 'Commuter')
.set('CH', 'Colonial Apartments')


const men = ["HO", "KE", "HI", "AL", "LI", "ME"];
const women = ["HA", "MP", "SO", "NO", "WE"];

const getSex = (building: string, room: string) => {
  if (men.includes(building)) return "M";

  if (women.includes(building)) return "F";

  if (building === "Co") {
    
  // TODO: Figure out how to tell if mens or womens side
    const room_num = parseInt(room);
    if (room_num % 2 === 0) return "F";
    else return "M";
  }


  return "Commuter lol";
};

const getFromMap = (item: string, map: Map<string, string>): string =>  {
  const x =  map.get(item)

  console.log(item, x)

  return x ? x : 'other';
};

const student_data = data as StudentData[];
  const students: StudentDisplayData[] = student_data.map((student) => ({
    ...student,
    year: getFromMap(student.class, year_map),
    dorm: (getFromMap(student.building, building_map) + ' ' + (student.room === 'Commuter' ? '' : student.room)) ,
    sex: getSex(student.building, student.room),
    roommates: [], // TODO: load and display roomates
  }));

const Search = () => {
  

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<StudentDisplayData[]>([]);
  const [selected, setSelected] = useState<StudentDisplayData | null>(null);

  const handleChange = (e: React.ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResults([]);
    setSelected(null);
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
            <StudentView student={selected} back={setSelected} />
          ) : (
            <ResultsView results={results} setSelected={setSelected} />
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
