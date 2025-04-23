import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../features/studentSlice";
import StudentCard from "./StudentCard";
import SearchBar from "./SearchBar";
import ClassFilter from "./ClassFilter";
import { useEffect, useState } from "react";

export default function StudentList() {
  const students = useSelector(state => state.student.list);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleDelete = (id) => dispatch(deleteStudent(id));
  const handleEdit = (updatedStudent) => dispatch(updateStudent(updatedStudent));

  const classes = [...new Set(students.map(st => st.class))];

  const filtered = students.filter(st =>
    st.name.toLowerCase().includes(keyword.toLowerCase()) &&
    (selectedClass === "" || st.class === selectedClass)
  );

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        {/* Tìm kiếm + Lọc lớp: nằm cùng dòng */}
        <div className="flex flex-col md:flex-row gap-4">
          <SearchBar value={keyword} onChange={setKeyword} />
          <ClassFilter selected={selectedClass} onChange={setSelectedClass} options={classes} />
        </div>

        {/* Danh sách sinh viên */}
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
