import React from "react";

export default function Fraction() {
	return (
		<>
			<article className="container mx-auto">
				<h3>Fractions and Binomials</h3>
				<p>
					A fraction is created using the \frac{"{numerator}"}
					{"{denomerator}"} command. (for those who need their memories
					refreshed, that's the top and bottom respectively!). Likewise, the
					binomial coefficient (aka the Choose function) may be written using
					the \binom command: <br />
					<code className="example">
						\frac{"{n!}{k!(n-k)!}"} = \binom{"{n}{k}"} <br />
						or <br />
						\frac{"{n!}{k!(n-k)!} "}= {"{n \\choose k}"} <br />
						or <br />
						{`{n! \\over k!(n-k)!} = {n \\choose k}`}
					</code>
					<br />
					All of the above command will output the same thing. <br />
				</p>
				<div>
					<span>
						<code style="text-decoration: underline; text-underline-offset: 1ch">
							&emsp; n! &emsp;
						</code>
						<br />
						<code>k!(n-k)!</code>
					</span>
					<span> = ...</span>
					{/* <!-- <span style="font-size: 2em" className="binomial">
					<sup style="font-size: 0.5em; top: -1em; left: 0.5em">n</sup
					><sub style="font-size: 0.5em">k</sub>
				</span> --> */}
				</div>
				<p>
					You can embed fractions within fractions: <br />
					<code className="example">
						{" "}
						\frac{"{\\frac{1}{x}+\\frac{1}{y}}{y-z}"}{" "}
					</code>
				</p>
			</article>
		</>
	);
}
