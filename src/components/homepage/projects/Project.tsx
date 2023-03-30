import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "aos/dist/aos.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";

type ProjectData = {
	id: string;
	title: string;
	desc: string;
	tech: string;
	pic: string;
	github: string;
	time: number;
};

function Project() {
	const navigate = useNavigate();

	const [projects, setProjects] = useState<ProjectData[]>([]);

	const getProjects = async () => {
		const data = await getDocs(collection(db, "projects"));
		const formattedData = data.docs.map((doc) => ({
			...(doc.data() as ProjectData),
			id: doc.id,
		}));
		//set data in order (based on time)
		formattedData.sort((a, b) =>
			a.time < b.time ? 1 : b.time < a.time ? -1 : 0
		);
		setProjects(formattedData);
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<div
			id="projects-page"
			className="mt-24 mb-24 w-full max-w-[2000px] px-[10%] max-sm:mt-12 max-sm:mb-16 max-sm:px-[5%] "
		>
			<div
				className="flex flex-row items-center justify-between overflow-hidden rounded-3xl bg-white bg-opacity-20 py-6 px-12 shadow-lg backdrop-blur-xl
                max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4"
				data-aos="fade-up"
			>
				<h1 className="text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
					My Latest Projects
				</h1>
				<button
					className="text-2xl text-stone-500 max-md:text-xl max-sm:text-lg"
					onClick={() => {
						navigate("/projects");
					}}
				>
					See All
				</button>
			</div>
			{projects.length > 0 &&
				projects
					.slice(0, 2)
					.map((project) => (
						<ProjectCard data={project} key={project.id} />
					))}
		</div>
	);
}

export default Project;
