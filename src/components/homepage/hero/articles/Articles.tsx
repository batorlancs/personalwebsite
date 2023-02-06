import React, { useState, useEffect } from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import './Articles.css';
import 'aos/dist/aos.css';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../../../firebase';
import { calcTimeDifference } from '../../../../functions';

type ArticleData = {
    id: string,
    title: string,
    desc: string,
    time: number
}

function Articles() {

    const [articles, setArticles] = useState<ArticleData[]>([]);

    const getArticles = async () => {
        const data = await getDocs(collection(db, 'articles'));
        const formattedData = data.docs.map((doc) => ({...doc.data() as ArticleData, id: doc.id}));
        //set data in order (based on time)
        formattedData.sort((a, b) => (a.time < b.time) ? 1 : ((b.time < a.time) ? -1 : 0));
        setArticles(formattedData);
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className='pt-56 max-xl:pt-32 max-md:pt-56 max-sm:pt-32'>
            <div className='relative flex flex-row justify-between items-center h-72 min-h-72 gap-20
            max-xl:flex-col max-xl:h-auto max-xl:gap-20 max-md:gap-10 max-sm:gap-5'>

                <div className='max-w-[500px] h-full flex flex-col justify-center items-start max-2xl:max-w-[400px] max-xl:hidden'>
                    <h2 className='text-4xl font-bold tracking-tight'>My Coding Journey</h2>
                    <p className='text-2xl mt-5'>Take a look at my recent articles about my progress and plans for the future.</p>
                    <button className='articlebutton mt-10 h-14 text-2xl tracking-wider flex flex-row justify-start items-center text-emerald-600 duration-500'>
                        <img src={ArrowRight} className='h-8 duration-500'></img>
                        <p>See all articles</p>
                    </button>
                </div>

                <div className='hidden flex-row justify-between items-center bg-white bg-opacity-20 py-6 px-12 w-full rounded-3xl backdrop-blur-xl shadow-lg overflow-hidden
                    max-xl:flex max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4'
                    data-aos='fade-up'
                    >
                    <h1 className='text-3xl font-bold max-sm:text-xl'>
                    My Coding Journey
                    </h1>
                    <button className='text-xl text-stone-500 whitespace-nowrap max-sm:text-lg'>
                    See All
                    </button>
                </div>

                <div className='flex flex-row h-72 gap-20 max-2xl:gap-10 max-md:flex-col max-md:h-auto max-sm:gap-5'>
                    {articles.slice(0, 2).map((article) => (
                        <div className='w-full h-full p-6 rounded-3xl backdrop-blur-xl bg-white bg-opacity-20 shadow-lg' data-aos='fade-up'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <img className={`h-3 w-9 bg-emerald-600 bg-opacity-50 rounded-full`}></img>
                                <p className='text-lg font-semibold opacity-50 max-sm:text-sm'>{calcTimeDifference(article.time)}</p>
                            </div>
                            <h3 className='mt-5 text-2xl font-bold max-sm:text-xl max-sm:mt-2'>{article.title}</h3>
                            <p className='mt-2 pb-10 text-xl max-sm:text-lg max-sm:pb-4 max-sm:mt-0'>{article.desc}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Articles;