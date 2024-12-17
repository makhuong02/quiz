import React, { useState } from "react";
import foxer from "../assets/foxer.png";

const Question = ({ question, handleAnswer, goBackToWelcome }) => {
	const [questionNum, setQuestionNum] = useState(1);

	return (
		<div className="question-card">
			<div>
				<button className="return" onClick={() => goBackToWelcome()}>
					⬅
				</button>
				<div className="question">
					<p>Câu {questionNum}</p>
					<h2>{question.question}</h2>
				</div>
			</div>

			<img src={foxer} alt="" />

			<div className="options">
				{question.options.map((option, index) => (
					<button
						key={index}
						onClick={() => {
							handleAnswer(option.score);
							setQuestionNum(questionNum + 1);
						}}
						className="option-button"
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;
