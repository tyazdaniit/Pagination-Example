const listItems = [
  { id: 1, name: "taha1", family: "yazdnai" },
  { id: 2, name: "taha", family: "yazdnai" },
  { id: 3, name: "taha", family: "yazdnai" },
  { id: 4, name: "taha", family: "yazdnai" },
  { id: 5, name: "taha", family: "yazdnai" },

  { id: 6, name: "taha2", family: "yazdnai" },
  { id: 7, name: "taha", family: "yazdnai" },
  { id: 8, name: "taha", family: "yazdnai" },
  { id: 9, name: "taha", family: "yazdnai" },
  { id: 10, name: "taha", family: "yazdnai" },

  { id: 11, name: "taha3", family: "yazdnai" },
  { id: 12, name: "taha", family: "yazdnai" },
  { id: 13, name: "taha", family: "yazdnai" },
  { id: 14, name: "taha", family: "yazdnai" },
  { id: 15, name: "taha", family: "yazdnai" },

  { id: 16, name: "taha4", family: "yazdnai" },
  { id: 17, name: "taha", family: "yazdnai" },
  { id: 18, name: "taha", family: "yazdnai" },
  { id: 19, name: "taha", family: "yazdnai" },
  { id: 20, name: "taha", family: "yazdnai" },

  { id: 21, name: "taha5", family: "yazdnai" },
  { id: 22, name: "taha", family: "yazdnai" },
];

let userListContainer = document.getElementById("list");
let paginationContainer = document.getElementById("pagination");

let currentPage = 1;
let rowsCount = 5;

function displayUserList(
  allUsersArrey,
  usersContainer,
  rowsCount,
  currentPage
) {
  usersContainer.innerHTML = "";
  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = allUsersArrey.slice(startIndex, endIndex);

  paginatedUsers.forEach(function (user) {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + " " + user.family;
    usersContainer.appendChild(userElement);
  });
}

function setupPagination(allUsersArrey, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(allUsersArrey.length / rowsCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButtonGenerator(i, allUsersArrey);
    pagesContainer.append(btn);
  }
}

function paginationButtonGenerator(Page, allUsersArrey) {
  let button = document.createElement("button");
  button.innerHTML = Page;

  if (Page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = Page;
    displayUserList(allUsersArrey, userListContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

displayUserList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);
