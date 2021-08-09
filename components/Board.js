const fontRighteous = {
  fontFamily: "'Righteous', cursive",
};

const Board = ({ title, ReactIcon, children }) => (
  <section className="mb-6 last:m-0 rounded-lg bg-gray-100 p-4">
    <h2
      style={fontRighteous}
      className="flex justify-center items-center text-xl pb-2 border-b-2 border-gray-400 border-dashed mb-2"
    >
      <ReactIcon size="1.2em" className="mr-2" />
      {title}
    </h2>
    {children}
  </section>
);

export default Board;
