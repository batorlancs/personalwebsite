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
        "> do you have pets?"
    ]

	return (
		<div className="max-xl:hidden">
            <div className='flex flex-row justify-start items-start max-xl:hidden py-2'>
                <p className='text-xl pr-1 pt-[3px]'>👨🏼‍💼</p>
                <p className='pt-[4px] bg-transparent border-none text-neutral-400 text-s w-full'>
                    {terminalMessages.map((terminalMessage) => (
                        <p className={terminalMessage.highlighted ? "text-emerald-500" : ""}>
                            {terminalMessage.message}
                        </p>
                    ))}
                    {terminalOptions.map((terminalOption) => (
                        <p className=" text-red-400 opacity-50">
                            {terminalOption}
                        </p>
                    ))}
                </p>
            </div>
			<hr className="my-3 ml-3 w-full border-t-2 border-dashed opacity-30" />
		</div>
	);
};

export default TerminalOptions;
