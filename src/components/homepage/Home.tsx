import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import AOS from "aos";

function Home() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="relative flex flex-col items-center bg-[url('../pic/waves6.png')] bg-cover bg-no-repeat font-body">
			<div className="absolute z-0 h-full w-full bg-gray-200 bg-opacity-40"></div>
			<Hero />
			<Project />
			<Contact />
		</div>
	);
}

export default Home;
