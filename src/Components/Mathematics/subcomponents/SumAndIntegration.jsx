import React from "react";

export default function SumAndIntegration() {
	return (
		<>
			<article className="container mx-auto" id="sum-and-integration">
				<h3>Sum and Integration</h3>
				<p>
					The \sum and \int commands insert the sum ( or summation or uppercase
					sigma) and integral symbols respectively, with limits specified using
					the caret (^) and underscore (_). The typical notation for sums is:
				</p>
				<code className="example">
					\sum_{"{i=1}^{10} "}t_i <br />
					&sum;<sub>i=1</sub>
					<sup>10</sup> t<sub>i</sub> \int_0^1 f(x) dx <br />
					<sub>0</sub>&int;<sup>1</sup> f(x) dx
				</code>
				<p>
					There are lots oƒ type oƒ integration symbols in mathematics most of
					them can be done in LATEX.
				</p>
				<table>
					<thead>
						<tr>
							<th>symbols</th>
							<th>name</th>
							<th>LATEX</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>&int;</td>
							<td>single integral</td>
							<td>\int</td>
						</tr>
						<tr>
							<td>&#8750;</td>
							<td>closed integral</td>
							<td>\oint</td>
						</tr>
						<tr>
							<td>&#8748;</td>
							<td>double integral</td>
							<td>\iint</td>
						</tr>
						<tr>
							<td>&#8749;</td>
							<td>triple integral</td>
							<td>\iiint</td>
						</tr>
						<tr>
							<td>&int;&int;&int;&int;</td>
							<td></td>
							<td>\iiiint</td>
						</tr>
						<tr>
							<td>&int; ... &int;</td>
							<td></td>
							<td>\idotsint</td>
						</tr>
					</tbody>
				</table>
				<p className="note">
					single and closed integral can be used without any package but from
					double integral you need the amsmath package
				</p>
			</article>
		</>
	);
}
