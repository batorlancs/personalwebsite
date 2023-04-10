import React from "react";
import PageHeader from "../PageHeader";
import CodingSkills from "./CodingSkills";
import GroupSkills from "./GroupSkills";
import OtherSkills from "./OtherSkills";

function Skills() {

	return (
		<div
			className="relative pt-48 mb-24 w-full max-w-[2000px] px-[10%] max-sm:mb-16 max-sm:px-[5%] max-sm:pt-0"
            id="skills-page"
		>
			<PageHeader
				title="My Skills"
				buttonTitle="See on LinkedIn"
				buttonLink="https://www.linkedin.com/in/gergely-bator/details/skills/"
			/>
			<div className="mt-24 flex min-h-[400px] flex-row items-center justify-between gap-20 max-xl:flex-col max-md:mt-16 max-sm:mt-5 max-sm:gap-5">
				<CodingSkills />
				<div className="flex w-full flex-row justify-between gap-20 max-2xl:gap-10 max-md:flex-col max-sm:gap-5">
					<OtherSkills />
					<GroupSkills />
				</div>
			</div>
		</div>
	);
}

export default Skills;
