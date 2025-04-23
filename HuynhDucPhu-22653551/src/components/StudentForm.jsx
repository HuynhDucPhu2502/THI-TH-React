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
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-800">Thêm sinh viên</h2>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Họ tên</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập họ tên..."
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Lớp</label>
        <input
          type="text"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          placeholder="Nhập lớp..."
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Tuổi</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Nhập tuổi..."
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold transition"
      >
        ➕ Thêm sinh viên
      </button>
    </form>
  );
}
