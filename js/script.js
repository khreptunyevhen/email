const users = [
  {
    id: 0,
    name: "Yevhen",
    email: "yevhen@gmail.com",
  },
  {
    id: 1,
    name: "Ivan",
    email: "ivan@gmail.com",
  },
  {
    id: 2,
    name: "Petro",
    email: "petro@gmail.com",
  },
  {
    id: 3,
    name: "Ivanka",
    email: "ivanka@gmail.com",
  },
  {
    id: 4,
    name: "Peter",
    email: "peter@gmail.com",
  },
];

const emailBodyEl = document.querySelector(".email-body");
const emailEl = document.querySelector(".email");
const userListEl = document.querySelector("#users-list");

const collapseEl = document.querySelector(".collapse");
const expandEl = document.querySelector(".expand");
const sendBtnEl = document.querySelector("button[type='submit']");

const emailInput = document.querySelector("#to-user");

// Show/hide an email
function collapseElement(el) {
  el.classList.toggle("hide");

  //   el.style.height = "0px";
}

// Expand/reduce an email
function expandElement(el) {
  el.classList.toggle("expand");
}

// Receive an email
function handleEmail(e) {
  const email = e.target.value.toLowerCase().trim();

  userListEl.innerHTML = "";

  if (!email) {
    userListEl.classList.add("hidden");
  } else {
    userListEl.classList.remove("hidden");
  }

  users.forEach((user) => {
    const userEmail = user.email.toLowerCase();
    const markPosition = userEmail.indexOf("@");

    if (userEmail.slice(0, markPosition).includes(email)) {
      const userItem = document.createElement("li");
      userItem.textContent = userEmail;

      userListEl.appendChild(userItem);
    }
  });
}

// Submit an email
function submitEmail(e) {
  e.preventDefault();
}

// Event listeners
collapseEl.addEventListener("click", () => collapseElement(emailBodyEl));
expandEl.addEventListener("click", () => expandElement(emailEl));

emailInput.addEventListener("input", handleEmail);

expandEl.addEventListener("submit", submitEmail);
