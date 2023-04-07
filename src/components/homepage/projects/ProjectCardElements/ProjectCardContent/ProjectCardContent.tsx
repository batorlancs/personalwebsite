import React from "react";
import ContentButtonsMobile from "./ContentButtonsMobile";
import ContentButtonsNormal from "./ContentButtonsNormal";

type ProjectCardContentProps = {
	data: {
		id: string;
		title: string;
		desc: string;
		tech: string;
		github: string;
        time: number;
        website: string;
	};
};

const ProjectCardContent: React.FC<ProjectCardContentProps> = (props) => {
	return (
        <div className="flex h-full w-full flex-col items-start pr-12 max-md:px-6 max-md:pb-5">
            <h4 className="mb-2 text-2xl font-terminal text-emerald-600 max-2xl:text-xl max-sm:mb-2 max-sm:text-sm">
                {props.data.tech}
            </h4>
            <h2 className="mb-5 text-5xl font-bold max-2xl:text-4xl max-sm:mb-2 max-sm:text-xl">
                {props.data.title}
            </h2>
            <p className="mb-8 text-2xl max-2xl:text-xl max-md:mb-5 max-sm:mb-0 max-sm:text-base">
                {props.data.desc}
            </p>
            <ContentButtonsNormal github={props.data.github} website={props.data.website} />
            <ContentButtonsMobile github={props.data.github} website={props.data.website} />
        </div>
    );
}

export default ProjectCardContent;
