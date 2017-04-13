import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBYn2F6_aDj52dh12m4lA6ae9cl5rsDxWA",
    authDomain: "redux-firebase-demo-c5762.firebaseapp.com",
    databaseURL: "https://redux-firebase-demo-c5762.firebaseio.com",
    projectId: "redux-firebase-demo-c5762",
    storageBucket: "redux-firebase-demo-c5762.appspot.com",
    messagingSenderId: "224160438683"
};
firebase.initializeApp(config);

const database = firebase.database();

const addVideo = (videoInfo) => { 
    const guestsRef = database.ref('/video');
    guestsRef.push(videoInfo)
}
const videoListRef = database.ref().child('video')  
export default database;
export { videoListRef };
export { addVideo };