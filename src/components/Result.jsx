import React from "react";
import foxer from "../assets/foxer.png";

const Result = ({ score, resetQuiz }) => {
	let resultText = "";

	if (score < 5) {
		resultText = "Bạn khá trầm tính và nội tâm.";
	} else if (score < 10) {
		resultText = "Bạn là người cân bằng và thoải mái.";
	} else {
		resultText = "Bạn là người năng động và thích giao tiếp!";
	}

	return (
		<div className="result-card">
			<h2>Kết Quả Trắc Nghiệm</h2>
			<img src={foxer} alt="" />
			<p>{resultText}</p>
			<button onClick={resetQuiz} className="reset-button">
				Làm lại
			</button>
		</div>
	);
};

export default Result;
