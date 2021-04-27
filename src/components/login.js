import React, { useRef, useEffect, useState } from "react";

import * as faceapi from "face-api.js";
import "./login.css";
import Webcam from "react-webcam";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { firestore } from "../firebase/firebase-config";
function Login(props) {
	const videoRef = useRef(null);
	const [user, setUser] = useState([]);
	const imgRef2 = useRef(null);

	const [imageSrc, setImageSrc] = useState();
	const [step, setStep] = useState(1);
	const [uri, setUri] = useState([]);
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("scan");

	useEffect(() => {
		const loadmodel = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "models";
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
				faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
				faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
				faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
			]).then(console.log("ok"));
		};
		loadmodel();
	}, []);

	useEffect(() => {
		const user = firestore.collection("users").where("email", "==", email);
		let userdata;
		user.get().then((snapshot) => {
			snapshot.forEach((doc) => {
				userdata = doc.data();
			});
			setUser(userdata);
		});
	}, [step]);
	useEffect(() => {
		if (typeof user === "object") {
			setUri(user.faceUri);
		}
	}, [user]);
	useEffect(() => {
		if (status === "sucess") {
			props.history.push("/dashboard", { state: { fullName: user.fullName } });
		}
	}, [status]);
	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: "user",
	};

	const handleplay = async () => {
		setStatus("varifing");
		const imageSr = videoRef.current.getScreenshot();

		setImageSrc(imageSr);
		var img = new Image();
		var img2 = new Image();
		img.src = imageSr;

		img2.src = uri;

		const ditect = await faceapi
			.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
			.withFaceLandmarks()
			.withFaceDescriptors();
		const ditect2 = await faceapi
			.detectAllFaces(img2, new faceapi.TinyFaceDetectorOptions())
			.withFaceLandmarks()
			.withFaceDescriptors();

		let distance;
		setTimeout(() => {
			if (ditect.length === 0 || ditect2.length === 0) {
				console.log("couldnotDetect");
				setStatus("couldnotDetect");
			} else {
				distance = faceapi.euclideanDistance(
					ditect[0].descriptor,
					ditect2[0].descriptor
				);
			}
		}, 1000);
		setTimeout(() => {
			if (typeof distance === "number") {
				if (distance < 0.4) {
					setStatus("sucess");
				} else {
					console.log("notMatch");
					setStatus("notMatch");
				}
			} else {
				setStatus("couldnotDetect");
				console.log(distance);
			}
		}, 2000);
	};
	return (
		<div className='App'>
			{step === 1 && (
				<form>
					<input
						style={{ width: 200, height: 50 }}
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
					>
						Next
					</button>
				</form>
			)}
			{step === 2 && (
				<>
					{status === "scan" && (
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
								verify
							</button>
						</>
					)}
					{status === "varifing" && <div>processing</div>}
					{status === "sucess" && <div>sucess</div>}
					{status === "failed" && (
						<div>Could not detect,refresh the page or try again </div>
					)}
					{status === "couldnotDetect" && (
						<>
							<div>no face detected </div>
							<button onClick={() => setStatus("scan")}>Try again</button>
						</>
					)}

					{status === "notMatch" && <div>does not match</div>}
				</>
			)}
			<Link to='/signup'>
				<p>Not have an account?</p>
			</Link>
		</div>
	);
}

export default Login;
