import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = (props) => {
  const { data } = props;
  const HomeData = data.Home;

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div
        data-aos="fade-in"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-600">{HomeData.text_1}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {HomeData.text_2}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {HomeData.text_3}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"> {HomeData.text_4} </p>
        <div className="flex items-start">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            {HomeData.text_5}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
