import {
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaEnvelope,
  } from "react-icons/fa";

import "aos/dist/aos.css";
import { Element } from "react-scroll";

const infos = [
    {
      name: "Appel",
      description:
        "+32 488 617 908",
      image: FaPhoneAlt,
    },
    {
      name: "Mail",
      description:
        "yaberkan.pro@gmail.com",
      image: FaEnvelope,
    },
    {
        name: "Location",
        description:
          "Brussels metropolitan area",
        image: FaMapMarkedAlt,
      },

  ];

function contact() {

	return (
		<Element id="contact" name="contact">
			<div className="w-full mt-16 mb-32 h-auto flex flex-col justify-center items-center">
				<p className=" text-xl section__subtitle">Contact</p>
				<h1 className="text-indigo-900 md:text-5xl text-4xl font-bold text-center">
					Contact me now !
				</h1>
                <div className="xl:flex lg:flex-row lg:justify-between xl:mx-64 md:mx-24 mx-4 mt-20 xl:space-x-24 xl:space-y-0 space-y-14" data-aos="fade-dawn">
                    <img src = "/contact.svg" alt="Contact Image" className="w-96"/>
                    <div className="max-w-5xl mx-auto">

                        <div className="pt-4 md:grid-cols-3 lg:grid-cols-{{in}} justify-center" data-aos="fade-top">
                        {infos.map((info) => (
                        
                        <div key={info.name} className="px-6 py-3 mb-3 overflow-hidden bg-slate-200 rounded-md">
                            <h2 className=" font-medium flex space-x-3 justify-start">
                            <info.image className="flex-shrink-0 h-6 w-6 text-whitehover:text-gray-300 text-indigo-900" aria-hidden="true"></info.image>
                            <span className="text-indigo-900">{info.name}</span>
                            <p className="max-w-md text-gray-600 text-sm md:text-base md:mt-0 mt-1">
                            {info.description}
                            </p>
                            </h2>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
				
			</div>
		</Element>
	);
}

export default contact;