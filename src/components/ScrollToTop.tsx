import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/home/projects-page") {
            document.getElementById("projects-page")?.scrollIntoView();
		    window.scrollBy(0, -50);
        } else {
            window.scrollTo(0, 0);
        }
        
    }, [pathname]);

    return null;
}

export default ScrollToTop;