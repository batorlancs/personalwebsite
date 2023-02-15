import React from "react";
import { useNavigate } from "react-router-dom";
import CodingSkills from "./CodingSkills";
import GroupSkills from "./GroupSkills";
import OtherSkills from "./OtherSkills";

function Skills() {

    const navigate = useNavigate();

    return (
        <div
            id="skills-page"
            className="relative mb-24 w-full max-w-[2000px] px-[10%]"
        >
            <div
				className="flex flex-row items-center justify-between overflow-hidden rounded-3xl bg-white bg-opacity-20 py-6 px-12 shadow-lg backdrop-blur-xl
                max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4"
				data-aos="fade-up"
			>
				<h1 className="text-4xl font-bold max-sm:text-xl">
					My Skills
				</h1>
				<button
                    className="text-2xl text-stone-500 max-sm:text-lg"
                    onClick={() => {navigate("/projects")}}
                >
					See on LinkedIn
				</button>
			</div>

            <div className="flex flex-row min-h-[400px] justify-between items-center gap-20 mt-24">
                <CodingSkills />
                <GroupSkills />
                <OtherSkills />
            </div>
        </div>
    )
}

export default Skills;