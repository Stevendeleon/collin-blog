export default function PostTitle({ children }) {
  return (
    <h1 className="mb-24 text-4xl font-bold leading-tight tracking-tighter text-center md:text-6xl md:leading-none">
      {children}
    </h1>
  );
}
