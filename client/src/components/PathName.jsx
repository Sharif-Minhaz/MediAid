import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PathName = (props) => {
	const location = useLocation();

	const pathname = location.pathname
		?.substring(1)
		.split("/")
		.slice(0,1)
		.join(" | ")
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	useEffect(() => {
		document.title = `MediAid ${pathname ? " | " + pathname : ""}`;
	}, [location]);

	return <>{props.children}</>;
};

export default PathName;
