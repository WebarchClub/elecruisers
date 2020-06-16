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
        <img class="transition" src="${person.photo}" />
      <span class="transition">
        <h3>${person.Name} <em>${person.Role}</em></h3>
      </span>


        <ul class="social">
          <li>
            <a
              href="${person.insta}"
              target="_blank"
              ><i class="fab fa-instagram fa-2x"></i
            ></a>
          </li>
          <li>
            <a
              href="${person.git}"
              target="_blank"
              ><i class="fab fa-github fa-2x"></i
            ></a>
          </li>
          <li>
            <a
              href="${person.lnkdn}"
              target="_blank"
              ><i class="fab fa-linkedin fa-2x"></i
            ></a>
          </li>
        </ul>
    </div>`;
            document.querySelector(".two").appendChild(div1);
        });
    });
