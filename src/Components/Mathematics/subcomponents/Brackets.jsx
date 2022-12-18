import React from "react";

export default function Brackets() {
	return (
		<>
			<article className="container mx-auto">
				<h3>Brackets, braces and delimiters</h3>
				<p>
					The use of delimiters such as brackets soon becomes important when
					dealing with anything but the most trivial equations. Without them,
					formulas can become ambiguous. Also, special types of mathematical
					structures, such as matrices, typically rely on delimiters to enclose
					them. There are a variety of delimiters available for use in LaTeX
				</p>
				<code className="example">
					( a ), [ b ], {"\\{ c \\}"}, \langle d \rangle, \lfloor e \rfloor,
					\lceil f \rceil, \ulcorner i \urcorner <br />
					(a),[b],{"{c}"},⟨d⟩, ⌊e⌋, ⌈f⌉,⌜i⌝
				</code>
			</article>
		</>
	);
}
