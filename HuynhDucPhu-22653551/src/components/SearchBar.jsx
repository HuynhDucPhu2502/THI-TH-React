export default function SearchBar({ value, onChange }) {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Tìm sinh viên theo tên..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-indigo-300 p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    );
  }
  