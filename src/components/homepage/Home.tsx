import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./hero/Hero";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import AOS from "aos";

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="relative flex flex-col items-center font-body">
            <div className="absolute -z-50 h-full w-full top-0 left-0 bg-[url('../pic/wavesfinal.jpg')] bg-cover bg-no-repeat"></div>
            <div className="absolute h-[800px] w-full bottom-0 left-0 -z-0 bg-[url('../pic/waves4.png')] bg-cover bg-no-repeat opacity-60"></div>
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
