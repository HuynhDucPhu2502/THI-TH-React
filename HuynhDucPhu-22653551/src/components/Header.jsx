import { GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center">
        <div to="/" className="flex items-center gap-2 text-gray-800 hover:text-indigo-600">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">Student Manager</span>
        </div>
      </div>
    </header>
  );
}
