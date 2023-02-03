import React, { useState, useEffect } from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import './Articles.css';
import 'aos/dist/aos.css';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../../../firebase';

type ArticleData = {
    id: string,
    title: string,
    desc: string,
    time: string,
    badgeColor: string
}

function Articles() {

    const [articles, setArticles] = useState<ArticleData[]>([]);

    const getArticles = async () => {
        const data = await getDocs(collection(db, 'articles'));
        const formattedData = data.docs.map((doc) => ({...doc.data() as ArticleData, id: doc.id}));
        setArticles(formattedData);
    }

    console.log(articles);

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className='pt-56'>
            <div className='flex flex-row justify-between items-center gap-20 min-h-72'>

                <div className='min-w-[500px] h-full flex flex-col justify-center items-start z-20'>
                    <h2 className='text-4xl font-bold tracking-tight'>My Coding Journey</h2>
                    <p className='text-2xl mt-5'>Take a look at my recent articles about my progress and plans for the future.</p>
                    <button className='articlebutton mt-10 h-14 text-2xl opacity-50 tracking-wider flex flex-row justify-start items-center hover:opacity-100 duration-500'>
                        <img src={ArrowRight} className='h-8 duration-500'></img>
                        <p>See all articles</p>
                    </button>
                </div>

                {articles.map((card) => (
                    <div className='w-full h-full p-6 rounded-3xl backdrop-blur-xl bg-white bg-opacity-20  shadow-xl z-20'
                    data-aos='fade-left' data-aos-duration='1000'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <img className={`h-3 w-9 bg-opacity-50 rounded-full ${card.badgeColor}`}></img>
                            <p className='text-lg font-semibold opacity-50'>{card.time}</p>
                        </div>
                        <h3 className='mt-5 text-2xl font-bold'>{card.title}</h3>
                        <p className='mt-2 pb-10 text-xl'>{card.desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Articles;