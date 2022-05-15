// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: 'https://listeningsensors.firebaseio.com',
  projectId: 'listeningsensors',
  storageBucket: 'listeningsensors.appspot.com',
  messagingSenderId: '634491630956',
  appId: '1:634491630956:web:f6d37d278e93993c8daf49',
  measurementId: 'G-E2B396DSM5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dbRT = getDatabase();

const starCountRef = ref(dbRT, 'accelerometer/');

function getAccelerometerData() {
  let accelerometerData = {};
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    accelerometerData = data;
    // console.log('IN-FIREBASE: ', data);
    // updateStarCount(postElement, data);
  });
  return accelerometerData;
}

export {
  app,
  analytics,
  dbRT,
  getAccelerometerData,
};
