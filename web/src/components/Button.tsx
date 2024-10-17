interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  handleClick?: () => void;
}
export const PrimaryButton = ({ text, type, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {text}
    </button>
  );
};
