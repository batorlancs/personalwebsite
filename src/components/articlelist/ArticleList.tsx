import React from "react";
import { calcTimeDifference } from "../../functions";

type ArticleListProps = {
	articles: {
		id: string;
		title: string;
		desc: string;
		time: number;
	}[];
};

const ArticleList: React.FC<ArticleListProps> = (props) => {
	return (
		<div className="grid max-w-[2000px] grid-cols-4 gap-12 bg-neutral-200 px-[10%] pt-56 pb-56">
			{props.articles.map((article) => (
				<div className="flex min-h-[300px] cursor-pointer flex-col justify-between rounded-3xl bg-white bg-opacity-30 p-8 shadow-xl duration-500 hover:opacity-80">
					<div>
						<h2 className="pb-6 text-2xl font-bold uppercase">
							{article.title}
						</h2>
						<p className="text-lg">{article.desc}</p>
					</div>
					<p>{calcTimeDifference(article.time)}</p>
				</div>
			))}
		</div>
	);
};

export default ArticleList;
