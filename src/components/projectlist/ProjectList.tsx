import React from "react";

type ProjectListProps = {
	projects: {
		id: string;
		title: string;
		desc: string;
		tech: string;
		pic: string;
		github: string;
		time: number;
	}[];
};

const whiteSquare = "min-h-[300px] rounded-3xl bg-white bg-opacity-30 shadow-xl";

const ProjectList: React.FC<ProjectListProps> = (props) => {
	return (
		<div className="grid max-w-[2000px] grid-cols-3 gap-12 bg-neutral-200 px-[10%] pt-56 pb-56">
			{props.projects.map((project) => (
				<a
					href={project.github}
					target="_blank"
					className="min-h-[300px] rounded-3xl bg-white bg-opacity-30 shadow-xl duration-500 hover:opacity-80"
				>
					<div className="relative h-[200px] min-w-[100px] overflow-hidden rounded-t-3xl bg-white">
						<img
							src={project.pic}
							className="absolute top-0 left-0 min-h-full object-cover"
							alt="project-preview"
						></img>
					</div>
					<div className="p-8 pb-16">
						<p className="mb-2 font-terminal text-lg text-emerald-700">
							{project.tech}
						</p>
						<h1 className="mb-4 text-2xl font-semibold uppercase">
							{project.title}
						</h1>
						<p className="text-lg">{project.desc}</p>
					</div>
				</a>
			))}
			{/* white spaces to make the grid fuill */}
			{props.projects.length % 3 === 2 && (
				<div className={whiteSquare}></div>
			)}
			{props.projects.length % 3 === 1 && (
				<div className={whiteSquare}></div>
			)}
			{props.projects.length % 3 === 1 && (
				<div className={whiteSquare}></div>
			)}
		</div>
	);
};

export default ProjectList;
