// src/components/StudentCard.jsx
export default function StudentCard({ student, onDelete, onEdit }) {
    return (
      <div className="bg-white shadow rounded p-4 mb-2 flex justify-between items-center">
        <div>
          <p className="font-semibold">{student.name}</p>
          <p className="text-sm text-gray-500">Lớp: {student.class} | Tuổi: {student.age}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => onEdit(student)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Sửa
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Xoá
          </button>
        </div>
      </div>
    );
  }
  