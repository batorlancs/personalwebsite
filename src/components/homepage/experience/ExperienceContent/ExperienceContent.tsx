import React from "react";
import { uuidv4 } from "@firebase/util";

type ExperienceContentProps = {
    experience: {
        tasks: Array<string>;
        learned: string;
    }
}

const ExperienceContent: React.FC<ExperienceContentProps> = (props) => {
	return (
        <div
            className="w-full max-lg:hidden"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <h1 className="text-4xl font-bold mb-2 max-2xl:text-3xl max-xl:text-2xl">Tasks:</h1>
            <ul className="text-2xl list-disc max-2xl:text-xl max-xl:text-lg">
                {props.experience.tasks.map((task) => (
                    <li className="ml-6" key={uuidv4()}>{task}</li>
                ))}
            </ul>
            <h1 className="text-4xl font-bold mt-12 mb-2 max-2xl:text-3xl max-xl:text-2xl">Gained Knowledge:</h1>
            <p className="text-2xl max-2xl:text-xl max-xl:text-lg">
                {props.experience.learned}
            </p>
        </div>
    );
}

export default ExperienceContent;
