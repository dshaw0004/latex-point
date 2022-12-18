import React from "react";

export default function TextFormatting() {
	return (
		<>
			<section className="container-fluid" data-page="Text Formatting">
				<article className="container mx-auto">
					<p>
						This section will guide you through the formatting techniques of the
						text. A lot of formatting techniques are required to differentiate
						certain elements from the rest of the text. It is often necessary to
						add emphasis to key words or phrases. Footnotes are useful for
						providing extra information or clarification without interrupting
						the main flow of text. So, for these reasons, formatting is very
						important.
					</p>
				</article>
				<article className="container mx-auto">
					<h3>Spacing</h3>
					<p>
						If you want to use larger inter-line spacing in a document, you can
						change its value by putting the
						<code>\linespread{"{factor}"}</code> command into the preamble of
						your document.
						<br />
						Use <code>\linespread{"{1.3}"}</code> for ”one and a half” line
						spacing, and <code>\linespread{"{1.6}"}</code> for ”double” line
						spacing. Normally the lines are not spread, so the default line
						spread factor is 1.
					</p>
					<p>
						The <bold>setspace</bold> package allows more fine-grained control
						over line spacing. With help of this package you have set different
						line spacing in different parts of a single document. To use this
						package we have to import it writing the command
						<code>\usepackage{"{setspace}"}</code> in the preamble. Example :
					</p>
					<code className="example my-2">
						\documentclass{"{article}"} <br />
						\usepackage{"{setspace}"}
						<br />
						<br />
						\begin{"{document}"}
						<br />
						This paragraph has \\ default \\ line spacing.
						<br />
						\begin{"{singlespace}"}
						<br />
						<br />
						This paragraph has \\ double \\ line spacing.
						<br />
						\end{"{doublespace}"}
						<br />
						<br />
						\begin{"{onehalfspace}"}
						<br />
						<br />
						This paragraph has \\ double \\ line spacing.
						<br />
						\end{"{doublespace}"}
						<br />
						<br />
						\begin{"{doublespace}"}
						<br />
						<br />
						This paragraph has \\ double \\ line spacing.
						<br />
						\end{"{doublespace}"}
						<br />
						<br />
						\begin{"{spacing}"}
						{2.5} <br />
						This paragraph has \\ 2.5 times gaps \\ between lines.
						<br />
						\end{"{spacing}"} <br />
						<br />
						\begin{"{spacing}"}
						{4} <br />
						This paragraph has \\ 4 times gaps \\ between lines.
						<br />
						\end{"{spacing}"} <br />
						<br />
						\end{"{document}"}
						<br />
					</code>
					<p>
						Since <code>spacing</code> have more control over the line spacing
						than <code>doublespace</code> or <code>onehalfspace</code>, it is a
						greater option to use instead of <code>doublespace</code> or
						<code>onehalfspace</code>.
					</p>
				</article>
				<article className="container mx-auto">
					<h3>Non-breaking Spaces</h3>
					<p>
						A non-breaking space between two tokens (e.g. words, punctuation
						marks) prevents the processors from inserting a line break between
						them. It is very important for a consistent reading. <br />
						LaTeX uses the '&#126;' symbol as a non-breaking space. You would
						usually use non-breaking spaces for punctuation marks in some
						languages, for units and currencies, for initials, etc. In French
						typography, you would put a non-breaking space before all two-parts
						punctuation marks.
					</p>
				</article>
			</section>
		</>
	);
}
