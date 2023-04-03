import React from "react";

type NavbarProps = {
    toggleNavbar: () => void;
    handleProjectClick: () => void;
    handleSkillsClick: () => void;
    handleExperienceClick: () => void;
    handleProjectsClick: () => void;
    handleArticlesClick: () => void;
    isAtHome: boolean;
};

const buttonStyle = "font-terminal text-xl";

const Navbar: React.FC<NavbarProps> = (props) => {

	return (
        <div onClick={props.toggleNavbar} className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 lg:hidden">
            <div className="h-full w-[300px] bg-neutral-200 float-right flex items-center">
                <div className="flex flex-col justify-start items-start pl-12 gap-2">
                    <p className="font-terminal font-bold text-xl text-emerald-600">skip to</p>
                    { props.isAtHome ?
                        <>
                            <button className={buttonStyle} onClick={props.handleProjectClick}>
                                projects
                            </button>
                            <button className={buttonStyle} onClick={props.handleSkillsClick}>
                                skills
                            </button>
                            <button className={buttonStyle} onClick={props.handleExperienceClick}>
                                experience
                            </button>
                        </>
                    :
                        <>
                            <button className={buttonStyle} onClick={props.handleArticlesClick}>
                                articles
                            </button>
                            <button className={buttonStyle} onClick={props.handleProjectsClick}>
                                projects
                            </button>
                        </>
                    }
                    <p className="font-terminal font-bold text-xl mt-10 text-emerald-600">social links</p>
                    <a className={buttonStyle} href="https://www.linkedin.com/in/gergely-bator/">
                        linkedin
                    </a>
                    <a className={buttonStyle} href="https://github.com/batorlancs">
                        github
                    </a>
                    <a className={buttonStyle} href="https://www.facebook.com/gergely.bator.7/">
                        facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
