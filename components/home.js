import React from "react";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
			<div className="container mx-auto mt-8 md:mt-0 lg:space-x-10 lg:grid grid-cols-3 justify-center lg:pt-20 pt-8 lg:px-0 px-6 lg:pb-24 pb-12">
				<div className="grid justify-center items-center order-1 col-span-1">
				<img className="lg:h-96 md:h-80 h-64 rounded-tl-lg rounded-[48px] rounded-br-lg object-cover ml-10" src="/images/profile.jpeg" alt="" />
				</div>
				<div className=" flex flex-col mt-8 lg:mt-0 justify-center lg:items-start items-center items col-span-2">
					<p className="mb-6 lg:text-left text-xl section__subtitle">Hello</p>
					<h1 className="font-bold lg:text-6xl md:text-5xl text-4xl md:text-left mb-3">
						I am <span className="text-indigo-900">Yassin Aberkan</span>
					</h1>
					<h5 className="mb-6 lg:text-left text-xl text-gray-600">Fullstack Developer</h5>
					<p className="text-left font-normal font mb-5 flex-wrap text-gray-600">
					Hello, my name is Yassin, and I am 22 years old. Being passionate about computer science, I turned to studies in computer science to get my bachelor's degree in computer science management in 2021 at HE2B ESI. Since then, I have been training to expand my knowledge as much as possible to learn even more!
					</p>
					<a href="files\cv_yassin.pdf" target="_blank"><button className="block mt-8 mx-auto md:mx-0 py-3 px-6 w-60 h-16 text-red-50 text-lg font-semibold rounded-xl bg-indigo-900">Download Resume !</button></a>
					
				</div>
			</div>
			</div>
		</Element>
	);
}

export default Home;