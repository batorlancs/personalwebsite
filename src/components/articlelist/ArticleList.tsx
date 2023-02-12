import React from "react";

type ArticleListProps = {
	articles: {
        id: string;
	    title: string;
	    desc: string;
	    time: number;
    }
};

function ArticleList() {
  return (
        <div className="grid max-w-[2000px] grid-cols-3 gap-12 bg-neutral-200 px-[10%] pt-56 pb-56">
            ArticleList
        </div>
  )
}

export default ArticleList;