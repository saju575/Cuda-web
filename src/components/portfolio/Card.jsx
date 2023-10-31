const Card = ({ item }) => {
  return (
    <div className="w-[90%] mx-auto md:w-96  p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <a href="#">
        <img className="rounded-t-lg" src={item.img} alt="" />
      </a>
      <div className="p-5 flex flex-col items-start gap-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl text-left tracking-tight mb-2 dark:text-white">
            {item.title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 text-left mb-3 dark:text-gray-400">
          {item.desc.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <a
          href="#"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-xl px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
