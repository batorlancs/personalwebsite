import React, { useState } from "react";
// import "aos/dist/aos.css";
import ProjectCardPic from "./ProjectCardElements/ProjectCardPic";
import ProjectCardContent from "./ProjectCardElements/ProjectCardContent/ProjectCardContent";

type ProjectCardProps = {
	data: {
		id: string;
		title: string;
		desc: string;
		tech: string;
		github: string;
		time: number;
		pics: Array<string>;
		website: string;
	};
};

const ProjectCardV2: React.FC<ProjectCardProps> = (props) => {
	return (
		<div
			data-aos="fade-up"
			className="relative mt-24 flex min-h-[400px] flex-row items-center gap-20 max-xl:gap-10 max-md:mt-10 max-md:flex-col max-md:rounded-3xl max-md:bg-white max-md:bg-opacity-20 max-md:shadow-xl max-sm:mt-5 max-sm:min-h-0 max-sm:gap-5"
		>
			<ProjectCardPic pics={props.data.pics} />
			<ProjectCardContent data={props.data} />
		</div>
	);
};

export default ProjectCardV2;
