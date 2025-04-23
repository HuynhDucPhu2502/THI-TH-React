// src/components/StudentList.jsx
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../features/studentSlice";
import StudentCard from "./StudentCard";

export default function StudentList({ onEdit }) {
  const students = useSelector(state => state.student.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="mt-4 w-2/3 mx-auto">
      {students.map(st => (
        <StudentCard
          key={st.id}
          student={st}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
