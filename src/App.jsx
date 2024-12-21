import React, { useState } from "react";
import questions from "./data";
import Question from "./components/Question";
import Result from "./components/Result";
import Welcome from "./components/Welcome";
import "./index.css";
import Modal from "./components/Modal";

function App() {
	const [showWelcome, setShowWelcome] = useState(true);
	const [showInstruction, setShowInstruction] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState({ D: 0, A: 0, S: 0 });
	const [showResult, setShowResult] = useState(false);

	const startQuiz = () => {
		setShowWelcome(false);
	};

	const displayInstruction = () => {
		setShowInstruction(true);
		console.log(showInstruction);
	};

	const handleAnswer = (type, scoreValue) => {
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
			{showInstruction && (
				<Modal
					handleCloseModal={() => {
						setShowInstruction(false);
						startQuiz();
					}}
				>
					<p className="instruction">
						Hãy đọc mỗi câu và chọn câu trả lời ứng với tình trạng mà bạn cảm
						thấy trong suốt <span>một tuần qua</span>. Không có câu trả lời đúng
						hay sai. Và <span>đừng dừng lại quá lâu</span> ở bất kỳ câu nào.
					</p>
				</Modal>
			)}
			{showWelcome ? (
				<Welcome showInstruc={displayInstruction} />
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
