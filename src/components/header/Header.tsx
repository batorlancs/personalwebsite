import React, { useEffect, useReducer, useState } from "react";
import LinkedinIcon from "../../pic/sociallogos/linkedin.png";
import GithubIcon from "../../pic/sociallogos/github.png";
import FacebookIcon from "../../pic/sociallogos/facebook.png";
import MenuIcon from "../../pic/menu.svg";
import TerminalIcon from "../../pic/terminalcon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const initState = {
	left: "ml-[10%] max-sm:ml-[5%]",
	right: "mr-[10%] max-sm:mr-[5%]",
};

const enum HEADER_ANIMATION {
	IN,
	OUT,
}

type Animation = {
	type: HEADER_ANIMATION;
};

const reducer = (
	state: typeof initState,
	action: Animation
): typeof initState => {
	switch (action.type) {
		case HEADER_ANIMATION.IN:
			return {
				...state,
				left: "ml-[10%] max-sm:ml-[5%]",
				right: "mr-[10%] max-sm:mr-[5%]",
			};
		case HEADER_ANIMATION.OUT:
			return {
				...state,
				left: "opacity-0 ml-0",
				right: "opacity-0 mr-0",
			};
		default:
			throw new Error();
	}
};

function Header() {
    
    const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, initState);
    const [navbar, setNavbar] = useState<boolean>(false);
    const [isAtHome, setIsAtHome] = useState<boolean>(false);
    const [headerTitle, setHeaderTitle] = useState<string>("my_portfolio");

	// tailwind styles
	const buttonStyle = "text-black text-2xl tracking-wider max-2xl:text-xl";
	const linkStyle = "h-14 w-14 rounded-full overflow-hidden duration-500 bg-white bg-opacity-0 hover:bg-opacity-60 max-2xl:h-12 max-2xl:w-12";

	window.addEventListener("scroll", () => {
		if (window.scrollY <= 0) {
			dispatch({ type: HEADER_ANIMATION.IN });
		} else {
			dispatch({ type: HEADER_ANIMATION.OUT });
		}
	});

	const handleProjectClick = () => {
        document.getElementById("projects-page")?.scrollIntoView({ behavior: "smooth", block: "start"});
        // window.scrollBy(0, -150);
	};

    const handleSkillsClick = () => {
        document.getElementById("skills-page")?.scrollIntoView({ behavior: "smooth", block: "start"});
		// window.scrollBy(0, -150);
    }

    const handleExperienceClick = () => {
        document.getElementById("experience-page")?.scrollIntoView({ behavior: "smooth", block: "start"});
		// window.scrollBy(0, -150);
    }

    const handleArticlesClick = () => {
        navigate("/articles");
    }

    const handleProjectsClick = () => {
        navigate("/projects");
    }

    const toggleNavbar = () => {
        setNavbar(prev => !prev);
    }

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            setHeaderTitle("my_portfolio");
            setIsAtHome(true);
        }
        else {
            setHeaderTitle("go_back_home");
            setIsAtHome(false);
        }
    }, [pathname]);


	return (
		<div className="absolute top-0 left-0 z-50 flex h-40 w-full flex-row items-center justify-between font-body">
			<button
				className={`flex gap-5 items-center my-20 font-terminal text-black duration-500 ${state.left} max-lg:gap-2`}
                onClick = {() => {navigate("/")}}
			>
                <img className="h-12 max-lg:h-10 max-sm:h-8" src={TerminalIcon}></img>
				<p className="text-2xl max-lg:text-2xl max-sm:text-xl">{headerTitle}</p>
			</button>
			<div
				className={`flex h-full w-[25%] flex-row items-center justify-end gap-16 duration-500 ${state.right} max-2xl:gap-10 max-lg:hidden`}
			>
                { isAtHome ?
                    <>
                        <button className={buttonStyle} onClick={handleProjectClick}>
                            projects
                        </button>
                        <button className={buttonStyle} onClick={handleSkillsClick}>
                            skills/experience
                        </button>
                        <button className={buttonStyle} onClick={handleExperienceClick}>
                            CV
                        </button>
                    </>
                :
                    <>
                        <button className={buttonStyle} onClick={handleArticlesClick}>
                            articles
                        </button>
                        <button className={buttonStyle} onClick={handleProjectsClick}>
                            projects
                        </button>
                    </>
                }
				<div className="flex flex-row gap-5">
					<a
						href="https://www.linkedin.com/in/gergely-bator/"
						target="_blank"
						className={linkStyle}
					>
						<img src={LinkedinIcon} alt="linkedin-icon"></img>
					</a>
					<a
						href="https://github.com/batorlancs"
						target="_blank"
						className={linkStyle}
					>
						<img src={GithubIcon} alt="github-icon"></img>
					</a>
					<a
						href="https://www.facebook.com/gergely.bator.7/"
						target="_blank"
						className={linkStyle}
					>
						<img src={FacebookIcon} alt="facebook-icon"></img>
					</a>
				</div>
			</div>
            {
                navbar ?
                <Navbar
                    toggleNavbar={toggleNavbar}
                    handleProjectClick={handleProjectClick}
                    handleSkillsClick={handleSkillsClick}
                    handleExperienceClick={handleExperienceClick}
                    handleProjectsClick={handleProjectsClick}
                    handleArticlesClick={handleArticlesClick}
                    isAtHome={isAtHome}
                /> :
                <img
                    src={MenuIcon}
                    className={`h-10 duration-500 ${state.right} hidden max-lg:inline`}
                    onClick={toggleNavbar}
			    ></img>
            }
			
		</div>
	);
}

export default Header;
