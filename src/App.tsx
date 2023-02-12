import React, { useEffect, useState } from "react";
import Home from "./components/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProjectList from "./components/projectlist/ProjectList";
import ArticleList from "./components/articlelist/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import ScrollToTop from "./components/ScrollToTop";

type ProjectData = {
	id: string;
	title: string;
	desc: string;
	tech: string;
	pic: string;
	github: string;
	time: number;
};

type ArticleData = {
	id: string;
	title: string;
	desc: string;
	time: number;
};

function App() {

    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [articles, setArticles] = useState<ArticleData[]>([]);

	const getProjects = async () => {
		const data = await getDocs(collection(db, "projects"));
		const formattedData = data.docs.map((doc) => ({
			...(doc.data() as ProjectData),
			id: doc.id,
		}));
		//set data in order (based on time)
		formattedData.sort((a, b) =>
			a.time < b.time ? 1 : b.time < a.time ? -1 : 0
		);
		setProjects(formattedData);
	};

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
		getProjects();
		getArticles();
	}, []);

    console.log(projects);
    console.log(articles);

	return (
		<BrowserRouter>
            <ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<ProjectList projects={projects}/>} />
				<Route path="/articles" element={<ArticleList />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
