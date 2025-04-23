import { Filter } from "lucide-react";

export default function ClassFilter({ selected, onChange, options }) {
  return (
    <div className="relative w-full md:w-1/3">
      <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
      >
        <option value="">Tất cả lớp</option>
        {options.map((cls, idx) => (
          <option key={idx} value={cls}>{cls}</option>
        ))}
      </select>
    </div>
  );
}
