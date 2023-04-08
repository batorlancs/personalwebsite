import React from "react";

type ContentButtonsNormalProps = {
    github: string;
    website?: string;
}

const ContentButtonsNormal: React.FC<ContentButtonsNormalProps> = (props) => {
	return (
        <div className="flex flex-row gap-5 max-sm:gap-2 max-sm:w-full max-md:hidden ">
            <a
                className="flex h-14 items-center justify-between rounded-full bg-black shadow-xl hover:bg-opacity-80
                max-2xl:h-12 max-md:text-sm max-md:mt-5 max-sm:h-10 max-sm:w-full"
                href={props.github}
                target="_blank"
            >
                <p className="text-xl font-light tracking-widest text-white px-10 whitespace-nowrap max-lg:text-lg max-md:text-base max-sm:hidden">Source Code</p>
                <p className="text-sm font-light tracking-widest text-white px-6 sm:hidden">GitHub</p>
            </a>
            { props.website !== "" &&
            <a
                className="flex h-14 items-center justify-between rounded-full bg-black shadow-xl hover:bg-opacity-80
                max-2xl:h-12 max-md:text-sm max-md:mt-5 max-sm:h-10"
                href={props.website}
                target="_blank"
            >
                <p className="text-xl font-light tracking-widest text-white px-10 max-lg:text-lg max-md:text-base max-sm:p-6 max-sm:text-sm">View</p>
            </a>}
        </div>
    );
}

export default ContentButtonsNormal;