import React from "react";
import "./SecondSection.scss";
import data from "../../common/data";
import SecondSectionDetail from "./SecondSectionDetail/SecondSectionDetail";

function SecondSection() {
	return (
		<section className="second-section">
			<div className="container-fluid">
				<div className="second-section-container">
					<div className="second-section-left">
						<h2>What’s different about Manage?</h2>
						<p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
					</div>
					<div className="second-section-right">
						{data.secondSectionList.map((item, index) => (
							<SecondSectionDetail
								numbers={item.number}
								heading={item.header}
								description={item.description}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SecondSection;
