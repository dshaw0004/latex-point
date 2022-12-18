import React from "react";

export default function Intrduction() {
	return (
		<article className="container mx-auto">
			<p>
				Typesetting mathematics is one of LaTeX's greatest strengths. It is also
				a large topic due to the existence of so much mathematical notation. If
				your document requires only a few simple mathematical formulas, plain
				LaTeX has most of the tools that you will need. If you are writing a
				scientific document that contains numerous complicated formulas, the
				amsmath package1 introduces several new commands that are more powerful
				and flexible than the ones provided by LaTeX. The mathtools package
				fixes some amsmath quirks and adds some useful settings, symbols, and
				environments to amsmath.2 To use either package, include: <br />
				<code>\usepackage{"{amsmath}"}</code> <br />
				or <br />
				<code>\usepackage{"{mathtools}"}</code> <br />
				in the preamble of the document. The mathtools package loads the amsmath
				package and hence there is no need to \usepackage
				{"{amsmath}"} in the preamble if mathtools is used.
			</p>
		</article>
	);
}
