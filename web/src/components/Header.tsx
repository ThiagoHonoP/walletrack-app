export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="w-full h-10 flex justify-between items-center bg-slate-900 text-slate-100 p-4">
      {children}
    </header>
  );
};
