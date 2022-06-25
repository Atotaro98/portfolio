const About = (props) => {
  const { data } = props;
  const AboutData = data.About;
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div
        data-aos="fade-in"
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {AboutData.text_1}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{AboutData.text_2}</p>
          </div>
          <div>
            <p>{AboutData.text_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
