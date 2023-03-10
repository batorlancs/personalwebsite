import React, { useReducer, useState } from "react";
import Mail from "../../../pic/mailbox.svg";
import Check from "../../../pic/check.svg";

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
	function handleSubmit() {
		console.log("name: " + state.name);
		console.log("email: ", state.email);
		console.log("message: " + state.message);

		if (state.name === "" || state.email === "" || state.message === "") {
			setErrorMsg("Please fill out all forms");
			return;
		}

		if (!/\S+@\S+\.\S+/.test(state.email)) {
			setErrorMsg("Please enter a valid email");
			return;
		}

		dispatch({ type: FORM_ACTION.SUCCESS, value: "" });
		setErrorMsg("");
	}

	const [state, dispatch] = useReducer(reducer, initState);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div
			id="contact-page"
			className="relative mt-4 max-w-[2000px] px-[10%] pb-28 max-sm:px-[5%] max-sm:pb-16"
		>
			<div className="flex flex-row items-center justify-between rounded-3xl">
				<div className="mr-20 min-w-[500px] pr-10 max-2xl:min-w-[400px] max-xl:w-full max-xl:min-w-0 max-lg:hidden">
					<h1 className="text-7xl font-bold tracking-tighter">
						Let's chat.
					</h1>
					<p className="text-2xl">Let's create something together!</p>
					<div className="mt-24 flex flex-row items-center justify-start">
						<div className="mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-30 shadow-lg">
							<img src={Mail} className="opacity-30" alt="mail-icon"></img>
						</div>
						<div>
							<p className="text-xl font-bold">Mail me at:</p>
							<p className="text-xl">batorgergely3@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="h-[700px] w-full min-w-[400px] rounded-3xl bg-white bg-opacity-30 p-20 shadow-xl backdrop-blur-xl max-xl:h-auto max-xl:min-w-0 max-xl:p-12 max-sm:p-6 max-sm:pt-12 ">
					<h2 className="mb-6 text-4xl font-semibold max-xl:text-3xl max-sm:text-2xl">
						Send a Message! ????
					</h2>

					<input
						className="mb-6 w-full rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
						type="text"
						placeholder="Your Full Name"
						onChange={(event) => {
							dispatch({
								type: FORM_ACTION.SET_NAME,
								value: event.target.value,
							});
						}}
					></input>

					<input
						className="mb-6 w-full rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
						type="email"
						placeholder="Your Email Address"
						onChange={(event) => {
							dispatch({
								type: FORM_ACTION.SET_EMAIL,
								value: event.target.value,
							});
						}}
					></input>

					<textarea
						className="h-[200px] w-full resize-none rounded-xl bg-black bg-opacity-5 py-4 px-8 text-xl placeholder:text-neutral-400 max-sm:px-5 max-sm:text-lg"
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

					<button
						onClick={handleSubmit}
						className="mt-5 mb-5 rounded-full bg-black px-12 py-4 text-xl tracking-widest text-white max-sm:py-2 max-sm:px-10 max-sm:text-lg"
					>
						{state.success ? (
							<img className="h-6 invert" src={Check} alt="check-icon"></img>
						) : (
							<p>Submit</p>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
