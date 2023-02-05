import React, { useReducer, useState } from 'react';
import Mail from '../../../pic/mailbox.svg';
import Check from '../../../pic/check.svg';


const initState = {name: "", email: "", message: "", success: false}

const enum FORM_ACTION {
    SET_NAME,
    SET_EMAIL,
    SET_MESSAGE,
    SUCCESS
}

type FormAction = {
    type: FORM_ACTION;
    value: string;
}

const reducer = (state: typeof initState, action: FormAction): typeof initState => {
    switch (action.type) {
        case FORM_ACTION.SET_NAME:
            return {...state, name: action.value}
        case FORM_ACTION.SET_EMAIL:
            return {...state, email: action.value}
        case FORM_ACTION.SET_MESSAGE:
            return {...state, message: action.value}
        case FORM_ACTION.SUCCESS:
            return {...state, success: true}
        default:
            throw new Error();
    }
}

function Contact() {

    function handleSubmit() {
        console.log('name: ' + state.name);
        console.log('email: ', state.email);
        console.log('message: ' + state.message);

        if (state.name == "" || state.email == "" || state.message == "") {
            setErrorMsg("Please fill out all forms");
            return;
        }

        if (!(/\S+@\S+\.\S+/.test(state.email))) {
            setErrorMsg("Please enter a valid email");
            return;
        }

        dispatch({ type: FORM_ACTION.SUCCESS, value: ""})
        setErrorMsg("");
    }

    const [state, dispatch] = useReducer(reducer, initState);
    const [errorMsg, setErrorMsg] = useState("");

    return (
        <div id='contact-page' className='relative pb-28 mt-4 px-[10%] max-sm:px-[5%] max-sm:pb-20' data-aos='fade-up'>
            <div className='flex flex-row items-center justify-between rounded-3xl'>

                <div className='min-w-[500px] pr-10 mr-20 max-2xl:min-w-[400px] max-xl:min-w-0 max-xl:w-full max-lg:hidden'>
                    <h1 className='text-7xl font-bold tracking-tighter'>Let's chat.</h1>
                    <p className='text-2xl'>Let's create something together!</p>
                    <div className='flex flex-row items-center justify-start mt-24'>
                        <div className='h-20 w-20 mr-4 bg-white bg-opacity-30 rounded-full shadow-lg flex items-center justify-center'>
                            <img src={Mail} className='opacity-30'></img>
                        </div>
                        <div>
                            <p className='font-bold text-xl'>Mail me at:</p>
                            <p className='text-xl'>batorgergely3@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='h-[700px] min-w-[400px] w-full p-20 bg-white bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-xl max-xl:p-12 max-xl:min-w-0 max-xl:h-auto max-sm:p-6 max-sm:pt-12 '>
                    <h2 className='text-4xl font-semibold mb-6 max-xl:text-3xl max-sm:text-2xl'>Send a Message! 📫</h2>

                    <input className='w-full mb-6 bg-black bg-opacity-5 py-4 px-8 rounded-xl text-xl placeholder:text-neutral-400 max-sm:text-lg max-sm:px-5' type='text' placeholder='Your Full Name'
                    onChange={(event) => {
                        dispatch({type: FORM_ACTION.SET_NAME, value: event.target.value});
                    }}></input>

                    <input className='w-full mb-6 bg-black bg-opacity-5 py-4 px-8 rounded-xl text-xl placeholder:text-neutral-400 max-sm:text-lg max-sm:px-5' type='email' placeholder='Your Email Address'
                    onChange={(event) => {
                        dispatch({type: FORM_ACTION.SET_EMAIL, value: event.target.value});
                    }}></input>

                    <textarea className='w-full h-[200px] rounded-xl bg-black bg-opacity-5 py-4 px-8 resize-none text-xl placeholder:text-neutral-400 max-sm:text-lg max-sm:px-5' placeholder='Message'
                    onChange={(event) => {
                        dispatch({type: FORM_ACTION.SET_MESSAGE, value: event.target.value});
                    }}></textarea>
                    {errorMsg != "" && <p className='mt-5 text-red-500 text-xl max-sm:text-lg'>{errorMsg}</p>}
                    <button onClick={handleSubmit} className='mt-5 mb-5 px-12 py-4 bg-black text-white text-xl tracking-widest rounded-full max-sm:text-lg max-sm:py-2 max-sm:px-10'>
                        {state.success ? <img className='invert h-6' src={Check}></img> : <p>Submit</p>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;