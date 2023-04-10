import React from "react";

function ArticleListTitle() {
	return (
        <div className="mb-16">
            <h1 className="text-5xl font-terminal font-bold max-lg:text-4xl max-sm:text-2xl">My Recent Articles</h1>
            <p className="text-2xl mt-2 max-sm:text-base">Here you can read about my progress with recent projects that I have been working on.</p>
            <div className="mt-5 flex flex-row items-center justify-start gap-5">
                <div className="h-3 w-9 rounded-full bg-opacity-50 bg-sky-600"></div>
                <p className="text-xl font-terminal text-sky-600 max-sm:text-base">articles about tech</p>
            </div>
            <div className="mt-2 flex flex-row items-center justify-start gap-5">
                <div className="h-3 w-9 rounded-full bg-opacity-50 bg-red-600"></div>
                <p className="text-xl font-terminal text-red-600 max-sm:text-base">devlog (progress with current project)</p>
            </div>
        </div>
    );
}

export default ArticleListTitle;
