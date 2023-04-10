import React, { useReducer, useState, useRef } from "react";
import Mail from "../../../pic/mailbox.svg";
import Check from "../../../pic/check.svg";
import emailjs from "emailjs-com";
import LoadingIcon from "../../../pic/loadingAnimation.svg";
import PageHeader from "../PageHeader";

const initState = { name: "", email: "", message: "", success: false };

const enum FORM_ACTION {
	SET_NAME,
	SET_EMAIL,
	SET_MESSAGE,
	SUCCESS,
}

type FormAction = {
	type: FORM_ACTION;
	value: string;
};

const reducer = (
	state: typeof initState,
	action: FormAction
): typeof initState => {
	switch (action.type) {
		case FORM_ACTION.SET_NAME:
			return { ...state, name: action.value };
		case FORM_ACTION.SET_EMAIL:
			return { ...state, email: action.value };
		case FORM_ACTION.SET_MESSAGE:
			return { ...state, message: action.value };
		case FORM_ACTION.SUCCESS:
			return { ...state, success: true };
		default:
			throw new Error();
	}
};

function Contact() {

	const [loadingAnim, setLoadingAnim] = useState<boolean>(false);
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageTextArea = useRef(null);

	function handleSubmit() {
		if (state.success) return;

		if (state.name === "" || state.email === "" || state.message === "") {
			setErrorMsg("Please fill out all forms");
			return;
		}

		if (!/\S+@\S+\.\S+/.test(state.email)) {
			setErrorMsg("Please enter a valid email");
			return;
		}

		setErrorMsg("");
		setLoadingAnim(true);

		emailjs
			.send(
				"service_bgk8uir",
				"template_k2rubuo",
				{
					user_name: state.name,
					user_email: state.email,
					message: state.message,
				},
				"9_NI2V_0kP0kR4mjz"
			)
			.then(
				(response) => {
					// console.log("SUCCESS!", response.status, response.text);
					dispatch({ type: FORM_ACTION.SUCCESS, value: "" });
                    dispatch({
                        type: FORM_ACTION.SET_NAME,
                        value: "",
                    });
                    dispatch({
                        type: FORM_ACTION.SET_EMAIL,
                        value: "",
                    });
                    dispatch({
                        type: FORM_ACTION.SET_MESSAGE,
                        value: "",
                    });
					setLoadingAnim(false);
				},
				(error) => {
					// console.log("FAILED...", error);
					setErrorMsg("something went wrong..");
					setLoadingAnim(false);
				}
			);
	}

	const [state, dispatch] = useReducer(reducer, initState);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div
            id="contact-page"
			className="relative pt-48 bg-black bg-opacity-5 max-w-[2000px] px-[10%] pb-48 max-sm:px-[5%] max-sm:pb-16 max-sm:pt-0 max-sm:bg-opacity-0 overflow-hidden min-[2000px]:bg-opacity-0"
		>
            <div className="absolute h-full w-full top-0 left-0 -z-20 bg-[url('../pic/design/clouds.svg')] bg-cover opacity-20"></div>
			<PageHeader
				title="Contact"
				buttonTitle="Connect on LinkedIn"
				buttonLink="https://www.linkedin.com/in/gergely-bator/"               
            />
			<div
                className="mt-24 flex flex-row items-center justify-between rounded-3xl max-md:mt-10 max-sm:mt-5"
                data-aos="fade-up"
            >
				<div className="mr-20 min-w-[500px] pr-10 max-2xl:min-w-[400px] max-xl:w-full max-xl:min-w-0 max-lg:hidden">
					<h1 className="text-7xl font-bold tracking-tighter">
						Let's chat.
					</h1>
					<p className="text-2xl">Let's create something together!</p>
					<div className="mt-24 flex flex-row items-center justify-start">
						<div className="mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-30 shadow-lg">
							<img
								src={Mail}
								className="opacity-30"
								alt="mail-icon"
							></img>
						</div>
						<div>
							<p className="text-xl font-bold">Mail me at:</p>
							<p className="text-xl">batorgergely3@gmail.com</p>
						</div>
					</div>
				</div>

				<div
                    className="h-[700px] w-full min-w-[400px] rounded-3xl bg-white bg-opacity-30 p-20 shadow-xl backdrop-blur-xl max-xl:h-auto max-xl:min-w-0 max-xl:p-12 max-sm:p-6 max-sm:pt-12 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
					<h2 className="mb-6 text-4xl font-semibold max-xl:text-3xl max-sm:text-2xl">
						Send a Message! 📫
					</h2>

					<input
                        value={state.name}
						className="mb-6 w-full rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
						type="text"
                        ref={nameInput}
						placeholder="Your Full Name"
						onChange={(event) => {
							dispatch({
								type: FORM_ACTION.SET_NAME,
								value: event.target.value,
							});
						}}
					></input>

					<input
                        value={state.email}
						className="mb-6 w-full rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
						type="email"
                        ref={emailInput}
						placeholder="Your Email Address"
						onChange={(event) => {
							dispatch({
								type: FORM_ACTION.SET_EMAIL,
								value: event.target.value,
							});
						}}
					></input>

					<textarea
                        value={state.message}
						className="h-[200px] w-full resize-none rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
                        ref={messageTextArea}
						placeholder="Message"
						onChange={(event) => {
							dispatch({
								type: FORM_ACTION.SET_MESSAGE,
								value: event.target.value,
							});
						}}
					></textarea>

					{errorMsg !== "" && (
						<p className="mt-5 text-xl text-red-500 max-sm:text-lg">
							{errorMsg}
						</p>
					)}

					{loadingAnim ? (
						<div className="flex flex-row items-center gap-2 mt-5">
                            <img src={LoadingIcon} className="h-12 brightness-50"></img>
                            <p className="text-xl max-sm:text-lg">Sending</p>
                        </div>
					) : (
						<button
							onClick={handleSubmit}
							className="mt-5 mb-5 rounded-full bg-black px-12 py-4 text-xl tracking-widest text-white max-sm:py-2 max-sm:px-10 max-sm:text-lg"
						>
							{state.success ? (
								<img
									className="h-6 invert"
									src={Check}
									alt="check-icon"
								></img>
							) : (
								<p>Submit</p>
							)}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Contact;
