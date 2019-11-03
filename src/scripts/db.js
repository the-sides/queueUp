// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlRMWhiWj6DQKxBluiHaMaxnyfc_nVq-o",
    authDomain: "queueup-e5650.firebaseapp.com",
    databaseURL: "https://queueup-e5650.firebaseio.com",
    projectId: "queueup-e5650",
    storageBucket: "queueup-e5650.appspot.com",
    messagingSenderId: "537376993401",
    appId: "1:537376993401:web:7157a7dae497b1973164a8",
    measurementId: "G-8GB3Z2LLVC"
};

// Query data helper
async function dataRequest(q){
    let results = []
    await q.get()
    .then(
        function(dataSet){
            dataSet.forEach(element => {
                results.push(element.data())
            });
        })
    .catch(function(err){
        console.error(err)
    })
    return results
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db, dataRequest}