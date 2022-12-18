import React from "react";

export default function Introduction() {
	return (
		<>
			<section
				className="Introduction page container-fluid"
				data-page="Introduction"
			>
				<article className="article1 container my-2">
					<h3 className="fs-3">What is LaTeX ?</h3>
					<p>
						<dfn>LaTeX </dfn>(pronounced either ”Lah-tech” or ”Lay-tech”) is a
						macro package based on TeX created by Leslie Lamport . Its purpose
						is to simplify TeX typesetting, especially for documents containing
						mathematical formulae. Within the typesetting system, its name is
						formatted as LATEX
					</p>
					<p>
						The LaTeX document is a plain text file containing the content of
						the document, with additional markup. When the source file is
						processed by the macro package, it can produce documents in several
						formats. LaTeX natively supports DVI10 and PDF, but by using other
						software you can easily create PostScript, PNG, JPEG, etc
					</p>
				</article>
				<article className="container my-2">
					<h3 className="fs-3">Basic Syntax</h3>
					<p>
						Every <i className="text-danger">.tex</i> file must contain a
						document environment.
					</p>
					<code data-label="template" className="mx-auto">
						\documentclass{"{article}"} <br />
						<br />
						\begin{"{document}"} <br />
						<br />
						here goes your LaTeX code... <br />
						<br />
						\end{"{document}"} <br />
					</code>
					<p>
						The TEX compiler will only output what you write in between
						<code>
							\begin{"{document}"} and \end{"{document}"}
						</code>
						. <br />
						In <code>\documentclass{"{...}"}</code> we define the type of
						document in the above syntax example
						<code>\documentclass{"{article}"}</code> makes it a article type
						document.
					</p>
					<div className="note">
						The space between <code>\documentclass{"{...}"}</code> and
						<code>\begin{"{document}"}</code> is called <dfn>Preamble</dfn>,
						where we write command for importing different package for different
						task.
					</div>
				</article>
			</section>
		</>
	);
}
