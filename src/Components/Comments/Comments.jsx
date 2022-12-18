import React from "react";

export default function Comments() {
	return (
		<>
			<section data-page="Comments" class="container-fluid">
				<h2 class="fs-2">Comments in LaTeX</h2>
				<article class="container mx-auto">
					<h3 class="fs-3">Single line comments</h3>
					<p>
						When LaTeX encounters a % character while processing an input file,
						it ignores the rest of the current line, the line break, and all
						whitespace at the beginning of the next line. <br />
						This can be used to write notes into the input file, which will not
						show up in the printed version.
					</p>
					<code>
						The word % latex <br />
						Agatho% is useless
						<br />
						kako% still
						<br />
						% we will study <br />
						logical is <br />
						very big
					</code>
					<p>
						Output oƒ this above code :- The word Agathokakological is very big
						<br />
						Note that the % character can be used to split long input lines that
						do not allow whitespace or line breaks, as with Agathokakological
						above.
					</p>
				</article>
			</section>
		</>
	);
}
