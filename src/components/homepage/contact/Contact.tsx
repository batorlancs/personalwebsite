import React from 'react';

function Contact() {
    return (
        <div className='relative min-h-[1000px] mt-0 px-[10%]' data-aos='fade-up'>
            <div className='flex flex-row items-center justify-between rounded-3xl bg-neutral-200 shadow-xl'>
                <div className='w-[60%] px-40'>
                    <h1 className='text-7xl font-bold tracking-tighter'>Let's chat.</h1>
                    <p className='text-2xl'>Let's create something together!</p>
                    <div className='flex flex-row items-center justify-start mt-24'>
                        <div className='h-20 w-20 mr-4 bg-white rounded-full shadow-lg'>

                        </div>
                        <div>
                            <p className='font-bold text-xl'>Mail me at:</p>
                            <p className='text-xl'>batorgergely3@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='h-[700px] min-w-[400px] w-[40%] p-20 bg-white bg-opacity-80 backdrop-blur-xl rounded-3xl shadow-lg'>
                    <h2 className='text-4xl font-semibold mb-6'>Send a message! 📫</h2>
                    <input className='w-full mb-6 bg-neutral-200 py-4 px-8 rounded-xl text-xl placeholder:text-neutral-400' 
                    type='text' placeholder='Your Full Name'></input>
                    <input className='w-full mb-6 bg-neutral-200 py-4 px-8 rounded-xl text-xl placeholder:text-neutral-400'
                    type='email' placeholder='Your Email Address'></input>
                    <textarea className='w-full h-[200px] rounded-xl bg-neutral-200 py-4 px-8 resize-none text-xl placeholder:text-neutral-400' placeholder='Message'></textarea>
                    <button className='px-12 py-4 bg-black text-white text-xl tracking-widest rounded-full mt-5'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;