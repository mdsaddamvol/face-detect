import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/storage";

const config = {
	apiKey: "AIzaSyDPYIfRwC2hleM1sfAuFbDWo6mOPuSaaaA",
	authDomain: "smart-face-34f42.firebaseapp.com",
	projectId: "smart-face-34f42",
	storageBucket: "smart-face-34f42.appspot.com",
	messagingSenderId: "686839942351",
	appId: "1:686839942351:web:abb882c653e7cb991afbba",
};
if (!firebase.apps.length) {
	firebase.initializeApp(config);
} else {
	firebase.app(); // if already initialized, use that one
}

export const createUserindatabase = async (fullName, email, url) => {
	if (!email) return;

	const userRef = firestore.doc(`users/${email}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const createdAt = new Date();
		try {
			userRef.set({
				email: email,
				fullName: fullName,
				faceUri: url,
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};
export const saveProfile = async (email, profileData) => {
	if (!email || !profileData) return;

	const profileRef = firestore.doc(`profiles/${email}`);
	const snapshot = await profileRef.get();

	if (!snapshot.exists) {
		const createdAt = new Date();
		try {
			profileRef.set({
				...profileData,
			});
		} catch (error) {
			console.log(error);
		}
	}
	if (snapshot.exists) {
		profileRef.update({
			...profileData,
		});
	}
	return profileRef;
};

export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();

export default firebase;
