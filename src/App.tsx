import React from "react";
import "./App.scss";
import mobileImage from "./Asset/image/Image-mobile.svg";
import tabletImage from "./Asset/image/Image-Tablet.svg";
import indexImage from "./Asset/image/Image-index.svg";
import mainLogo from "./Asset/Icon/mainLogo5.svg";
import { Button, Form } from "react-bootstrap";

function App() {
	return (
		<div className="homepage">
			<div className="homepage__cover">
				<img
					className="cover-img"
					src={mobileImage}
					alt="Urban Chaser's homepage cover image"
				/>
			</div>
			<div className="homepage__logo">
				<img src={mainLogo} alt="Urban Chaser's main logo" />
			</div>
			<div className="homepage__text">
				<p className="text-text">
					自行車租還站點 | 自行車道查詢 | 周邊美食景點
				</p>
			</div>
			<div className="homepage__form">
				<Form className="form">
					<Form.Select
						className="form__item"
						aria-label="City selector"
					>
						<option value="Taipei">台北市</option>
						<option value="NewTaipei">新北市</option>
						<option value="Taoyuan">桃園市</option>
					</Form.Select>
					<Form.Control
						className="form__item"
						type="text"
						placeholder="請輸入地址"
					/>
					<Button className="form__btn" variant="primary">
						查詢周邊資訊
					</Button>
				</Form>
			</div>
			<div className="homepage__footer">
				<p className="footer-text">
					#The F2E Week02 #Built by Eric #Design by Breafast
				</p>
			</div>
		</div>
	);
}

export default App;
