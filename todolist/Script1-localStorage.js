const mainList = document.getElementById("newForm");
const listFunc = document.getElementById("mainList");

const savedItems = JSON.parse(localStorage.getItem("items")) || [];

for (let i = 0; i < savedItems.length; i++) {
    let newItem = document.createElement("li");
    newItem.innerText = savedItems[i].task;
    newItem.isCompleted = savedItems[i].isCompleted ? true : false;
    if (newItem.isCompleted) {
        newItem.style.textDecoration = "line-through";
    }

    let itemRemoveButton = document.createElement("span");
    itemRemoveButton.innerText = "Remove";
    itemRemoveButton.addEventListener("click", function (e) {
        e.preventDefault();
        itemContainer.remove();
        removeFromLocalStorage(newItem.innerText);
    });

    let itemContainer = document.createElement("div");
    itemContainer.appendChild(newItem);
    itemContainer.appendChild(itemRemoveButton);
    listFunc.appendChild(itemContainer);
}

mainList.addEventListener("submit", function (e) {
    e.preventDefault();

    let newItem = document.createElement("li");
    let itemContainer = document.createElement("div");
    let itemValue = document.getElementById("task").value;
    newItem.innerText = itemValue;
    newItem.isCompleted = false;
    let itemRemoveButton = document.createElement("span");
    itemRemoveButton.innerText = "Remove";
    itemRemoveButton.addEventListener("click", function (e) {
        e.preventDefault();
        itemContainer.remove();
        removeFromLocalStorage(newItem.innerText);
    });

    itemContainer.appendChild(newItem);
    itemContainer.appendChild(itemRemoveButton);
    mainList.reset();
    listFunc.appendChild(itemContainer);

    savedItems.push({ task: newItem.innerText, isCompleted: false });
    localStorage.setItem("items", JSON.stringify(savedItems));
});

listFunc.addEventListener("click", function (e) {
    let clickedItem = e.target;

    if (!clickedItem.isCompleted) {
        clickedItem.style.textDecoration = "line-through";
        clickedItem.isCompleted = true;
    } else {
        clickedItem.style.textDecoration = "none";
        clickedItem.isCompleted = false;
    }

    for (let i = 0; i < savedItems.length; i++) {
        if (savedItems[i].task === clickedItem.innerText) {
            savedItems[i].isCompleted = !savedItems[i].isCompleted;
            localStorage.setItem("items", JSON.stringify(savedItems));
        }
    }
});

function removeFromLocalStorage(task) {
    let updatedItems = savedItems.filter(item => item.task !== task);
    localStorage.setItem("items", JSON.stringify(updatedItems));
}


    



