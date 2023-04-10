import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import PageHeader from "../PageHeader";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import ExperienceContent from "./ExperienceContent/ExperienceContent";
import { StringLiteral } from "typescript";
import { connectStorageEmulator } from "firebase/storage";

type ExperienceData = {
    time: number;
    title: string;
    company: string;
    type: string;
    date_from: string;
    date_to: string;
    location: string;
    tasks: Array<string>;
    learned: string;
}

function Experience() {

    const [current, setCurrent] = useState<number>(0);
    const [experiences, setExperiences] = useState<ExperienceData[]>([]);

	const getExperiences = async () => {
		const data = await getDocs(collection(db, "experiences"));
		const formattedData = data.docs.map((doc) => ({
			...(doc.data() as ExperienceData),
			id: doc.id,
		}));
		//set data in order (based on time)
		formattedData.sort((a, b) =>
			a.time < b.time ? 1 : b.time < a.time ? -1 : 0
		);
		setExperiences(formattedData);
	};

	useEffect(() => {
		getExperiences();
	}, []);

    return (
        <div
            id="experience-page"
            className="relative pb-24 mb-24 w-full max-w-[2000px] px-[10%]  max-sm:px-[5%] max-sm:mb-0 max-sm:pb-16"
        >
            <PageHeader
                title="My Experience"
                buttonTitle="See on LinkedIn"
                buttonLink="https://www.linkedin.com/in/gergely-bator/"
            />
            <div className="flex flex-row h-[500px] mt-24 items-center justify-between gap-20 max-lg:h-auto max-md:mt-10 max-sm:mt-5">
                { experiences.length > 0 &&
                    <>
                        <ExperienceBox experience={experiences[current]} current={current} setCurrent={setCurrent} length={experiences.length}/>
                        <ExperienceContent experience={experiences[current]}/>
                    </>
                }
            </div>

        </div>
    )
}

export default Experience;