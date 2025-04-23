import { useState } from "react";

export default function StudentCard({ student, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: student.name,
    class: student.class,
    age: student.age,
  });

  const handleSave = () => {
    if (!form.name || !form.class || !form.age) return;
    onEdit({ ...student, ...form });
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-r from-white via-purple-50 to-indigo-100 shadow-lg rounded-xl p-4 mb-3 transition hover:scale-[1.01]">
      {!isEditing ? (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-indigo-700">👤 {student.name}</p>
            <p className="text-sm text-gray-600">🏫 Lớp: {student.class} | 🎂 Tuổi: {student.age}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg"
            >
              ✏️ Sửa
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg"
            >
              🗑️ Xoá
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            value={form.class}
            onChange={(e) => setForm({ ...form, class: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
            >
              💾 Lưu
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded"
            >
              ❌ Huỷ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
