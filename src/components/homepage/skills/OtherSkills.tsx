import React from "react";
import PlusIcon from "../../../pic/skillsIcons/plusIcon.svg";

const otherData = ["IntelliJ", "VSCode", "Photoshop", "MS Office"];

function OtherSkills() {
    return (
        <div
            className="bg-white bg-opacity-20 shadow-xl backdrop-blur-xl rounded-3xl w-full min-h-[400px]"
            data-aos="fade-up"
            data-aos-delay={400}
        >
            <img src={PlusIcon} className="h-10 m-8 mb-0 opacity-50"></img>
            <div className="flex flex-col gap-4 p-8 pb-24">
                {otherData.map((item) => (
                    <div className="flex flex-row justify-start items-center gap-8">
                        <div className="h-4 w-4 bg-black bg-opacity-50 rounded-full"></div>
                        <h3 className="text-xl opacity-1">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherSkills;