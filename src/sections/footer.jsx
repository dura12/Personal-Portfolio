const Footer = () => {
    return (
      <footer className="px-5 sm:px-10 py-6 border-t border-gray-800 bg-[#0E0E10] text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
  
          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
            <p className="hover:text-white cursor-pointer transition">Terms & Conditions</p>
            <span className="text-gray-500">|</span>
            <p className="hover:text-white cursor-pointer transition">Privacy Policy</p>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-gray-800 border border-gray-700 hover:border-white transition">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-gray-800 border border-gray-700 hover:border-white transition">
              <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-gray-800 border border-gray-700 hover:border-white transition">
              <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </div>
          </div>
  
          {/* Copyright */}
          <p className="text-sm md:text-base text-center">© 2024 Dureti. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  