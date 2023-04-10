import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { uuidv4 } from "@firebase/util";
import ArrowRight from "../../pic/arrow-right.svg";
import LoadingGif from "../../pic/loadingAnimation.svg";

type ArticleData = {
	id: string;
	title: string;
	desc: string;
	time: number;
    content: Array<string>;
    tags: Array<string>;
};

type ParamsData = {
    id: string;
}

function ArticlePage() {

    const param = useParams<ParamsData>();
    const [articleData, setArticleData] = useState<ArticleData>();

    const getArticle = async () => {
        if (param.id) {
		    const docRef = doc(db, "articles", param.id);
            const docSnap = await getDoc(docRef);
            const formattedData = {
                ...(docSnap.data() as ArticleData),
                id: docSnap.id,
            }
		    setArticleData(formattedData);
        }
        
	};

	useEffect(() => {
		getArticle();
	}, []);

	return (
        <div className="bg-neutral-200 flex justify-center items-start px-[10%] max-sm:px-[5%]">
            {articleData == null ?
            <div className="bg-neutral-200 z-10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <img src={LoadingGif} className="h-24 opacity-30"></img>
            </div>
            :
            <div className="max-w-[2000px] w-[750px] pt-56 pb-44 max-sm:pt-44 max-sm:pb-20">
                <div className="flex flex-row gap-4">
                    {articleData.tags.map((tag) => (
                        <div className="text-2xl font-terminal underline text-neutral-400 max-lg:text-xl max-sm:text-lg" key={uuidv4()}>
                            #{tag}
                        </div>
                    ))}
                </div>
                <h1 className="mt-5 text-5xl font-terminal font-bold max-lg:text-4xl max-sm:text-3xl">{articleData.title}</h1>
                <h2 className="mt-5 mb-12 text-2xl font-bold text-sky-600 max-lg:text-xl max-sm:text-lg">{articleData.desc}</h2>
                {articleData.content.map((paragraph) => (
                    <p className="mt-12 text-2xl max-lg:text-xl max-sm:text-lg max-sm:mt-8" key={uuidv4()}>
                        {paragraph}
                    </p>
                ))}
                <div className="mt-24 font-terminal text-2xl text-sky-600 max-lg:text-xl max-sm:text-lg max-sm:mt-12">
                    <Link
                        className="flex flex-row items-center gap-4 duration-500 hover:gap-6 max-sm:gap-2"
                        to="/"
                    >
                        <img className="h-8 rotate-180 max-sm:h-5" src={ArrowRight}></img>
                        <p>back to home</p>
                    </Link>
                </div>
            </div>
                
            }
        </div>
    );
}

export default ArticlePage;
