export default function ClassFilter({ selected, onChange, options }) {
    return (
      <div className="mb-4">
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-purple-300 p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="">-- Lọc theo lớp --</option>
          {options.map((cls, idx) => (
            <option key={idx} value={cls}>{cls}</option>
          ))}
        </select>
      </div>
    );
  }