import React, { useState, useEffect } from "react";
import ExperienceBoxChooser from "./ExperienceBoxChooser";

type ExperienceBoxProps = {
    experience: {
        time: number;
        title: string;
        company: string;
        type: string;
        date_from: string;
        date_to: string;
        location: string;
        tasks: Array<string>;
        learned: string;
    }
    current: number;
    setCurrent: (num: number) => void;
    length: number;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = (props) => {

    const {title, company, type, date_from, date_to, location} = props.experience;

	return (
        <div
            className="h-full min-w-[500px] max-w-[500px] bg-white bg-opacity-20 rounded-3xl shadow-xl p-12 flex flex-col
            max-2xl:min-w-[400px] max-2xl:max-w-[400px] max-xl:min-w-[300px] max-xl:max-w-[300px] max-lg:w-full max-lg:max-w-full max-sm:p-6"
            data-aos="fade-up"
        >
            <div className="h-full flex flex-col items-start justify-center">
                <h1 className="text-4xl font-bold font-terminal max-2xl:text-3xl max-xl:text-2xl max-sm:text-xl">{title}</h1>
                <h2 className="text-3xl mt-2 max-2xl:text-2xl max-xl:text-xl max-sm:text-lg">at {company}</h2>
                <h3 className="text-xl mt-5 italic max-2xl:text-lg max-sm:text-base">{type}</h3>
                <h3 className="text-xl  italic max-2xl:text-lg max-sm:text-base">{date_from} - {date_to}</h3>
                <h3 className="text-xl text-neutral-400 italic max-2xl:text-lg max-sm:text-base">{location}</h3>
                <div className="lg:hidden mt-5">
                    <h1 className="text-xl font-terminal font-bold max-sm:text-lg">Tasks:</h1>
                    <div className="text-lg max-sm:text-base">
                        {props.experience.tasks.map((task) => (
                            <div className="flex flex-row gap-5">
                                <div className="h-2 w-2 bg-black rounded-full mt-[12px] max-sm:mt-[8px]"></div>
                                <p>{task}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-xl font-terminal font-bold mt-5 max-sm:text-lg">Gained Knowledge:</h1>
                    <p className="text-lg mb-10 max-sm:text-base">
                        {props.experience.learned}
                    </p>
                    </div>
                </div>
            <ExperienceBoxChooser current={props.current} setCurrent={props.setCurrent} length={props.length}/>
        </div>
    );
}

export default ExperienceBox;
