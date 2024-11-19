import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hello! I'm Piyush Jani, a graduated student specializing in Frontend Web Development. Throughout my academic journey, I have gained comprehensive knowledge and hands-on experience in various programming languages, frameworks, and tools related to web development.
        </p>

        <br />

        <p className="text-xl">
        With a passion for creating efficient and user-friendly applications, I have honed my skills in front-end development. I am proficient in HTML, CSS, JavaScript, and modern library ie. ReactJS.<br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;
