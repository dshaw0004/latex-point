import React from "react";

export default function Symbols() {
	return (
		<>
			<article className="container mx-auto">
				<h3>Symbols</h3>
				<p>
					Mathematics has many symbols! One of the most difficult aspects of
					learning LaTeX is remembering how to produce symbols. There is of
					course a set of symbols that can be accessed directly from the
					keyboard: <br />
					<code className="example">+ - = ! / ( ) [ ] {"< > "}| ' :</code>
					<br />
					Beyond those listed above, distinct commands must be issued in order
					to display the desired symbols. There are many examples such as Greek
					letters, set and relations symbols, arrows, binary operators, etc. For
					example: <br />
					<code className="example">
						\forall x \in X, \quad \exists y \leq \epsilon <br />
						∀x ∈ X, ∃y ≤ ϵ
					</code>
					<br />
					You will get the list of all symbols and their latex commands in the
					'Symbols' section.
				</p>
			</article>
		</>
	);
}
