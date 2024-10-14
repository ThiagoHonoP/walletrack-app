export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[512px] bg-white py-8 px-8 rounded-[12px]">
      {children}
    </div>
  );
};
