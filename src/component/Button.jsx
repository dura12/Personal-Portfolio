const ButtonH = ({ text, className = "", id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        // Use the dynamic id to target an element like <div id="project-123" />
        const target = document.getElementById(id);

        if (target) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-transparent px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black ${className}`}
    >
      {/* Circle animation on hover */}
      <span className="absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:scale-100" />

      {/* Text */}
      <span className="relative z-10 text-white group-hover:text-black font-semibold whitespace-nowrap">
        {text}
      </span>

      {/* Arrow icon */}
      <span className="ml-2 sm:ml-3 relative z-10">
        <img
          src="/images/arrow-down.svg"
          alt="arrow"
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1"
        />
      </span>
    </a>
  );
};

export default ButtonH;
