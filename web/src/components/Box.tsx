export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-1/3 border-4 border-blue-500 py-8 px-8 rounded-[12px]">
      {children}
    </div>
  );
};
