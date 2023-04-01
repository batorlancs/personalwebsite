import React from "react";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";
import CodeIcon from "../../../pic/skillsicons/codeIcon.svg";

const skillsData = [
	{
		name: "JavaScript",
		strength: 8,
		style: "bg-neutral-500",
		textStyle: "text-neutral-600",
	},
	{
		name: "Java",
		strength: 8,
		style: "bg-emerald-500",
		textStyle: "text-emerald-600",
	},
	{
		name: "TypeScript",
		strength: 6,
		style: "bg-blue-400",
		textStyle: "text-blue-500",
	},
	{
		name: "Python",
		strength: 5,
		style: "bg-sky-800",
		textStyle: "text-sky-900",
	},
	{
		name: "C",
		strength: 4,
		style: "bg-rose-500",
		textStyle: "text-rose-600",
	},
];

function getStuff(num: number, style: string) {
	let res = [];
	for (let i = 0; i < num; i++) {
		res.push(<div className={style}></div>);
	}
	return res;
}

function CodingSkills() {
	return (
		<div
			className="w-[500px] min-w-[500px] rounded-3xl max-2xl:w-[400px] max-2xl:min-w-[400px] max-xl:w-full max-sm:rounded-3xl max-sm:min-w-0 max-sm:bg-white max-sm:bg-opacity-20 max-sm:px-6 max-sm:py-8 max-sm:shadow-xl max-sm:backdrop-blur-xl"
			data-aos="fade-up"
		>
			<div className="flex flex-col gap-6 max-sm:gap-3">
				{skillsData.map((skill) => (
					<div>
						<h2
							className={`opacity-1 mb-2 pl-6 text-xl font-terminal font-semibold drop-shadow-lg ${skill.textStyle} max-sm:text-sm`}
						>
							{skill.name}
						</h2>
						<div className="grid h-2 w-full grid-cols-10 overflow-hidden rounded-full bg-black bg-opacity-5 max-sm:h-1">
							{getStuff(skill.strength, skill.style)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CodingSkills;
