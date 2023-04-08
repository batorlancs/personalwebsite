import React, { useState } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import ArrowIcon from "../../../../pic/arrow-right.svg";
import LoadingAnimation from "../../../../pic/loadingAnimation.svg";

type ProjectCardPicProps = {
    pics: Array<string>;
}

const jpgimagestyle = "mb-20 max-h-[260px] max-2xl:max-h-[240px] max-w-full shadow-2xl";
const pngimagestyle = "mb-20 max-h-[260px] max-2xl:max-h-[240px] max-w-full";

const ProjectCardPic: React.FC<ProjectCardPicProps> = (props) => {

    const [currPic, setCurrPic] = useState<number>(0);
    const [isPicLoading, setIsPicLoading] = useState<boolean>(false);

    const handlePicClick = (num: number) => {
        handlePicLoading(true);
        if (num === 1) {
            if (currPic + 1 >= props.pics.length) {
                setCurrPic(0);
            } else {
                setCurrPic(prev => prev + 1);
            }
        } else {
            if (currPic - 1 < 0) {
                setCurrPic(props.pics.length - 1);
            } else {
                setCurrPic(prev => prev - 1);
            }
        }
        setTimeout(() => {
            handlePicLoading(false);
        }, 100); 
    }

    const handlePicLoading = (x: boolean) => {
        setIsPicLoading(x);
    }

	return (
        <>
        {/* for normal dimensions */}
        <div className="h-[500px] w-[500px] bg-white rounded-3xl bg-opacity-20 shadow-xl flex items-center justify-center max-2xl:h-[400px] max-2xl:w-[400px] max-xl:w-[300px] max-lg:hidden">
            <Atropos
                className="my-atropos"
                shadow={false}
                highlight={false}
            >
                <div className="h-[500px] w-[500px] flex items-center justify-center p-16 max-2xl:w-[400px] max-2xl:h-[400px] max-xl:w-[300px] max-xl:p-12">
                    { !isPicLoading &&
                    <img
                        src={props.pics[currPic]}
                        className={props.pics[currPic].includes(".png") ? pngimagestyle : jpgimagestyle}
                        alt="project-preview"
                        data-atropos-offset="10"
                    ></img>}
                </div>
            </Atropos >
            <div
                className="absolute bg-black bg-opacity-5 rounded-2xl z-50 h-12 mt-[400px] flex flex-row items-center justify-between max-2xl:mt-[300px]"
                data-atropos-offset="-10"
            >
                <div
                    className="cursor-pointer px-6 rounded-l-2xl hover:bg-black hover:bg-opacity-5"
                    onClick={() => { handlePicClick(-1); }}
                >
                    <img src={ArrowIcon} className="rotate-180 h-full select-none"></img>
                </div>
                <div
                    className="cursor-pointer px-6 rounded-r-2xl hover:bg-black hover:bg-opacity-5"
                    onClick={() => { handlePicClick(1); }}
                >
                    <img src={ArrowIcon} className="h-full cursor-pointer select-none"></img>
                </div>
            </div>
        </div>
        {/* for under large dimensions */}
        <div className="h-full min-w-[200px] max-md:w-full lg:hidden">
            <div
                className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-3xl bg-black shadow-lg min-w-[200px]
            max-md:h-[200px] max-md:max-w-none max-md:rounded-b-none max-md:shadow-none max-sm:h-[100px]"
            >
                <img
                    src={props.pics[0]}
                    className="absolute top-0 left-0 min-h-full object-cover"
                    alt="project-preview"
                ></img>
            </div>
        </div>
        </>
    );
}

export default ProjectCardPic;
