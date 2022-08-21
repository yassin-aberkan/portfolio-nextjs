import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";
import { FaArrowRight } from 'react-icons/fa';
function projects() {

  useEffect(() => {
    Aos.init({duration:1500});
  }, []);

	return (
		<Element id="projects" name="projects">
			<div className="w-full lg:my-20 my-16 h-auto flex flex-col justify-center items-center ">
				<p className=" text-xl section__subtitle">Projects</p>
				<h1 className="text-indigo-900 md:text-5xl text-4xl font-bold text-center">
					All my works
				</h1>
				<div class="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14" data-aos="fade-dawn">
          <img className="lg:h-80 md:h-80 h-56 rounded-lg object-cover shadow-xl xl:mx-0 mx-auto" src="/images/works-beformation.png" alt="" />
          <div className="xl:text-left text-center xl:w-1/2 lg:3/4">
          <h2 className="text-indigo-900 md:text-4xl text-3xl font-bold">
            Website - BeFormation
          </h2>
          <h5 className="mt-3 text-xl text-gray-600">React, Tailwind, Javascript, HTML, CSS</h5>
          <p className="font-normal font mt-5 mb-5 flex-wrap text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
						aperiam placeat molestiae atque tempore perspiciatis laboriosam
						quasi pariatur, vitae sequi veritatis veniam rerum, quos
						consectetur commodi rem totam voluptatum? Hic!
					</p>
          <a href="https:\\github.com" className="flex flex-row items-center justify-between w-40 transition delay-2000 hover:translate-x-4 duration-2000 xl:mx-0 mx-auto">
            <span className="text-indigo-900 font-semibold text-lg">
              Check in Github
            </span>
            <FaArrowRight className="text-indigo-900"/>
          </a>
          </div>
        </div>
        <div class="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14" data-aos="fade-dawn">
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
						aperiam placeat molestiae atque tempore perspiciatis laboriosam
						quasi pariatur, vitae sequi veritatis veniam rerum, quos
						consectetur commodi rem totam voluptatum? Hic!
					</p>
          <a href="https:\\github.com" className="flex flex-row items-center justify-between w-40 transition delay-2000 hover:translate-x-4 duration-2000 xl:mx-0 mx-auto">
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