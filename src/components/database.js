import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBZg1nhaFA44rxrBwtf7AA03x8Idbp4mwQ",
    authDomain: "animeplayer-9cccb.firebaseapp.com",
    databaseURL: "https://animeplayer-9cccb.firebaseio.com",
    projectId: "animeplayer-9cccb",
    storageBucket: "animeplayer-9cccb.appspot.com",
    messagingSenderId: "626099312109"
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
