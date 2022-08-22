import "aos/dist/aos.css";
import { Element } from "react-scroll";
import { FaArrowRight } from 'react-icons/fa';
function projects() {

	return (
		<Element id="projects" name="projects">
			<div className="w-full lg:my-20 my-16 h-auto flex flex-col justify-center items-center ">
				<p className=" text-xl section__subtitle">Projects</p>
				<h1 className="text-indigo-900 md:text-5xl text-4xl font-bold text-center">
					All my works
				</h1>
        <div className="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14 xl:w-fit lg:w-2/3 w-fit" data-aos="fade-up">
        <img className="xl:h-60 lg:h-64 md:h-64 h-44 rounded-lg object-cover shadow-xl xl:mx-0 mx-auto" src="/images/works-medsoc.png" alt="" />
          <div className="xl:text-left text-center xl:w-1/2 lg:3/4">
          <h2 className="text-indigo-900 md:text-4xl text-3xl font-bold">
            Web App - EBoarding
          </h2>
          <h5 className="mt-3 text-xl text-gray-600">Angular, Java, Spring, MySQL</h5>
          <p className=" font-normal font mt-5 mb-5 flex-wrap text-gray-600">
          During my internship at Medsoc, I had the goal to build a new eBoarding web application for doctors as a full-time developer. You can see in detail the development of the web application just below.
          </p>
          <a href="/files/Rapport_de_Stage_2021_-_Projet_eBoarding_-_Aberkan_Yassin_52186.pdf" className="flex flex-row items-center justify-between w-64 transition delay-2000 hover:translate-x-4 duration-2000 xl:mx-0 mx-auto" rel="noopener noreferrer" target="_blank">
            <span className="text-indigo-900  font-semibold text-lg">
              Check my internship report
            </span>
            <FaArrowRight className="text-indigo-900 "/>
          </a>
          </div>
        </div>
				<div className="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14 xl:w-fit lg:w-2/3 w-fit" data-aos="fade-up">
          <img className="lg:h-72 md:h-80 h-56 rounded-lg object-cover shadow-xl xl:mx-0 mx-auto" src="/images/works-beformation.png" alt="" />
          <div className="xl:text-left text-center xl:w-1/2 lg:3/4">
          <h2 className="text-indigo-900 md:text-4xl text-3xl font-bold">
            Website - BeFormation
          </h2>
          <h5 className="mt-3 text-xl text-gray-600">React, Tailwind, Javascript, HTML, CSS</h5>
          <p className="font-normal font mt-5 mb-5 flex-wrap text-gray-600">
          I had to design a showcase site for a non-profit company. Be formation proposes trainings for all people who are interested in technology. For example Photoshop, javascript and more !
					</p>
          <a href="https://github.com/yassin-aberkan/be-formation-site" className="flex flex-row items-center justify-between w-40 transition delay-2000 hover:translate-x-4 duration-2000 xl:mx-0 mx-auto" rel="noopener noreferrer" target="_blank">
            <span className="text-indigo-900 font-semibold text-lg">
              Check in Github
            </span>
            <FaArrowRight className="text-indigo-900"/>
          </a>
          </div>
        </div>
        <div className="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14 xl:w-fit lg:w-2/3 w-fit" data-aos="fade-up">
          <div className="flex flex-row justify-center space-x-10 space-y-0 xl:mr-5">
            <img className="lg:h-80 md:h-80 h-72 rounded-lg object-cover shadow-xl" src="/images/works-vasit01.jpeg" alt="" />
            <img className="lg:h-80 md:h-80 h-72 rounded-lg object-cover shadow-xl" src="/images/works-vasit02.jpeg" alt="" />
          </div>
          
          <div className="xl:text-left text-center xl:w-1/2 lg:3/4">
          <h2 className="text-indigo-900 md:text-4xl text-3xl font-bold">
            Mobile - In progress ...
          </h2>
          <h5 className="mt-3 text-xl text-gray-600">Flutter, Java, Spring, Firebase</h5>
          <p className=" font-normal font mt-5 mb-5 flex-wrap text-gray-600">
          I&apos;m very interested in all the new technologies like flutter which arrived recently and offers development tools for mobile. So, I am in the process of developping a social network application using flutter for the frontend and firebase and java spring for the backend.
          </p>
          <a href="https://github.com/yassin-aberkan/vasit-mobile" className="flex flex-row items-center justify-between w-40 transition delay-2000 hover:translate-x-4 duration-2000 xl:mx-0 mx-auto" rel="noopener noreferrer" target="_blank">
            <span className="text-indigo-900  font-semibold text-lg">
              Check in Github
            </span>
            <FaArrowRight className="text-indigo-900 "/>
          </a>
          </div>
        </div>
			</div>
		</Element>
	);
}

export default projects;