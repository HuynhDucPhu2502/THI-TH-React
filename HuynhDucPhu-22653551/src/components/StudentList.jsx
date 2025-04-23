import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../features/studentSlice";
import StudentCard from "./StudentCard";

export default function StudentList() {
  const students = useSelector(state => state.student.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteStudent(id));
  const handleEdit = (updatedStudent) => dispatch(updateStudent(updatedStudent));

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        {students.map(st => (
          <StudentCard
            key={st.id}
            student={st}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
