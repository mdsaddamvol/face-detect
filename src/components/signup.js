import React, { useRef, useEffect, useState } from "react";
import "./login.css";
import * as faceapi from "face-api.js";

import Webcam from "react-webcam";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createUserindatabase } from "../firebase/firebase-config";
function Signup(props) {
	const videoRef = useRef(null);
	const imgRef = useRef(null);
	const [step, setStep] = useState(1);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [imageSrc, setImageSrc] = useState(null);

	useEffect(() => {
		const loadmodel = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "models";
			await Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
				faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
				faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
				faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
			]).then(console.log("ok"));
		};
		loadmodel();
	}, []);
	useEffect(() => {}, [imageSrc]);
	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: "user",
	};

	const handleplay = async () => {
		const imageSr = videoRef.current.getScreenshot();

		setImageSrc(imageSr);
		console.log(imageSr);
	};
	const handleConfrim = () => {
		createUserindatabase(fullName, email, imageSrc).then(() => {
			props.history.push("/dashboard", { state: { fullName: fullName } });
		});
	};
	return (
		<div className='App'>
			<h1>SIGN UP PAGE</h1>
			{step === 1 && (
				<form>
					<input
						style={{ margin: 10, width: 290, height: 50 }}
						name='name'
						type='text'
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
						placeholder='Full Name'
					/>
					<input
						style={{ margin: 10, width: 290, height: 50 }}
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder='email'
					/>
					<button
						style={{ margin: 10, width: 300, height: 50 }}
						onClick={() => {
							setStep(2);
						}}
					>
						Next
					</button>
				</form>
			)}
			{step === 2 && (
				<>
					{imageSrc === null ? (
						<>
							<Webcam
								audio={false}
								height={400}
								ref={videoRef}
								screenshotFormat='image/jpeg'
								width={500}
								videoConstraints={videoConstraints}
							/>
							<button
								style={{ margin: 10, width: 500, height: 50 }}
								onClick={() => {
									handleplay();
								}}
							>
								Take a shot
							</button>
						</>
					) : (
						<>
							<img alt='text img' ref={imgRef} src={imageSrc} />
							<button
								style={{ margin: 10, width: 200, height: 50 }}
								onClick={() => {
									setImageSrc(null);
								}}
							>
								Take a shot again
							</button>
							<button
								style={{ margin: 10, width: 500, height: 50 }}
								onClick={() => {
									handleConfrim();
								}}
							>
								Confrim
							</button>
						</>
					)}
				</>
			)}

			<Link to='/'>
				<p>have an account?</p>
			</Link>
		</div>
	);
}

export default Signup;
