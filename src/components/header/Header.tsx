import React, { useReducer } from "react";
import LinkedinIcon from "../../pic/sociallogos/linkedin.png";
import GithubIcon from "../../pic/sociallogos/github.png";
import FacebookIcon from "../../pic/sociallogos/facebook.png";
import MenuIcon from "../../pic/menu.svg";

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
	const [state, dispatch] = useReducer(reducer, initState);

	// tailwind styles
	const buttonStyle = "text-black text-2xl tracking-wider max-2xl:text-xl";
	const linkStyle =
		"h-14 w-14 rounded-full overflow-hidden duration-500 bg-white bg-opacity-0 hover:bg-opacity-60 max-2xl:h-12 max-2xl:w-12";

	window.addEventListener("scroll", () => {
		if (window.scrollY <= 0) {
			dispatch({ type: HEADER_ANIMATION.IN });
		} else {
			dispatch({ type: HEADER_ANIMATION.OUT });
		}
	});

	const handleProjectClick = () => {
		document.getElementById("projects-page")?.scrollIntoView();
		window.scrollBy(0, -50);
	};

	return (
		<div className="absolute top-0 left-0 z-50 flex h-40 w-full flex-row items-center justify-between font-body">
			<div
				className={`py-20 font-cursive text-5xl text-black duration-500 ${state.left} max-2xl:text-4xl max-sm:text-3xl`}
			>
				Portfolio
			</div>
			<div
				className={`flex h-full w-[25%] flex-row items-center justify-end gap-16 duration-500 ${state.right} max-2xl:gap-10 max-lg:hidden`}
			>
				<button className={buttonStyle} onClick={handleProjectClick}>
					projects
				</button>
				<button className={buttonStyle}>skills</button>
				<button className={buttonStyle}>experience</button>
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
			<img
				src={MenuIcon}
				className={`h-10 duration-500 ${state.right} hidden max-lg:inline`}
			></img>
		</div>
	);
}

export default Header;
