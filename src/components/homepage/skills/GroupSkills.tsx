import React from "react";
import GroupIcon from "../../../pic/skillsicons/groupIcon.svg";
import { uuidv4 } from "@firebase/util";

const groupData = ["Version Control - Git", "Agile Methodology", "Collaborative Experience", "Fluent English", "Native Hungarian"]

function GroupSkills() {
    return (
        <div
            className="bg-white bg-opacity-20 shadow-xl backdrop-blur-xl rounded-3xl w-full min-h-full max-sm:min-h-0"
            data-aos="fade-up"
            data-aos-delay={200}
        >
            <img src={GroupIcon} className="h-10 m-8 mb-0 opacity-50 max-sm:h-8"></img>
            <div className="flex flex-col gap-4 p-8 pb-24 max-sm:gap-2 max-sm:pb-10 max-sm:pt-4">
                {groupData.map((item) => (
                    <div className="flex flex-row justify-start items-center gap-8 max-sm:gap-4" key={uuidv4()}>
                        <div className="h-4 w-4 bg-black bg-opacity-50 rounded-full max-sm:h-2 max-sm:w-2"></div>
                        <h3 className="text-xl opacity-1 max-sm:text-lg">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupSkills;