import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../features/studentSlice";
import StudentCard from "./StudentCard";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function StudentList() {
  const students = useSelector(state => state.student.list);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleDelete = (id) => dispatch(deleteStudent(id));
  const handleEdit = (updatedStudent) => dispatch(updateStudent(updatedStudent));

  const filtered = students.filter(st =>
    st.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        <SearchBar value={keyword} onChange={setKeyword} />
        {filtered.map(st => (
          <StudentCard
            key={st.id}
            student={st}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500">😕 Không tìm thấy sinh viên</p>
        )}
      </div>
    </div>
  );
}
