import React, { useEffect, useState } from "react";
import { calcTimeDifference, calcArticleColor } from "../../functions";

type ArticleData = {
	article: {
        id: string;
        title: string;
        desc: string;
        time: number;
        content: Array<string>;
        tags: Array<string>;
    }
    isFirstItem: boolean;
};

const itemFormatIfFirst = "col-start-1 col-end-3 max-sm:col-end-2 max-sm:min-h-[250px]";
const itemFormatIfNotFirst = "max-sm:min-h-0";

const ArticleListItem: React.FC<ArticleData> = (props) => {

    const [currColor, setCurrColor] = useState<string>(calcArticleColor(props.article.tags));

	return (
		<div className={`${props.isFirstItem ? itemFormatIfFirst : itemFormatIfNotFirst} flex min-h-[300px] cursor-pointer flex-col justify-between rounded-3xl bg-white bg-opacity-20 p-8 shadow-xl duration-500 hover:bg-opacity-50 max-sm:p-4`}>
			<div>
                <div className="flex w-full flex-row items-center justify-between">
                    <div className={`h-3 w-9 rounded-full bg-opacity-50 ${currColor}`}></div>
                    <p className="text-lg font-semibold opacity-50 max-sm:text-sm">
                        {calcTimeDifference(props.article.time)}
                    </p>
                </div>
                <div className="mt-5 max-sm:mt-2">
                    <h2 className="pb-2 text-2xl font-bold max-sm:text-xl">{props.article.title}</h2>
                    <p className="text-lg max-sm:text-base">{props.article.desc}</p>
                </div>
            </div>
            { props.isFirstItem &&
                <div className="flex flex-row gap-6 font-terminal text-neutral-500 text-lg max-sm:text-base max-sm:gap-4">
                {props.article.tags.map((articleTag) => (
                    <div>
                        #{articleTag}
                    </div>
                ))}
            </div>}
		</div>
	);
}

export default ArticleListItem;
