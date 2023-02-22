import { displayName } from "@/utils/display";
import type { StudentDisplayData } from "@/utils/types";
import Image from "next/image";

interface ResultViewProps {
  results: StudentDisplayData[];
  setSelected: (student: StudentDisplayData) => void;
}

const ResultView = (props: ResultViewProps) => {
  const { results, setSelected } = props;
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {results.map((student) => (
          <div
            key={student.name}
            className="card card-normal m-4 w-52 bg-base-100 shadow-xl"
            onClick={() => {
              setSelected(student);
            }}
          >
            <figure>
              <Image
                width={100}
                height={100}
                src="/images/profile.png"
                alt="Profile Picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                {displayName(student.name)}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultView;
