import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import AOS from "aos";
import BackgroundFirst from "../../pic/background5.png";

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="relative flex flex-col items-center font-body">
            <div className="absolute -z-50 h-full w-full top-0 left-0 bg-[url('../pic/wavesfinal.jpg')] bg-cover bg-no-repeat max-lg:hidden"></div>
            {/* <div className="absolute -z-40 w-full h-[1000px] top-[200px] left-0 bg-[url('../pic/background5.png')] bg-contain bg-no-repeat opacity-40 lg:hidden"></div> */}
            <img src={BackgroundFirst} className="absolute -z-40 w-full h-[1000px] top-0 left-0 opacity-60 lg:hidden max-sm:h-[700px] max-sm:opacity-40"></img>
            <div className="absolute h-[800px] w-full bottom-0 left-0 -z-0 bg-[url('../pic/background4.png')] bg-cover bg-no-repeat opacity-30 max-sm:opacity-20"></div>
			<div className="absolute -z-10 h-full w-full top-0 left-0 bg-gray-200 bg-opacity-40"></div>
			<Hero />
			<Project />
            <Skills />
            <Experience />
			<Contact />
		</div>
	);
}

export default Home;
