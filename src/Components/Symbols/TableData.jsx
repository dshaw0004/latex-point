import React from "react";
import "./symbols.css";
export default function TableData(props) {
	return (
		<div className="table-data">
			<span>{props.name}</span>
			<span>{props.symbol}</span>
			<span>{props.command}</span>
		</div>
	);
}

TableData.defaultProps = {
	name: " ",
	symbol: " ",
	command: " ",
};
