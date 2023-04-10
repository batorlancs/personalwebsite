import React from "react";

type ExperienceBoxChooserProps = {
    current: number;
    length: number;
    setCurrent: (num: number) => void;
}

const circleStyle = "h-6 w-6 rounded-full border-2 border-black cursor-pointer";
const highlightedCircleStyle = "h-6 w-10 rounded-full border-2 border-black bg-sky-400 cursor-pointer hover:bg-opacity-50";

const ExperienceBoxChooser: React.FC<ExperienceBoxChooserProps> = (props) => {
	return (
        <div className="w-full bg-black bg-opacity-5 rounded-2xl h-16 flex flex-col items-center justify-center">
            <div className="flex flex-row">
                {Array.from({ length: props.length}).map((_, index) => (
                    <div className="flex flex-row items-center" key={index}>
                        <div 
                            className={props.current === index ? highlightedCircleStyle : circleStyle }
                            onClick={() => { props.setCurrent(index); }}
                            key={index} 
                        ></div>
                        { (props.length-1) > index &&
                        <div
                            className="h-1 w-12 bg-black"
                        >    
                        </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceBoxChooser;
