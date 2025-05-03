const TitleHeader = ({ title, sub }) => {
    return (
      <div className="flex flex-col  gap-5 ">
        <h1 className="font-semibold text-3xl md:text-5xl">{title}</h1>
        <div className=" bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
          <p className="text-sm text-gray-500 uppercase tracking-widest">{sub}</p>
        </div>
      </div>
    );
  };
  
  export default TitleHeader;
  