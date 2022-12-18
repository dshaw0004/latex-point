import React from "react";

export default function Roots() {
	return (
		<>
			<article className="container mx-auto" id="roots">
				<h3>Roots</h3>
				<p>
					The <strong>\sqrt</strong> command creates a square root surrounding
					an expression. It accepts an optional argument specified in square
					brackets ([ and ]) to change magnitude:
				</p>
				<code className="example">
					\sqrt{"{9}"} <br />
					<math>
						<msqrt> 9 </msqrt>
					</math>
					<br />
					\sqrt[n]{"{1+x+x^2+\\ldots}"} <br />
					<sup>n</sup>
					<math>
						<msqrt>
							1+x+x<sup>2</sup>+...
						</msqrt>
					</math>
				</code>
			</article>
		</>
	);
}
