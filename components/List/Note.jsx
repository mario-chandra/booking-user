const Note = ({ acceptBy, note }) => {
  return (
    <div className="border-[1.5px] rounded-2 p-5 bg-gray-100 border-gray-300">
      <h1 className="text-md-2 text-primary-300">{`Messages from : ${acceptBy}`}</h1>
      <p className="text-md-3 font-medium text-primary-400">{note}</p>
    </div>
  );
};

export default Note;
