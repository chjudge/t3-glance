import type { Student } from "@/utils/types";

interface StudentViewProps {
    student: Student;
    back: (student: Student | null) => void;
}

const StudentView = (props: StudentViewProps) => {
    return (
        <>
            <div>
                <button onClick={() => props.back(null)}>Back</button>
                <h1>{props.student.name}</h1>
                <h2>{props.student.email}</h2>
                <h3>{props.student.class}</h3>
            </div>
        </>
    );
}

export default StudentView
