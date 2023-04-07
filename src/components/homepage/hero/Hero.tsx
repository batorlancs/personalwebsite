import React, { useEffect, useState } from "react";
import Terminal from "./terminal/Terminal";
import Articles from "./articles/Articles";
import "aos/dist/aos.css";
import "./Hero.css";
import Avatar from "../../../pic/avatar.gif";
import Mail from "../../../pic/mail.svg";
import Check from "../../../pic/check.svg";
import ArrowCurvy from "../../../pic/arrow-curvy2.png";
import LinkedinIcon from "../../../pic/sociallogos/linkedin.png";
import GithubIcon from "../../../pic/sociallogos/github.png";
import FacebookIcon from "../../../pic/sociallogos/facebook.png";
import { useNavigate } from "react-router-dom";

const linkStyle = "h-12 w-10 flex flex-row items-center justify-start rounded-full overflow-hidden duration-500 opacity-50";

function Hero() {

	// animation for the curvy arrow on load
	const [curveAnim, setCurveAnim] = useState("opacity-0");
	useEffect(() => {
		setCurveAnim("opacity-50");
	}, []);

	const [copySuccess, setCopySuccess] = useState(false);

	function copyTextToClipboard(text: string) {
		if (!navigator.clipboard) {
			var textArea = document.createElement("textarea");
			textArea.value = text;

			textArea.style.top = "0";
			textArea.style.left = "0";
			textArea.style.position = "fixed";

			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				var successful = document.execCommand("copy");
				var msg = successful ? "successful" : "unsuccessful";
				setCopySuccess(successful);
				console.log("Fallback: Copying text command was " + msg);
			} catch (err) {
				setCopySuccess(false);
				console.error("Fallback: Oops, unable to copy", err);
			}

			document.body.removeChild(textArea);
			return;
		}
		navigator.clipboard.writeText(text).then(
			() => {
				console.log("Async: Copying to clipboard was successful!");
				setCopySuccess(true);
			},
			(err) => {
				console.error("Async: Could not copy text: ", err);
				setCopySuccess(false);
			}
		);
	}

	function handleContactClick() {
		document.getElementById("contact-page")?.scrollIntoView();
		window.scrollBy(0, -50);
	}

	return (
		<div className="w-full max-w-[2000px] px-[10%] pt-48 max-xl:pt-40 max-sm:p-[5%] max-sm:pt-32">
			<div className="absolute top-0 left-0 z-0 h-full w-full bg-black opacity-10"></div>
			<div className="justify-left flex items-start rounded-3xl">
				<Terminal />
				<div className="pt-12">
					<div
						className="flex items-center"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="0"
					>
						<hr className="h-[1px] w-24 border-none bg-black max-sm:w-12" />
						<img className="mx-2 h-12" src={Avatar} alt="animated-avatar-icon"></img>
						<h4 className="text-2xl text-black max-2xl:text-xl">
							hi, my name is
						</h4>
					</div>

					<h1
						className="mt-6 mb-10 text-8xl font-bold tracking-tighter text-black max-2xl:text-7xl max-sm:mb-6 max-sm:text-5xl"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="200"
					>
						Gergely_Bátor
					</h1>

					<h2
						className="text-2xl text-black max-2xl:text-xl"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="400"
					>
						I am a Hungarian Software Developer in my 2nd year of
						Computer Science at Lancaster University. Feel free to
						reach out to me anytime!
					</h2>

					<div
						className="mt-16 flex flex-row items-start max-sm:mt-10"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="800"
					>
						<button
							className="btn2 relative h-14 w-52 overflow-hidden rounded-full border border-none bg-black text-xl font-light leading-none tracking-wider text-white shadow-lg max-sm:h-12 max-sm:w-44 max-sm:text-lg"
							onClick={handleContactClick}
							type="button"
						>
							<span className="absolute inset-0 bg-white bg-opacity-30"></span>
							<span className="absolute inset-0 flex items-center justify-center opacity-0">
								Contact me
							</span>
							Contact me
						</button>
						<button
							className="ml-6 flex h-14 w-14 items-center justify-center rounded-full border-none bg-black text-xl font-normal text-white shadow-lg duration-500 hover:bg-neutral-600 max-sm:hidden"
							type="button"
							onClick={() => {
								copyTextToClipboard("batorgergely3@gmail.com");
							}}
						>
							<img
								src={copySuccess ? Check : Mail}
								className="h-7 invert"
                                alt="mail-icon"
							></img>
						</button>
						<img
							className={`ml-6 h-44 rotate-[62deg] -scale-x-100 delay-1000 select-none duration-[4000ms] ${curveAnim} max-2xl:hidden`}
							src={ArrowCurvy}
                            alt="curvy-arrow-icon"
						></img>
						<p className={`ml-12 mt-16 whitespace-nowrap font-cursive text-2xl select-none delay-1000 duration-[4000ms] ${curveAnim} max-2xl:mt-0 max-2xl:ml-6 max-2xl:text-xl max-sm:hidden`}>
							copy email
							<br /> to clipboard
						</p>
					</div>
					<div
						className="relative mt-20 mb-5 hidden flex-row items-center justify-start gap-3 max-sm:flex"
						data-aos="fade-up"
					>
						<div className="h-10 w-[2px] rounded-full bg-black opacity-20"></div>
						<p className="font-cursive text-2xl opacity-50">
							batorgergely3@gmail.com
						</p>
					</div>
					<div
						className="relative hidden flex-row gap-2 max-sm:flex"
						data-aos="fade-up"
					>
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
							<p>linkedin</p>
						</a>
						<a
							href="https://www.facebook.com/gergely.bator.7/"
							target="_blank"
							className={linkStyle}
						>
							<img src={FacebookIcon} alt="facebook-icon"></img>
							<p>linkedin</p>
						</a>
					</div>
				</div>
			</div>
			<Articles />
		</div>
	);
}

export default Hero;
