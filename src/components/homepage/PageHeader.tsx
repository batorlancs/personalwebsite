import React from "react";

type PageHeaderProps = {
    title: string;
    buttonTitle: string;
    buttonLink?: string;
    buttonFunc?: () => void;
    fade?: string;
    id?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {

    const linkButtonStyle = "text-2xl text-stone-500 max-md:text-xl max-sm:text-lg hover:text-sky-600";

	return (
        <div
            className="flex flex-row items-center justify-between overflow-hidden rounded-3xl bg-white bg-opacity-20 py-6 px-12 shadow-lg backdrop-blur-xl max-lg:px-8
            max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4"
            data-aos={props.fade === undefined ? "fade-up" : props.fade}
            id={props.id == null ? "" : props.id}
        >
            <h1 className="text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                {props.title}
            </h1>
            { props.buttonLink !== undefined &&
                <a
                    className={linkButtonStyle}
                    href={props.buttonLink}
                    target="_blank"
                >
                    {props.buttonTitle}
                </a>
            }
            { props.buttonFunc !== undefined &&
                <button
                    className={linkButtonStyle}
                    onClick={props.buttonFunc}
                >
                    {props.buttonTitle}
                </button>
            }
        </div>
    );
}

export default PageHeader;
