import React from "react";
import { useNavigate } from "react-router-dom";

function Experience() {

    const navigate = useNavigate();

    return (
        <div
            id="experience-page"
            className="mb-24 w-full max-w-[2000px] px-[10%] max-sm:px-[5%] max-sm:mb-5"
        >
            <div
				className="flex flex-row items-center justify-between overflow-hidden rounded-3xl bg-white bg-opacity-20 py-6 px-12 shadow-lg backdrop-blur-xl
                max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4"
				data-aos="fade-up"
			>
				<h1 className="text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
					My Experience
				</h1>
				<button
					className="text-2xl text-stone-500 max-md:text-xl max-sm:text-lg"
					onClick={() => {
						navigate("/projects");
					}}
				>
					See On LinkedIn
				</button>
			</div>
        </div>
    )
}

export default Experience;