import React from "react";
import ArrowRight from "../../../../../pic/arrow-right.svg";


const TerminalOptions = () => {

	const terminalWelcome = [
		"hi!",
		"I am using 'OpenAI' API to answer your questions.",
		"Ask me anything that you want to know about me!",
	];

	return (
		<div className="max-xl:hidden">
			{terminalWelcome.map((line) => (
				<div
					className="flex flex-row items-start justify-start"
					key={line}
				>
					<img src={ArrowRight} className="h-8 invert" alt="arrow-right-icon"></img>
					<p className="text-s border-none bg-transparent pt-[4px] text-white">
						{line}
					</p>
				</div>
			))}
			<hr className="my-3 ml-3 w-full border-t-2 border-dashed opacity-30" />
		</div>
	);
};

export default TerminalOptions;
