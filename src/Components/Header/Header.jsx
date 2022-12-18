import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
	const [NavStatus, setNavStatus] = useState("closed");
	const closeNav = () => {
		setNavStatus("closed");
	};
	return (
		<>
			<header className="header">
				<button
					id="navopen"
					onClick={() => {
						setNavStatus("opened");
					}}
					aria-label="open nav bar"
				>
					<i className="bi bi-list fs-5"></i>
				</button>
				<nav
					className="nav"
					style={{
						scale: `${NavStatus === "opened" ? 1 : 0} `,
					}}
					data-nav-status={NavStatus}
				>
					<h1 className="text-center fs-1">LatexPoint</h1>
					<button id="navclose" onClick={closeNav} aria-label="close nav bar">
						X
					</button>
					<ul className="mt-5 fs-4">
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/">
								Introduction
							</NavLink>
						</li>
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/text-formatting">
								Text Formatting
							</NavLink>
						</li>
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/mathematics">
								Mathematics
							</NavLink>
						</li>
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/comments">
								Comments
							</NavLink>
						</li>
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/list-structure">
								List Structure
							</NavLink>
						</li>
						<li className="nav-li" onClick={closeNav}>
							<NavLink className="NavLink" to="/symbols">
								Symbols
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
