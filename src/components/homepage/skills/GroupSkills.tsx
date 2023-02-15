import React from "react";
import GroupIcon from "../../../pic/skillsIcons/groupIcon.svg"

const groupData = ["Version Control - Git", "Agile Methodology", "Teamwork", "Fluent English", "Native Hungarian"]

function GroupSkills() {
    return (
        <div className="bg-white bg-opacity-20 shadow-xl backdrop-blur-xl rounded-3xl w-full min-h-[400px]">
            <img src={GroupIcon} className="h-10 m-8 mb-0 opacity-30"></img>
            <div className="flex flex-col gap-4 text-xl p-8 pb-24">
                {groupData.map((item) => (
                    <div className="flex flex-row justify-start items-center gap-8">
                        <div className="h-4 w-4 bg-black bg-opacity-30 rounded-full"></div>
                        <h3>{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupSkills;