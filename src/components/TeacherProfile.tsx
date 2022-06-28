interface TeacherProfileProps {
  teacher: { bio: string; avatarURL: string; name: string };
}

export function TeacherProfile(data: TeacherProfileProps) {
  return (
    <div className="flex items-center gap-4 mt-6">
      <img
        src={data.teacher.avatarURL}
        alt=""
        className="w-16 h-16 rounded-full border-2 border-blue-500"
      />

      <div className="leading-relaxed">
        <strong className="block font-bold text-2xl">
          {data.teacher.name}
        </strong>
        <span className="block text-sm text-gray-200">{data.teacher.bio}</span>
      </div>
    </div>
  );
}
