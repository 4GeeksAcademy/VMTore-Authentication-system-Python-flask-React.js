import React, { useContext } from "react";
import { Context } from "../store/appContext";
import lock from "../../img/lock.png";
import "../../styles/home.css";
import user from "../../img/user.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1 className="mt-5 mb-5">Authentication Project</h1>
			<p>
				<img className="bloc mt-3" src={lock} />
			</p>
		</div>
	);
};
