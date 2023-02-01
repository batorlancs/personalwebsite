import React from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import './Articles.css';

function Articles() {
    return (
        <div className='pt-56'>
            <div className='flex flex-row justify-between items-center gap-20 min-h-72'>
                <div className='min-w-[500px] h-full flex flex-col justify-center items-start z-20'>
                    <h2 className='text-4xl font-bold tracking-tight'>My Coding Journey</h2>
                    <p className='text-2xl mt-5'>Take a look at my recent articles about my progress and plans for the future.</p>
                    <button className='articlebutton mt-10 h-14 text-2xl opacity-50 tracking-wider flex flex-row justify-start items-center'>
                        <img src={ArrowRight} className='h-8 duration-500'></img>
                        <p className='duration-500'>See all articles</p>
                    </button>
                </div>

                <div className='w-full h-full p-6 bg-white bg-opacity-30 border-white border-2 rounded-3xl shadow-2xl z-20'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <img className='h-3 w-12 bg-orange-500 bg-opacity-50 rounded-full'></img>
                        <p className='text-lg font-semibold opacity-50'>2 Hours Ago</p>
                    </div>
                    <h3 className='mt-5 text-2xl font-bold'>Article Title of Something</h3>
                    <p className='mt-5 text-xl'>This is a description about the article, a little intro about what it looks like</p>
                </div>

                <div className='w-full h-full p-6 bg-white bg-opacity-30 border-white border-2 rounded-3xl shadow-2xl z-20'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <img className='h-3 w-12 bg-blue-500 bg-opacity-50 rounded-full'></img>
                        <p className='text-lg font-semibold opacity-50'>2 Hours Ago</p>
                    </div>
                    <h3 className='mt-5 text-2xl font-bold'>Article Title of Something</h3>
                    <p className='mt-5 text-xl'>This is a description about the article, a little intro about what it looks like</p>
                </div>
            </div>
        </div>
    )
}

export default Articles;