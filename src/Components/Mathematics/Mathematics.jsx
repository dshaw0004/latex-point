import React from "react";
import Roots from "./subcomponents/Roots";
// import Fraction from "./subcomponents/Fraction";
import Intrduction from "./subcomponents/Intrduction";
import PowerAndIndices from "./subcomponents/PowerAndIndices";
import Symbols from "./subcomponents/Symbols";
import Brackets from "./subcomponents/Brackets";
import SumAndIntegration from "./subcomponents/SumAndIntegration";

// #######################################
// ######### fix the fration component #########
// ######################################

export default function Mathematics() {
	return (
		<>
			<section className="container-fluid" data-page="Mathematics">
				<Intrduction />
				<Symbols />
				{/* <Fraction /> */}
				<PowerAndIndices />
				<Roots />
				<SumAndIntegration />
				<Brackets />
			</section>
		</>
	);
}
