import React from "react";

export default function ListStructure() {
	return (
		<>
			<section class="container-fluid" data-page="List Structure">
				<article class="container mx-auto">
					Lists often appear in documents, especially academic, as their purpose
					is often to present information in a clear and concise fashion. List
					structures in LaTeX are simply environments which essentially come in
					three types:
					<ol class="list-decimal list-inside w-11/12 mx-auto">
						<li>itemize for a bullet list</li>
						<li>enumerate for an enumerated list and</li>
						<li>description for a descriptive list.</li>
					</ol>
					All lists follow the basic format:
					<code>
						\begin{"{list_type}"}
						<br />
						&emsp;\item The first item
						<br />
						&emsp;\item The second item
						<br />
						&emsp;\item The third etc
						<br />
						\end{"{list_type}"}
						<br />
					</code>
					<p>
						All three of these types of lists can have multiple paragraphs per
						item: just type the additional paragraphs in the normal way, with a
						blank line between each. So long as they are still contained within
						the enclosing environment, they will automatically be indented to
						follow underneath their item.
					</p>
				</article>
				<article class="container mx-auto">
					<h3 class="fs-3 my-2">itemize or bullet list</h3>
					<p>
						The itemize list_type produce unordered (bulleted) lists, where each
						list entry starts by using the \item command, which also generates
						the bullet symbol.
					</p>
					<code>
						\begin{"{itemize}"}
						<br />
						&emsp;\item List item 1<br />
						&emsp;\item List item 2<br />
						&emsp;\item <br />
						\end{"{itemize}"}
					</code>
					<div>
						Output
						<ul class="list-disc list-inside w-11/12 mx-auto">
							<li>List item 1</li>
							<li>List item 2</li>
							<li>List item 3</li>
						</ul>
					</div>
				</article>
				<article class="container mx-auto">
					<h3 class="fs-3 my-2">enumerate or ordered list</h3>
					<p>
						Numbered (ordered) lists have the same syntax but use the enumerate
						environment: each entry must be preceded by the control sequence
						\item, which will automatically generate numbers to label the item.
						These numbers start at 1 with every use of the enumerate
						environment—note that this, default, LaTeX numbering behaviour can
						be changed/controlled via the enumitem package.
					</p>
					<code>
						\begin{"{enumerate}"}
						<br />
						&emsp;\item List item 1<br />
						&emsp;\item List item 2<br />
						&emsp;\item <br />
						\end{"{enumerate}"}
					</code>
					<div>
						Output
						<ol class="list-decimal list-inside w-11/12 mx-auto">
							<li>List item 1</li>
							<li>List item 2</li>
							<li>List item 3</li>
						</ol>
					</div>
				</article>
			</section>
		</>
	);
}
