import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRight from "../../../../pic/arrow-right.svg";
import "./Articles.css";
import "aos/dist/aos.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { calcTimeDifference, calcArticleColor } from "../../../../functions";
import { Link } from "react-router-dom";

type ArticleData = {
	id: string;
	title: string;
	desc: string;
	time: number;
    content: Array<string>;
    tags: Array<string>;
};

function Articles() {
    const navigate = useNavigate();
	const [articles, setArticles] = useState<ArticleData[]>([]);

	const getArticles = async () => {
		const data = await getDocs(collection(db, "articles"));
		const formattedData = data.docs.map((doc) => ({
			...(doc.data() as ArticleData),
			id: doc.id,
		}));
		//set data in order (based on time)
		formattedData.sort((a, b) =>
			a.time < b.time ? 1 : b.time < a.time ? -1 : 0
		);
		setArticles(formattedData);
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className="pt-56 max-xl:pt-32 max-md:pt-56 max-sm:pt-32">
			<div className="min-h-72 relative flex flex-row items-center justify-between gap-20 max-xl:h-auto max-xl:flex-col max-xl:gap-20 max-md:gap-10 max-sm:gap-5">
				<div className="flex min-h-full min-w-[500px] max-w-[500px] flex-col items-start justify-center max-2xl:min-w-[400px] max-2xl:max-w-[400px] max-xl:hidden">
					<h2 className="text-4xl font-bold tracking-tight">
						My Coding Journey
					</h2>
					<p className="mt-5 text-2xl">
						Take a look at my recent articles about my progress and
						plans for the future.
					</p>
					<button
                        className="articlebutton mt-10 flex h-14 flex-row items-center justify-start text-2xl tracking-wider text-emerald-600 duration-500"
                        onClick={() => {navigate("/articles")}}
                    >
						<img
							src={ArrowRight}
							className="h-8 duration-500"
							alt="arrow-right-icon"
						></img>
						<p>See all articles</p>
					</button>
				</div>

				<div
					className="hidden w-full flex-row items-center justify-between overflow-hidden rounded-3xl bg-white bg-opacity-20 py-6 px-12 shadow-lg backdrop-blur-xl max-xl:flex max-md:bg-black max-md:bg-opacity-5 max-sm:px-6 max-sm:py-4"
					data-aos="fade-up"
				>
					<h1 className="text-3xl font-bold max-sm:text-xl">
						My Coding Journey
					</h1>
					<button
                        className="whitespace-nowrap text-xl text-stone-500 max-sm:text-lg"
                        onClick={() => {navigate("/articles")}}
                    >
						See All
					</button>
				</div>

				<div className="flex min-h-[300px] flex-row gap-20 max-2xl:gap-10 max-md:h-auto max-md:flex-col max-sm:gap-5">
					{articles.slice(0, 2).map((article) => (
						<Link
                            className="min-h-full w-full rounded-3xl bg-white bg-opacity-20 p-6 shadow-lg backdrop-blur-xl cursor-pointer hover:bg-opacity-50"
                            data-aos="fade-up"
                            key={article.title}
                            to={`/article/${article.id}`}
                        >
							<div className="flex w-full flex-row items-center justify-between">
								<div className={`h-3 w-9 rounded-full bg-opacity-50 ${calcArticleColor(article.tags)}`}></div>
								<p className="text-lg font-semibold opacity-50 max-sm:text-sm">
									{calcTimeDifference(article.time)}
								</p>
							</div>
							<h3 className="mt-5 text-2xl font-bold max-sm:mt-2 max-sm:text-xl">
								{article.title}
							</h3>
							<p className="mt-2 pb-2 text-xl max-sm:mt-0 max-sm:pb-4 max-sm:text-lg">
								{article.desc}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Articles;
