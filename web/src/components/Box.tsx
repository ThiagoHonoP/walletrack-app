export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-1/3 bg-white py-8 px-8 rounded-[12px]">{children}</div>
  );
};
