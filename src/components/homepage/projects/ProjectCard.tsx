import React from "react";
import "aos/dist/aos.css";

type ProjectCardProps = {
	data: {
		id: string;
		title: string;
		desc: string;
		tech: string;
		pic: string;
		github: string;
	};
	key: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	return (
		<div
			data-aos="fade-up"
			className="relative mt-24 flex min-h-[500px] flex-row items-center gap-20 max-xl:gap-10 max-md:mt-10 max-md:flex-col max-md:rounded-3xl max-md:bg-white max-md:bg-opacity-20 max-md:shadow-xl max-sm:mt-5 max-sm:min-h-0 max-sm:gap-5"
		>
			<div className="h-full min-w-[500px] max-2xl:min-w-[400px] max-xl:min-w-[300px] max-lg:min-w-[200px] max-md:w-full">
				<div
					className="relative h-[500px] w-full max-w-[500px] overflow-hidden rounded-3xl bg-black shadow-lg max-2xl:min-w-[400px] max-xl:min-w-[300px] max-lg:min-w-[200px]
                max-md:h-[200px] max-md:max-w-none max-md:rounded-b-none max-md:shadow-none max-sm:h-[100px]"
				>
					<img
						src={props.data.pic}
						className="absolute top-0 left-0 min-h-full object-cover"
						alt="project-preview"
					></img>
				</div>
			</div>
			<div className="flex h-full w-full flex-col items-start pr-12 max-md:px-6 max-md:pb-12">
				<h4 className="mb-2 text-2xl font-terminal text-emerald-600 max-2xl:text-xl max-sm:mb-2 max-sm:text-sm">
					{props.data.tech}
				</h4>
				<h2 className="mb-5 text-5xl font-bold max-2xl:text-4xl max-sm:mb-5 max-sm:text-xl">
					{props.data.title}
				</h2>
				<p className="mb-10 text-2xl max-2xl:text-xl max-sm:mb-0 max-sm:text-lg">
					{props.data.desc}
				</p>
				<a
					className="flex h-14 items-center justify-center rounded-full bg-black px-14 text-xl font-light tracking-widest text-white shadow-xl max-sm:hidden"
					href={props.data.github}
					target="_blank"
				>
					GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
