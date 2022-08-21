import { FaCheckCircle } from 'react-icons/fa';
import { Element } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const backend = [
    { name: 'Java', description: 'Experimented' },
    { name: 'Python', description: 'Intermediate' },
    { name: 'Spring', description: 'Experimented' },
    { name: 'Node', description: 'Intermediate' },
    { name: 'MySQL', description: 'Intermediate' },
    { name: 'MangoDB', description: 'Basic' },
  ]

const frontend = [
    { name: 'HTML', description: 'Experimented' },
    { name: 'CSS', description: 'Intermediate' },
    { name: 'JavaScript', description: 'Experimented' },
    { name: 'Bootstrap', description: 'Experimented' },
    { name: 'Tailwind', description: 'Experimented' },
    { name: 'React', description: 'Intermediate' },
    { name: 'Flutter', description: 'Experimented' },
  ]
  
function services() {

    useEffect(() => {
        Aos.init({duration:1500});
      }, []);

	return (
		<Element id="services" name="services">
			<div className="w-full lg:my-24 my-16 h-auto flex flex-col justify-center items-center ">
				<p className=" text-xl section__subtitle">Skills</p>
				<h1 className="text-indigo-900 md:text-5xl text-4xl font-bold text-center">
					My Expertise
				</h1>
				<div class="xl:flex lg:flex-row lg:justify-around xl:mx-40 md:mx-24 mx-4 mt-16 xl:space-x-48 xl:space-y-0 space-y-14">
                <div class="bg-slate-200 py-10 px-14 rounded-2xl" data-aos="fade-up">
                    <h2 className="text-indigo-900  md:text-3xl text-2xl  font-semibold text-center">
                        Backend Development
                    </h2>
                    <dl className="mt-14 grid gap-x-20 gap-y-10 grid-cols-2 sm:gap-y-12 xl:gap-x-20">
                        {backend.map((feature) => (
                        <div key={feature.name} className="flex flex-row px-0">
                            <FaCheckCircle className="mt-1 mr-2 min-w-fit"/>
                            <div className="text-left">
                                <dt className="font-medium text-gray-900 text-lg">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        </div>
                        ))}
                    </dl>
                </div>
                <div class="bg-slate-200 py-10 px-14 rounded-2xl" data-aos="fade-up">
                    <h2 className="text-indigo-900  md:text-3xl text-2xl  font-semibold text-center">
                        Frontend Development
                    </h2>
                    <dl className="mt-14 grid gap-x-10 gap-y-10 grid-cols-2 sm:gap-y-12 xl:gap-x-20">
                        {frontend.map((feature) => (
                        <div key={feature.name} className="flex flex-row px-0">
                            <FaCheckCircle className="mt-1 mr-2 min-w-fit"/>
                            <div className="text-left">
                                <dt className="font-medium text-gray-900 text-lg">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        </div>
                        ))}
                    </dl>
                </div>
                </div>
			</div>
		</Element>
	);
}

export default services;