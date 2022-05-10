const Field = ({ label, value }) => {
  return (
    <div className="flex w-1/2 flex-col border-b mb-8 border-black-10">
      <h1 className="text-md-4 first-letter:capitalize text-gray-600">
        {label}
      </h1>
      <h4 className="text-lg-3 font-medium text-gray-800 my-2.5">{value}</h4>
    </div>
  );
};

export default Field;
