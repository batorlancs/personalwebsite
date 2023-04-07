import React from "react";
import PlusIcon from "../../../pic/skillsicons/plusIcon.svg";
import { uuidv4 } from "@firebase/util";

const otherData = ["PHP", "HTML", "CSS", "Tailwindcss", "MySQL", "Firebase", "Git", "Unix", "VSCode", "Photoshop"];

function OtherSkills() {
    return (
        <div
            className="bg-white bg-opacity-20 shadow-xl backdrop-blur-xl rounded-3xl w-full min-h-full max-sm:min-h-0"
            data-aos="fade-up"
            data-aos-delay={400}
        >
            <img src={PlusIcon} className="h-10 m-8 mb-0 opacity-50 max-sm:h-8"></img>
            {/* <div className="flex flex-col gap-4 p-8 pb-24 max-sm:pb-10 max-sm:pt-4 max-sm:gap-0">
                {otherData.map((item) => (
                    <h3 className="text-xl opacity-1 max-sm:text-lg">{item}</h3>
                ))}
            </div> */}
            <div className="grid grid-cols-2 max-w-[280px] gap-2 p-8 pb-24 max-sm:pb-10 max-sm:pt-4 max-sm:gap-0">
                {otherData.map((item) => (
                    <h3 className="text-xl opacity-1 max-sm:text-lg" key={uuidv4()}>{item}</h3>
                ))}
            </div>
        </div>
    )
}

export default OtherSkills;