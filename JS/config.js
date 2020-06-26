// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC6KBS2GKWiu7OPI-QHkXovvixI1jiZNfg",
  authDomain: "the-elecruisers.firebaseapp.com",
  databaseURL: "https://the-elecruisers.firebaseio.com",
  projectId: "the-elecruisers",
  storageBucket: "the-elecruisers.appspot.com",
  messagingSenderId: "730850371962",
  appId: "1:730850371962:web:a7159cb17a9cfe081ccec3",
  measurementId: "G-9D7MPYXRMJ"
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
                lnkdn: doc.data().lnkdn,
                insta: doc.data().insta,
                fb: doc.data().fb,
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
          <a class="btn btn-social-icon btn-facebook" href="${person.fb}"><i class="fa fa-facebook fa-lg"></i></a>
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