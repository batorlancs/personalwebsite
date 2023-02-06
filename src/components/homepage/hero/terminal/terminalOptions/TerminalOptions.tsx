import React from "react";
import ArrowRight from "../../../../../pic/arrow-right.svg";

type TerminalOptionsProps = {
	highlighted: number;
};

const TerminalOptions: React.FC<TerminalOptionsProps> = (props) => {

    // is the option in green highlight by the arrowkeys
	function isHighlighted(orderNum: number): string {
		if (orderNum === props.highlighted) return "text-green-400";
		return "opacity-30 text-white";
	}

	const terminalWelcome = [
		"hi",
		"this is the terminal",
		"what would you like to do?",
	];

	const terminalOptions = [
		{
			title: "discover all my projects",
			order: 0,
		},
		{
			title: "learn about my skills and experience",
			order: 1,
		},
		{
			title: "contact me",
			order: 2,
		},
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
			{terminalOptions.map((option) => (
				<div
					className={`flex cursor-pointer flex-row items-start justify-start hover:text-white hover:opacity-100 ${isHighlighted(option.order)}`}
                    key={option.order}
				>
					<img src={ArrowRight} className="h-8 invert" alt="arrow-right-icon"></img>
					<p className="text-s border-none bg-transparent pt-[4px]">
						{option.title}
					</p>
				</div>
			))}
			<hr className="my-3 ml-3 w-full border-t-2 border-dashed opacity-30" />
		</div>
	);
};

export default TerminalOptions;
