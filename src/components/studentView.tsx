import type { StudentDisplayData } from "@/utils/types";

interface StudentViewProps {
  student: StudentDisplayData;
  back: (student: StudentDisplayData | null) => void;
}

const StudentView = (props: StudentViewProps) => {
  const student = props.student;
  return (
    <>
      <div>
        <button onClick={() => props.back(null)}>Back</button>
        <p>Name: {student.name}</p>
        <p>Email: {student.email}</p>
        <p>Year: {student.year}</p>
        <p>Room: {student.dorm}</p>
        <p>Home Town: {student.city}, {student.state}</p>
        <p>Roomates:</p>
      </div>
    </>
  );
};

export default StudentView;
