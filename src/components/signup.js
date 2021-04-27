import React, { useRef, useEffect, useState } from "react";

import * as faceapi from "face-api.js";

import Webcam from "react-webcam";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createUserindatabase } from "../firebase/firebase-config";
function Signup() {
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
		createUserindatabase(fullName, email, imageSrc);
	};
	return (
		<div className='App'>
			{step === 1 && (
				<form>
					<input
						name='name'
						type='text'
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					/>
					<input
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder='email'
					/>
					<button
						style={{ width: 200, height: 50 }}
						onClick={() => {
							setStep(2);
						}}
					></button>
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
								style={{ width: 200, height: 50 }}
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
								style={{ width: 200, height: 50 }}
								onClick={() => {
									setImageSrc(null);
								}}
							>
								Take a shot again
							</button>
							<button
								style={{ width: 200, height: 50 }}
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
