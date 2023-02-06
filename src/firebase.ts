import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCBQvHZikjIWaudg_0q_wtJkzSZTxtcksY",
	authDomain: "personalweb-ca835.firebaseapp.com",
	projectId: "personalweb-ca835",
	storageBucket: "personalweb-ca835.appspot.com",
	messagingSenderId: "892303830116",
	appId: "1:892303830116:web:2477bd3fd512569e028371",
	measurementId: "G-MYBE14DTS2",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

export default app;
