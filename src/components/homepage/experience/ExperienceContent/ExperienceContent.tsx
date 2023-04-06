import React from "react";

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
            <h1 className="text-3xl font-terminal font-bold mb-5">Tasks:</h1>
            <div className="text-2xl">
                {props.experience.tasks.map((task) => (
                    <p>
                        {task}
                    </p>
                ))}
            </div>
            <h1 className="text-3xl font-terminal font-bold mt-12 mb-5">Gained Knowledge:</h1>
            <p className="text-2xl">
                {props.experience.learned}
            </p>
        </div>
    );
}

export default ExperienceContent;
