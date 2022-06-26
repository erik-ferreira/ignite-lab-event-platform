export function TeacherProfile() {
  return (
    <div className="flex items-center gap-4 mt-6">
      <img
        src="https://github.com/erik-ferreira.png"
        alt=""
        className="w-16 h-16 rounded-full border-2 border-blue-500"
      />

      <div className="leading-relaxed">
        <strong className="block font-bold text-2xl">Erik Ferreira</strong>
        <span className="block text-sm text-gray-200"> Dev</span>
      </div>
    </div>
  );
}
