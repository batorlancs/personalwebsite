import React from "react";
import ArticleListItem from "./ArticleListItem";
import ArticleListTitle from "./ArticleListTitle";

type ArticleListProps = {
	articles: {
		id: string;
		title: string;
		desc: string;
		time: number;
        content: Array<string>;
        tags: Array<string>;
	}[];
};

function getArticleType() {

}

const ArticleList: React.FC<ArticleListProps> = (props) => {
	return (
        <div className="flex justify-center items-start px-[10%] bg-neutral-200 max-sm:px-[5%]">
		<div className="max-w-[2000px] pt-56 pb-56 max-sm:pt-44 max-sm:pb-16">
            <ArticleListTitle />
            <div className="grid grid-cols-4 gap-12 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6">
                {props.articles.length > 0 && <ArticleListItem article={props.articles[0]} isFirstItem={true}/>}
                {props.articles.length > 0 && props.articles.slice(1, props.articles.length).map((article) => (
                    <ArticleListItem article={article} isFirstItem={false}/>
                ))}
            </div>
		</div>
        </div>
	);
};

export default ArticleList;
