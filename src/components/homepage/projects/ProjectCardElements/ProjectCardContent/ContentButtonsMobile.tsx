import React from "react";

type ContentButtonMobileProps = {
    github: string;
    website?: string;
}

const ContentButtonsMobile: React.FC<ContentButtonMobileProps> = (props) => {
	return (
        <div className="w-full h-12 flex flex-row items-center justify-center gap-4 max-md:mt-10 md:hidden">
            <a
                className="w-full h-full rounded-2xl flex items-center justify-center bg-black bg-opacity-5"
                href={props.github}
            >
                GitHub
            </a>
            { props.website !== "" &&
                <a
                    className="w-full h-full rounded-2xl flex items-center justify-center bg-black bg-opacity-5"
                    href={props.website}
                >
                    View
                </a>
            }
        </div>
    );
}

export default ContentButtonsMobile;
