import React from "react";

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
            <p className="mb-8 text-2xl max-2xl:text-xl max-md:mb-5 max-sm:mb-0 max-sm:text-lg">
                {props.data.desc}
            </p>
            <div className="flex flex-row gap-5">
                <a
                    className="flex h-14 items-center justify-between rounded-full bg-black shadow-xl hover:bg-opacity-80
                    max-2xl:h-12 max-md:text-sm max-md:mt-5 max-sm:h-10"
                    href={props.data.github}
                    target="_blank"
                >
                    <p className="text-xl font-light tracking-widest text-white px-10 max-lg:text-lg max-md:text-base max-sm:p-8">Source Code</p>
                </a>
                { props.data.website !== "" &&
                <a
                    className="flex h-14 items-center justify-between rounded-full bg-black shadow-xl hover:bg-opacity-80
                    max-2xl:h-12 max-md:text-sm max-md:mt-5 max-sm:h-10"
                    href={props.data.website}
                    target="_blank"
                >
                    <p className="text-xl font-light tracking-widest text-white px-10 max-lg:text-lg max-md:text-base max-sm:p-8">View</p>
                </a>}
            </div>
        </div>
    );
}

export default ProjectCardContent;
