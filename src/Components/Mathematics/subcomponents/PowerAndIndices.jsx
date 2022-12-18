import React from "react";

export default function PowerAndIndices() {
	return (
		<>
			<article className="container mx-auto">
				<h3>Powers and indices</h3>
				<p>
					Powers and indices are equivalent to superscripts and subscripts in
					normal text mode. The caret (^; also known as the circumflex accent)
					character is used to raise something, and the underscore (_) is for
					lowering. If more than one expression is raised or lowered, they
					should be grouped using curly braces ({"{ and }"}).
				</p>
				<code className="example">
					k_{"{n+1} "}= n^2 + k_n^2 - k_{"{n-1} "}
					<br />k<sub>n+1</sub> = n<sup>2</sup> + k<sub>n</sub>
					<sup>2</sup> - k<sub>n-1</sub>
					<br />
					n^{"{22}"} <br />n<sup>22</sup>
				</code>
				<p>
					If you don't use curly braces ({"{ and }"}) when there are more than
					one expression is needs to be raised or lowered then only the first
					expression will be raised or lowered.
				</p>
				<code className="example">
					k_n+1 = n^2 + k_n^2 - k_n-1 <br />k<sub>n</sub>+1 = n<sup>2</sup> + k
					<sub>n</sub>
					<sup>2</sup> - k<sub>n</sub>-1
					<br />
					n^22 <br />n<sup>2</sup>2
				</code>
			</article>
		</>
	);
}
