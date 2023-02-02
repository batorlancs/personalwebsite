import React from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import './Articles.css';
import 'aos/dist/aos.css';

function Articles() {

    const cards = [{
        title: "Article Title of Something",
        desc: "This is a description about the article, a little intro about what it looks like",
        time: "2 hours ago",
        badgeColor: "bg-blue-500",
        order: 0
    }, {
        title: "Article Title of Another Thing",
        desc: "This is a description about the article, a little intro about what it looks like",
        time: "4 days ago",
        badgeColor: "bg-orange-500",
        order: 1
    },
    ]

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

                {cards.map((card) => (
                    <div className='w-full h-full p-6 bg-white bg-opacity-30 border-white border-2 rounded-3xl shadow-2xl z-20'
                    data-aos='fade-left' data-aos-duration='1000' data-aos-delay={card.order * 200}>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <img className={`h-5 w-20 bg-opacity-50 rounded-full ${card.badgeColor}`}></img>
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