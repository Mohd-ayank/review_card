console.log("review card");

//make an array of random person
const person = [
  {
    name: "Olivia Wilson",
    job: "Graphic Designer",
    image: "/avatar/1st.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at nobis iure? Inventore, ut hic."
  },
  {
    name: "Bob",
    job: "Front end developer",
    image: "/avatar/2nd.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe quidem id repudiandae hic voluptas tenetur eum cumque quo eligendi."
  },
  {
    name: "Alice",
    job: "UI Designer",
    image: "/avatar/3rd.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at nobis iure? Inventore, ut hic."
  },
  {
    name: "John",
    job: "Backend developer",
    image: "/avatar/4th.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at nobis iure? Inventore, ut hic."
  }
];

//Getting DOM elements
const personName = document.getElementById("name");
const job = document.getElementById("job-title");
const desc = document.getElementById("job-description");
const img = document.getElementById("userimage");
const prevBtn = document.getElementById("previous-round");
const nextBtn = document.getElementById("next-round");
const surp = document.getElementById("click-to-surprise");
// console.log(nextBtn);
let currentPerson = 0;
//adding load event listener on DOM window
window.addEventListener("load", (e) => {
  showPerson();
});

//add event listener to next and previous button
nextBtn.addEventListener("click", (e) => {
  currentPerson++;
  if (currentPerson > person.length - 1) {
    currentPerson = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", (e) => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = person.length - 1;
  }
  showPerson();
});
surp.addEventListener("click", (e) => {
  currentPerson = Math.floor(Math.random() * 4);
  showPerson();
});

//function showPerson
function showPerson() {
  let item = person[currentPerson];
  personName.innerText = item.name;
  job.innerText = item.job;
  desc.innerText = item.description;
  img.src = item.image;
}
