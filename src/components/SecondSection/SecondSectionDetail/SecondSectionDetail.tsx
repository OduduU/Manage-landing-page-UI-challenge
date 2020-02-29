import React from "react";
import './SecondSectionDetail.scss'

interface ISecondProp {
    numbers: string
    heading: string
    description: string
}

function SecondSectionDetail({ numbers, heading, description }: ISecondProp) {
	return (
		<div className="second-section-detail">
			<span>{numbers}</span>
			<div className="description">
				<h4>{heading}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default SecondSectionDetail;
