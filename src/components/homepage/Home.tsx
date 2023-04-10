import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import AOS from "aos";
import BackgroundFirst from "../../pic/background5.png";
import BackgroundGreen from "../../pic/backgroundGreen.png";
import Lines from "../../pic/design/Sprinkle.svg";

function Home() {

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="relative flex flex-col items-center font-body">
            {/* <div className="absolute -z-50 h-full w-full top-0 left-0 bg-[url('../pic/wavesfinal.jpg')] bg-cover bg-no-repeat opacity-50 max-lg:hidden"></div> */}
            {/* <div className="absolute -z-50 h-[1000px] w-full top-0 left-0 bg-[url('../pic/background4.png')] blur-3xl bg-cover bg-no-repeat opacity-30 max-lg:hidden"></div> */}
            {/* <img className="absolute -z-10 w-full h-[900px] bg-cover bg-[url('../pic/design/pattern2.svg')] top-0 left-0 opacity-30 max-2xl:h-[700px]"></img>
            <img className="absolute -z-10 w-full h-[900px] bg-cover bg-[url('../pic/design/pattern.svg')] top-0 left-0 opacity-30 max-2xl:h-[700px]"></img> */}
            {/* <img src={BackgroundFirst} className="absolute -z-40 w-full h-[1200px] top-[00px] left-0 opacity-30 max-sm:h-[700px] max-sm:opacity-20"></img> */}
            {/* <img src={BackgroundFirst} className="absolute -z-40 w-full h-[1000px] top-0 left-0 opacity-40 lg:hidden max-sm:h-[700px] max-sm:opacity-20"></img> */}
            {/* <div className="absolute h-[800px] w-full bottom-0 left-0 -z-0 bg-[url('../pic/background4.png')] bg-cover bg-no-repeat opacity-20 max-sm:opacity-20"></div> */}
			<div className="absolute -z-20 h-full w-full top-0 left-0 bg-black bg-opacity-[15%]"></div>
			<Hero />
			<Project />
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('../pic/design/icons.svg')] bg-cover opacity-[2%] max-sm:hidden"></div>
                <Skills />
                <Experience />
            </div>
			<Contact />
		</div>
	);
}

export default Home;
