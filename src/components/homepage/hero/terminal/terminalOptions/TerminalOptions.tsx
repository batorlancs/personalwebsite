import { uuidv4 } from "@firebase/util";
import React from "react";

const TerminalOptions = () => {

    const terminalMessages = [
        {
            highlighted: true,
            message: "hi!"
        },
        {
            highlighted: false,
            message: "Here you can ask anything that you want to know about me!"
        },
        {
            highlighted: false,
            message: "-"
        },
        {
            highlighted: true,
            message: "you can also try:"
        }
        
    ]

    const terminalOptions = [
        "> tell me about your projects",
        "> do you have relevant tech experience",
        "> do you have any pets"
    ]

	return (
		<div className="max-xl:hidden">
            <div className='flex flex-row justify-start items-start max-xl:hidden py-2'>
                <p className='text-xl pr-1 pt-[3px]'>👨🏼‍💼</p>
                <div className='pt-[4px] bg-transparent border-none text-neutral-400 text-s w-full'>
                    {terminalMessages.map((terminalMessage) => (
                        <p className={terminalMessage.highlighted ? "text-sky-400" : ""} key={uuidv4()}>
                            {terminalMessage.message}
                        </p>
                    ))}
                    {terminalOptions.map((terminalOption) => (
                        <p className=" text-red-400" key={uuidv4()}>
                            {terminalOption}
                        </p>
                    ))}
                </div>
            </div>
			<hr className="my-3 ml-3 w-full border-t-2 border-dashed opacity-30" />
		</div>
	);
};

export default TerminalOptions;
