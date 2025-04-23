// src/components/StudentForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/studentSlice";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentClass || !age) return;

    const newStudent = {
      id: Date.now(),
      name,
      class: studentClass,
      age: parseInt(age),
    };

    dispatch(addStudent(newStudent));
    setName("");
    setStudentClass("");
    setAge("");
  };

  return (
    <div className="w-fit mx-auto my-12 border-2 rounded-lg">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4 space-y-3">
      <h2 className="text-lg font-semibold">Thêm sinh viên</h2>
      <input
        type="text"
        placeholder="Họ tên"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lớp"
        className="w-full border p-2 rounded"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tuổi"
        className="w-full border p-2 rounded"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Thêm sinh viên
      </button>
    </form>
    </div>
  );
}
