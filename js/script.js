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
  {
    id: 5,
    name: "Pet",
    email: "pet@gmail.com",
  },
];

const emailBodyEl = document.querySelector(".email-body");
const emailEl = document.querySelector(".email");
const userListEl = document.querySelector("#users-list");
const recipientsBodyEl = document.querySelector("#recipients");

const collapseEl = document.querySelector(".collapse");
const expandEl = document.querySelector(".expand");
const sendBtnEl = document.querySelector("button[type='submit']");

const emailInput = document.querySelector("#to-user");

// Show/hide an email
function collapseElement(el) {
  el.classList.toggle("hide");
}

// Expand/reduce an email
function expandElement(el) {
  el.classList.toggle("expand");
}

// Add recipient emails
function addRecipientsEmail(e) {
  const userFromList = e.target;

  const userEl = document.createElement("li");
  userEl.classList.add("recipient-item");
  userEl.textContent = userFromList.textContent;

  userFromList.classList.add("choosed");
  userFromList.removeEventListener("click", addRecipientsEmail);

  recipientsBodyEl.append(userEl);
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

    const recipientUsers = document.querySelectorAll(".recipient-item");
    const recipients = Array.from(recipientUsers).map(
      (recipient) => recipient.innerText
    );
    const recipientChoosedEmails = users
      .filter((user) => recipients.includes(user.email))
      .map((user) => user.email);

    if (userEmail.slice(0, markPosition).includes(email)) {
      const userItem = document.createElement("li");
      userItem.textContent = userEmail;

      if (recipientChoosedEmails.includes(userEmail)) {
        userItem.classList.add("choosed");
      }

      userListEl.appendChild(userItem);

      userItem.addEventListener("click", addRecipientsEmail);
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
