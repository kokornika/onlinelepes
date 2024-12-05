export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-200/40 to-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-3xl" />
    </div>
  );
}