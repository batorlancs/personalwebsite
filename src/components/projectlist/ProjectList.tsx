import React from "react";
import ProjectListItem from "./ProjectListItem";

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
        <div className="bg-neutral-200 px-[10%] flex items-start justify-center max-sm:px-[5%]">
		<div className="max-w-[2000px] pt-56 pb-44 max-sm:pt-44 max-lg:pb-24">
            <h1 className="text-5xl font-terminal font-bold max-lg:text-4xl max-sm:text-2xl">My Recent Projects</h1>
            <p className="text-2xl mb-24 mt-2 max-sm:text-sm max-sm:mb-16">You can find all of my projects on my github. The link is in the top-right corner of the page.</p>
            <div className="grid grid-cols-3 gap-12 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-6">
                {props.projects.map((project) => (
                    <ProjectListItem project={project} key={project.id}/>
                ))}
                {/* white spaces to make the grid fuill */}
                {props.projects.length % 3 === 2 && (
                    <div className={`${whiteSquare} max-2xl:hidden`}></div>
                )}
                {props.projects.length % 3 === 1 && (
                    <>
                    <div className={`${whiteSquare} max-2xl:hidden`}></div>
                    <div className={`${whiteSquare} max-2xl:hidden`}></div>
                    </>
                )}
                {props.projects.length % 2 === 1 && (
                    <div className={`${whiteSquare} 2xl:hidden max-lg:hidden`}></div>
                )}
            </div>
		</div>
        </div>
	);
};

export default ProjectList;
