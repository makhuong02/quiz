import React, { useState } from "react";
import questions from "./data";
import Question from "./components/Question";
import Result from "./components/Result";
import Welcome from "./components/Welcome";
import "./index.css";

function App() {
	const [showWelcome, setShowWelcome] = useState(true); // Trang bắt đầu
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const startQuiz = () => {
		setShowWelcome(false);
	};

	const handleAnswer = (scoreValue) => {
		setScore(score + scoreValue);
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

	const resetQuiz = () => {
		setShowWelcome(true);
		setCurrentQuestion(0);
		setScore(0);
		setShowResult(false);
	};

	const goBackToWelcome = () => {
		setShowWelcome(true);
		setCurrentQuestion(0);
		setScore(0);
		setShowResult(false);
	};

	return (
		<div className="App">
			{showWelcome ? (
				<Welcome startQuiz={startQuiz} />
			) : showResult ? (
				<Result score={score} resetQuiz={resetQuiz} />
			) : (
				<Question
					question={questions[currentQuestion]}
					handleAnswer={handleAnswer}
					goBackToWelcome={goBackToWelcome}
				/>
			)}
		</div>
	);
}

export default App;
