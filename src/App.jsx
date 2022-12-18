// import { useState, lazy, Suspense } from "react";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Introduction from "./Components/Introduction/Introduction";

import Comments from "./Components/Comments/Comments";
import Header from "./Components/Header/Header";
import ListStructure from "./Components/ListStructure/ListStructure";
import Mathematics from "./Components/Mathematics/Mathematics";

import Symbols from "./Components/Symbols/Symbols";
import TextFormatting from "./Components/TextFormatting/TextFormatting";

function App() {
	return (
		<>
			<Header />
			{/* <Suspense fallback={<h2>loading...</h2>}> */}
			<Routes>
				<Route path="/" element={<Introduction />} />
				<Route path="/text-formatting" element={<TextFormatting />} />
				<Route path="/mathematics" element={<Mathematics />} />
				<Route path="/comments" element={<Comments />} />
				<Route path="/list-structure" element={<ListStructure />} />
				<Route path="/symbols" element={<Symbols />} />
				<Route path="*" element={<h1>page not found !</h1>} />
			</Routes>
			{/* </Suspense> */}
		</>
	);
}

export default App;
