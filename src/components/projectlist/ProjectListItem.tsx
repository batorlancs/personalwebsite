import React from "react";

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
			className="min-h-[300px] rounded-3xl bg-white bg-opacity-30 shadow-xl duration-500 hover:opacity-80"
		>
			<div className="relative h-[200px] min-w-[100px] overflow-hidden rounded-t-3xl bg-white max-lg:h-[100px]">
				<img
					src={props.project.pic}
					className="absolute top-0 left-0 min-h-full min-w-full object-cover"
					alt="project-preview"
				></img>
			</div>
			<div className="p-8 pb-16 max-sm:p-4">
				<p className="mb-2 font-terminal text-lg text-emerald-700 max-sm:text-sm">
					{props.project.tech}
				</p>
				<h1 className="mb-4 text-3xl font-bold max-sm:text-xl">
					{props.project.title}
				</h1>
				<p className="text-lg max-sm:text-sm">{props.project.desc}</p>
			</div>
		</a>
	);
}

export default ProjectListItem;
