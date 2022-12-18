import React from "react";
import TableData from "./TableData";

export default function Symbols() {
	return (
		<>
			<section className="page container-fluid mx-auto" data-page="Symbols">
				<h2 className="text-center fs-2">Symbols in LaTex</h2>

				<article className="container">
					<h3 className="">Special Characters</h3>
					<p>
						The following symbols are reserved characters that either have
						special meaning under LATEX or are not available in all the fonts.
						If you enter them directly in your text, they will normally not
						print, but rather print some unintended things or make an error
						while compiling.
					</p>
					<table className="text-center mx-auto border-separate border border-slate-500">
						<tbody>
							<tr className="table-info">
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="Curly brace" symbol="{" command="\{" />
								</td>
								<td>
									<TableData name="Curly brace" symbol="}" command="\}" />
								</td>
							</tr>
							<tr>
								<td>
									<TableData name="Hashtag" symbol="#" command="\#" />
								</td>
								<td>
									<TableData name="Dollar" symbol="$" command="\$" />
								</td>
							</tr>
							<tr>
								<td>
									<TableData name="Percentage" symbol="%" command="\%" />
								</td>
								<td>
									<TableData name="Caret" symbol="^" command="\^" />
								</td>
							</tr>
							<tr>
								<td>
									<TableData name="Amparsand" symbol="&" command="\&" />
								</td>
								<td>
									<TableData name="Underscore" symbol="_" command="\_" />
								</td>
							</tr>
							<tr>
								<td>
									<TableData name="Tilde" symbol="~" command="\~" />
								</td>
								<td>
									<TableData
										name="backslash"
										symbol="\"
										command="\textbackslash"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</article>

				<article className="container greek-letters">
					<h3 className="fs-3 text-center">Greek Letters</h3>
					<table className="text-center mx-auto border-separate border border-slate-500">
						<tbody>
							<tr className="table-info">
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="alpha" symbol="&alpha;" command="\alpha" />
								</td>
								<td>
									<TableData name="Xi" symbol="&Xi;" command="\xi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="beta" symbol="&beta;" command="\beta" />
								</td>
								<td>
									<TableData name="xi" symbol="&xi;" command="\xi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="gamma" symbol="&gamma;" command="\gamma" />
								</td>
								<td>
									<TableData name="Pi" symbol="&Pi;" command="\Pi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="Delta" symbol="&Delta;" command="\Delta" />
								</td>
								<td>
									<TableData name="pi" symbol="&pi;" command="\pi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="delta" symbol="&delta;" command="\delta" />
								</td>
								<td>
									<TableData name="varpi" symbol="&piv;" command="\varpi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="epsilon"
										symbol="&epsilon;"
										command="\epsilon"
									/>
								</td>
								<td>
									<TableData name="Sigma" symbol="&Sigma;" command="\Sigma" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="zeta" symbol="&zeta;" command="\zeta" />
								</td>
								<td>
									<TableData name="sigma" symbol="&sigma;" command="\sigma" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="eta" symbol="&eta;" command="\eta" />
								</td>
								<td>
									<TableData name="Phi" symbol="&Phi;" command="\Phi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="Theta" symbol="&Theta;" command="\theta" />
								</td>
								<td>
									<TableData name="phi" symbol="&phi;" command="\phi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="theta" symbol="&theta;" command="\theta" />
								</td>
								<td>
									<TableData name="varphi" symbol=" " command="\varphi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="iota" symbol="&iota;" command="\iota" />
								</td>
								<td>
									<TableData name="chi" symbol="&chi;" command="\chi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="kappa" symbol="&kappa;" command="\kappa" />
								</td>
								<td>
									<TableData name="Psi" symbol="&Psi;" command="\Psi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="Lambda"
										symbol="&Lambda;"
										command="\lambda"
									/>
								</td>
								<td>
									<TableData name="psi" symbol="&psi;" command="\psi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="lambda"
										symbol="&lambda;"
										command="\lambda"
									/>
								</td>
								<td>
									<TableData name="Omega" symbol="&omega;" command="\omega" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="mu" symbol="&mu;" command="\mu" />
								</td>
								<td>
									<TableData name="omega" symbol="&omega;" command="\omega" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="nu" symbol="&nu;" command="\nu" />
								</td>
								<td>
									<TableData name="tau" symbol="&tau;" command="\tau" />
								</td>
							</tr>
						</tbody>
					</table>
				</article>
				<article className="container">
					<h3 className="fs-3 text-center">Mathematical Symbols</h3>
					<table className="text-center mx-auto border-separate border border-slate-500">
						<tbody>
							<tr className="table-info">
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
								<th>
									<TableData name="Name" symbol="Symbols" command="Command" />
								</th>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="curly braces"
										symbol="{ .. }"
										command="\{ .. \}"
									/>
								</td>
								<td>
									<TableData
										name="angle braces"
										symbol="&lang; .. &rang;"
										command="\langle .. \rangle"
									/>
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="integral" symbol="&int;" command="\int" />
								</td>
								<td>
									<TableData name="sumation" symbol="&sum;" command="\sum" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="double integral"
										symbol="&#8748;"
										command="\iint"
									/>
								</td>
								<td>
									<TableData
										name="close integral"
										symbol="&#8750;"
										command="\oint"
									/>
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="is greater than" symbol=">" command=">" />
								</td>
								<td>
									<TableData name="is less than" symbol="<" command="<" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="is not less than"
										symbol=""
										command="\nless"
									/>
								</td>
								<td>
									<TableData
										name="is not greater than"
										symbol=""
										command="\ngtr"
									/>
								</td>
							</tr>
							{/* <tr className="table-info">
								<td>
									<TableData
										name="epsilon"
										symbol="&epsilon;"
										command="\epsilon"
									/>
								</td>
								<td>
									<TableData name="Sigma" symbol="&Sigma;" command="\Sigma" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="zeta" symbol="&zeta;" command="\zeta" />
								</td>
								<td>
									<TableData name="sigma" symbol="&sigma;" command="\sigma" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="eta" symbol="&eta;" command="\eta" />
								</td>
								<td>
									<TableData name="Phi" symbol="&Phi;" command="\Phi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="Theta" symbol="&Theta;" command="\theta" />
								</td>
								<td>
									<TableData name="phi" symbol="&phi;" command="\phi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="theta" symbol="&theta;" command="\theta" />
								</td>
								<td>
									<TableData name="varphi" symbol=" " command="\varphi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="iota" symbol="&iota;" command="\iota" />
								</td>
								<td>
									<TableData name="chi" symbol="&chi;" command="\chi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="kappa" symbol="&kappa;" command="\kappa" />
								</td>
								<td>
									<TableData name="Psi" symbol="&Psi;" command="\Psi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="Lambda"
										symbol="&Lambda;"
										command="\lambda"
									/>
								</td>
								<td>
									<TableData name="psi" symbol="&psi;" command="\psi" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData
										name="lambda"
										symbol="&lambda;"
										command="\lambda"
									/>
								</td>
								<td>
									<TableData name="Omega" symbol="&omega;" command="\omega" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="mu" symbol="&mu;" command="\mu" />
								</td>
								<td>
									<TableData name="omega" symbol="&omega;" command="\omega" />
								</td>
							</tr>
							<tr className="table-info">
								<td>
									<TableData name="nu" symbol="&nu;" command="\nu" />
								</td>
								<td>
									<TableData name="tau" symbol="&tau;" command="\tau" />
								</td>
							</tr> */}
						</tbody>
					</table>
				</article>
			</section>
		</>
	);
}
