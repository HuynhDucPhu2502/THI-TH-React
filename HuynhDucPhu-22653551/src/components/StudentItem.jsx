import { useState } from "react";
import { Pencil, Trash2, User, School, Calendar, Save, X } from "lucide-react";

export default function StudentItem({ student, onDelete, onEdit }) {
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
    <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition space-y-2">
      {isEditing ? (
        <>
          <div className="space-y-2">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Họ tên"
            />
            <input
              type="text"
              value={form.class}
              onChange={(e) => setForm({ ...form, class: e.target.value })}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Lớp"
            />
            <input
              type="number"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Tuổi"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-md hover:bg-green-200 text-sm"
            >
              <Save size={16} /> Lưu
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-200 text-sm"
            >
              <X size={16} /> Huỷ
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <p className="text-base font-semibold text-gray-800 flex items-center gap-2">
              <User size={18} /> {student.name}
            </p>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-4">
              <span className="flex items-center gap-1"><School size={16} /> {student.class}</span>
              <span className="flex items-center gap-1"><Calendar size={16} /> {student.age} tuổi</span>
            </p>
          </div>
          <div className="flex gap-2 mt-1">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-indigo-100 text-indigo-600 font-medium flex items-center gap-1"
            >
              <Pencil size={16} /> Sửa
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-red-100 text-red-600 font-medium flex items-center gap-1"
            >
              <Trash2 size={16} /> Xoá
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
