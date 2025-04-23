export default function StudentCard({ student, onDelete, onEdit }) {
    return (
      <div className="bg-gradient-to-r from-white via-purple-50 to-indigo-100 shadow-lg rounded-xl p-4 mb-3 flex justify-between items-center transition duration-300 hover:scale-[1.01]">
        <div>
          <p className="text-lg font-bold text-indigo-700">👤 {student.name}</p>
          <p className="text-sm text-gray-600">🏫 Lớp: {student.class} | 🎂 Tuổi: {student.age}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => onEdit(student)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg transition"
          >
            ✏️ Sửa
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition"
          >
            🗑️ Xoá
          </button>
        </div>
      </div>
    );
  }
  