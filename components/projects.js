import { FaCheckCircle } from 'react-icons/fa';
import { Element } from "react-scroll";

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
  
function projects() {
	return (
		<Element id="projects" name="projects">
			<div className="w-full lg:my-24 my-16 h-auto flex flex-col justify-center items-center ">
				<p className=" text-xl section__subtitle">Projects</p>
				<h1 className="text-indigo-900 md:text-5xl text-4xl font-bold text-center">
					All my works
				</h1>
				<div class="xl:flex lg:flex-row lg:justify-around xl:mx-40 md:mx-24 mx-4 mt-16 xl:space-x-48 xl:space-y-0 space-y-14">
              
                </div>
			</div>
		</Element>
	);
}

export default projects;