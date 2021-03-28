export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 mr-4 rounded-full" />
      <div className="text-xl font-semibold text-gray-300">{name}</div>
    </div>
  );
}
