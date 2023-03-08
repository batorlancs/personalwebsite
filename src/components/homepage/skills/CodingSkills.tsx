import React from "react";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";
import CodeIcon from "../../../pic/skillsIcons/codeIcon.svg";

const skillsData = [
    {
        name: "JavaScript",
        strength: 8,
        style: "bg-neutral-500",
        textStyle: "text-neutral-600"
    },
    {
        name: "Java",
        strength: 8,
        style: "bg-emerald-500",
        textStyle: "text-emerald-600"
    },
    {
        name: "TypeScript",
        strength: 6,
        style: "bg-blue-400",
        textStyle: "text-blue-500"
    },
    {
        name: "Python",
        strength: 5,
        style: "bg-sky-800",
        textStyle: "text-sky-900"
    },
    {
        name: "C",
        strength: 4,
        style: "bg-rose-500",
        textStyle: "text-rose-600"
    },
]

function getStuff(num: number, style: string) {
    let res = [];
    for (let i = 0; i < num; i++) {
        res.push(
            <div className={style}></div>
        )
    }
    return res;
}

function CodingSkills() {
    return (
        <div
            className="rounded-3xl min-w-[500px] w-[500px]"
            data-aos="fade-up"
        >
            <div className="flex flex-col gap-6 text-xl">
                {skillsData.map((skill) => (
                    <div>
                        <h2 className={`mb-2 pl-6 text-xl font-semibold opacity-1 drop-shadow-lg ${skill.textStyle} bg-`}>{skill.name}</h2>
                        <div className="h-2 w-full bg-black bg-opacity-5 grid grid-cols-10 rounded-full overflow-hidden">
                            {getStuff(skill.strength, skill.style)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CodingSkills;