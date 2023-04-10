import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import ProjectCardV2 from "./ProjectCardV2";
import PageHeader from "../PageHeader";

type ProjectData = {
	id: string;
	title: string;
	desc: string;
	tech: string;
	github: string;
	time: number;
	pics: Array<string>;
	website: string;
    highlighted?: boolean;
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
			className="relative pt-48 pb-48 w-full max-w-[2000px] px-[10%] max-sm:mt-0 max-sm:pt-10 max-sm:mb-0 max-sm:px-[5%] max-sm:pb-16 bg-black bg-opacity-5 min-[2000px]:bg-opacity-0 max-sm:bg-opacity-0"
		>
			<PageHeader
				title="My Latest Projects"
				buttonTitle="See All"
				buttonFunc={() => {
					navigate("/projects");
				}}
                
			/>
			{projects.length > 0 &&
				projects
                    .filter((project) => {
                        return project.highlighted;
                    })
					.slice(0, 3)
					.map((project) => (
						<ProjectCardV2 data={project} key={project.id} />
					))}
		</div>
	);
}

export default Project;
