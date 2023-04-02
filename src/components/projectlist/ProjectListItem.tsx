import React from "react";
import GitHubIcon from "../../pic/sociallogos/github.png";
import "./ProjectListItemAnim.css";

type ProjectListItemProps = {
    project: {
		id: string;
		title: string;
		desc: string;
		tech: string;
		pic: string;
		github: string;
		time: number;
	};
}

const ProjectListItem: React.FC<ProjectListItemProps> = (props) => {
	return (
		<a
			href={props.project.github}
			target="_blank"
			className="itemmainbox min-h-[300px] rounded-3xl bg-white bg-opacity-30 shadow-xl duration-500 hover:opacity-80 max-sm:hover:border-0"
		>
			<div className="relative h-[200px] min-w-[100px] overflow-hidden rounded-t-2xl bg-white max-lg:h-[100px]">
				<img
					src={props.project.pic}
					className="absolute top-0 left-0 min-h-full min-w-full object-cover"
					alt="project-preview"
				></img>
                <div className="itembox absolute flex flex-row items-center top-5 left-5 z-5 h-16 bg-neutral-800 rounded-full duration-500">
                    <img className="h-16 w-16 invert" src={GitHubIcon}></img>
                    <p className="itemtext font-terminal text-white text-xl duration-500 whitespace-nowrap">open in github</p>
                </div>
			</div>
			<div className="p-8 pb-16 max-sm:p-4 max-sm:pb-8">
				<p className="mb-2 font-terminal text-lg text-emerald-700 max-sm:text-sm max-sm:mb-0">
					{props.project.tech}
				</p>
				<h1 className="mb-4 text-3xl font-bold max-sm:text-xl max-sm:mb-1">
					{props.project.title}
				</h1>
				<p className="text-lg max-sm:text-sm">{props.project.desc}</p>
			</div>
		</a>
	);
}

export default ProjectListItem;