import React from "react";
import foxer from "../assets/foxer.png";

const Welcome = ({ showInstruc }) => {
	return (
		<div className="welcome-card">
			<div>
				<h1>Chào Mừng Bạn!</h1>
				<p>
					Hãy tham gia bài trắc nghiệm tâm lý để hiểu rõ hơn về bản thân bạn
					nhé.
				</p>
			</div>

			<img src={foxer} alt="" />
			<button onClick={showInstruc} className="start-button">
				Bắt Đầu
			</button>
		</div>
	);
};

export default Welcome;
