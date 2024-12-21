import React from "react";
import foxer from "../assets/foxer.png";

const Result = ({ score, resetQuiz }) => {
	const depressionRank = (s) => {
		let score = s * 2;
		if (score <= 9) return "Bình thường";
		else if (score <= 13) return "Nhẹ";
		else if (score <= 20) return "Vừa";
		else if (score <= 27) return "Nặng";
		else return "Rất nặng";
	};

	const anxietyRank = (s) => {
		let score = s * 2;
		if (score <= 7) return "Bình thường";
		else if (score <= 9) return "Nhẹ";
		else if (score <= 14) return "Vừa";
		else if (score <= 19) return "Nặng";
		else return "Rất nặng";
	};

	const stressRank = (s) => {
		let score = s * 2;
		if (score <= 14) return "Bình thường";
		else if (score <= 18) return "Nhẹ";
		else if (score <= 25) return "Vừa";
		else if (score <= 33) return "Nặng";
		else return "Rất nặng";
	};

	function getAdvice(type, level) {
		let advice = "";

		switch (type) {
			case "A":
				switch (level) {
					case "Bình thường":
						advice =
							"Bạn đang trong trạng thái ổn định về mặt lo âu. Tiếp tục duy trì lối sống lành mạnh để giữ tinh thần thoải mái.";
						break;
					case "Nhẹ":
						advice =
							"Bạn có chút lo âu, có thể thử các bài tập thở, thiền hoặc yoga để thư giãn.";
						break;
					case "Vừa":
						advice =
							"Lo âu của bạn ở mức trung bình. Hãy thử tập trung vào các hoạt động giải trí, tránh căng thẳng và cân nhắc trao đổi với chuyên gia tâm lý nếu cần.";
						break;
					case "Nặng":
						advice =
							"Lo âu ở mức cao. Bạn nên cân nhắc gặp chuyên gia tâm lý để nhận hỗ trợ chuyên sâu.";
						break;
					case "Rất nặng":
						advice =
							"Lo âu ở mức rất cao, có thể ảnh hưởng lớn đến cuộc sống. Hãy tìm kiếm sự giúp đỡ từ bác sĩ hoặc chuyên gia tâm lý ngay lập tức.";
						break;
				}
				break;

			case "D":
				switch (level) {
					case "Bình thường":
						advice =
							"Bạn không có dấu hiệu trầm cảm. Tiếp tục duy trì tinh thần tích cực và lối sống lành mạnh.";
						break;
					case "Nhẹ":
						advice =
							"Có dấu hiệu trầm cảm nhẹ. Hãy dành thời gian cho bản thân, tâm sự với người thân hoặc bạn bè, và tập trung vào các hoạt động yêu thích.";
						break;
					case "Vừa":
						advice =
							"Trầm cảm mức vừa. Cân nhắc trao đổi với chuyên gia tâm lý hoặc tham gia các chương trình hỗ trợ tinh thần.";
						break;
					case "Nặng":
						advice =
							"Trầm cảm mức nặng. Nên tìm đến sự giúp đỡ từ chuyên gia tâm lý hoặc bác sĩ chuyên khoa.";
						break;
					case "Rất nặng":
						advice =
							"Trầm cảm ở mức rất nghiêm trọng, cần sự can thiệp y tế ngay lập tức. Hãy tìm đến bác sĩ hoặc chuyên gia tâm lý để nhận hỗ trợ.";
						break;
				}
				break;

			case "S":
				switch (level) {
					case "Bình thường":
						advice =
							"Bạn không có dấu hiệu stress đáng lo ngại. Tiếp tục duy trì thói quen sống tích cực.";
						break;
					case "Nhẹ":
						advice =
							"Có dấu hiệu stress nhẹ. Hãy thử thư giãn bằng cách tập thể dục, nghe nhạc, hoặc thực hành thiền.";
						break;
					case "Vừa":
						advice =
							"Stress ở mức vừa. Hãy xem xét giảm tải công việc, ưu tiên nghỉ ngơi và cân bằng thời gian.";
						break;
					case "Nặng":
						advice =
							"Stress ở mức cao. Cần giảm bớt áp lực và nên cân nhắc gặp chuyên gia tâm lý để tìm giải pháp.";
						break;
					case "Rất nặng":
						advice =
							"Stress rất nghiêm trọng, có thể ảnh hưởng lớn đến sức khỏe. Hãy tìm kiếm sự hỗ trợ từ bác sĩ hoặc chuyên gia tâm lý ngay.";
						break;
				}
				break;

			default:
				advice = "Không xác định được mức độ. Vui lòng kiểm tra lại kết quả.";
		}
		return advice;
	}

	return (
		<div className="result-card">
			<h2>Kết Quả Trắc Nghiệm</h2>
			<table>
				<tr className="header">
					<td></td>
					<td>Mức độ</td>
					<td>Lời khuyên</td>
				</tr>
				<tr>
					<td>Trầm cảm</td>
					<td>{depressionRank(score.D)}</td>
					<td>{getAdvice("D", depressionRank(score.D))}</td>
				</tr>
				<tr>
					<td>Lo âu</td>
					<td>{depressionRank(score.A)}</td>
					<td>{getAdvice("A", depressionRank(score.A))}</td>
				</tr>
				<tr>
					<td>Căng thẳng</td>
					<td>{depressionRank(score.S)}</td>
					<td>{getAdvice("S", depressionRank(score.S))}</td>
				</tr>
			</table>
			<button onClick={resetQuiz} className="reset-button">
				Làm lại
			</button>
		</div>
	);
};

export default Result;
