import type { Student } from "@/utils/types";
import Image from "next/image";

interface ResultViewProps {
  results: Student[];
}

const ResultView = (props: ResultViewProps) => {
  const { results } = props;
  return (
    <>
      <div>
        {results.map((student) => (
          <div
            key={student.name}
            className="card card-normal w-52 bg-base-100 shadow-xl"
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
              <h2 className="card-title">{student.name}</h2>
              <div className="card-actions justify-end">
                <button className="btn-primary btn">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultView;
