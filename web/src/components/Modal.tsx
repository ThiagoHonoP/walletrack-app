export const Modal = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-12 bg-white rounded-lg flex flex-col gap-3">
        <p>I am a modal!</p>
        <button className="px-3 py-2 bg-red-500 rounded-lg text-white">
          Close
        </button>
      </div>
    </div>
  );
};
