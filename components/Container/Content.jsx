const Content = ({ title, children }) => {
  return (
    <div className="flex flex-1 flex-col items-center mx-auto">
      {title && (
        <h1 className="text-xl-1 font-bold text-primary-500">{title}</h1>
      )}
      {children}
    </div>
  );
};

export default Content;
