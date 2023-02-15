import React from "react";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";
import CodeIcon from "../../../pic/skillsIcons/codeIcon.svg";

const skillsData = [
    {
        name: "JavaScript",
        strength: 8
    },
    {
        name: "Java",
        strength: 8
    },
    {
        name: "TypeScript",
        strength: 6
    },
    {
        name: "Python",
        strength: 5
    },
    {
        name: "C",
        strength: 4
    },
]

function getStuff(num: number) {
    let res = [];
    for (let i = 0; i < num; i++) {
        res.push(
            <div className="bg-black bg-opacity-30"></div>
        )
    }
    return res;
}

function CodingSkills() {
    return (
        <div className="rounded-3xl min-w-[500px] w-[500px]">
            <div className="flex flex-col gap-6 text-xl font-terminal">
                {skillsData.map((skill) => (
                    <div>
                        <h2 className="mb-2 font-semibold opacity-60">{skill.name}</h2>
                        <div className="h-2 w-full bg-black bg-opacity-5 grid grid-cols-10">
                            {getStuff(skill.strength)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CodingSkills;