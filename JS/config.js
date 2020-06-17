// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhMZHWgQNpa0uSFRwxtJfd2WJqdxz-KOY",
    authDomain: "webarchsite2020.firebaseapp.com",
    databaseURL: "https://webarchsite2020.firebaseio.com",
    projectId: "webarchsite2020",
    storageBucket: "webarchsite2020.appspot.com",
    messagingSenderId: "511347193092",
    appId: "1:511347193092:web:5596d70be160351270cc51",
    measurementId: "G-CXT293D67X",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

db.collection("team")
    .orderBy("order")
    .get()
    .then((snap) => {
        snap.docs.forEach((doc) => {
            let person = {
                Name: doc.data().name,
                Role: doc.data().role,
                photo: doc.data().photo,
                lnkdn: doc.data().fb,
                insta: doc.data().insta,
                git: doc.data().git,
            };

            var div1 = document.createElement("li");
            div1.className = "transition";
            div1.innerHTML = `<div class="wrapper">
        <img class="transition img-fluid" src="${person.photo}" />
        <ul class="social">
          <li>
            Find me on:<br>
            <br>
          </li>
          <a class="btn btn-social-icon btn-github" href="${person.git}"><i class="fa fa-github fa-lg"></i></a>
          <a class="btn btn-social-icon btn-linkedin" href="${person.lnkdn}"><i class="fa fa-linkedin fa-lg"></i></a>               
          <a class="btn btn-social-icon btn-instagram" href="${person.insta}"><i class="fa fa-instagram fa-lg"></i></a>
        </ul>
      <span class="transition">
        <h3>${person.Name} <em>${person.Role}</em></h3>
      </span>
    </div>`;
            document.querySelector(".two").appendChild(div1);
        });
    });
