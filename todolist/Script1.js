document.addEventListener("DOMContentLoaded", function () {
    let mainForm = document.getElementById("newForm");
    let list = document.getElementById("mainList");
    let clearButton = document.getElementById("clearbutton");

    list.addEventListener("click", function (e) {
        const target = e.target;

        if (target.tagName.toLowerCase() === "button") {
            target.parentNode.remove();
        } else if (target.tagName.toLowerCase() === "li") {
            target.classList.toggle("completed");
        }
    });

    clearButton.addEventListener("click", function (e) {
        e.preventDefault
        let clearLi = document.querySelectorAll("li");
        let clearSpan = document.querySelectorAll("span");
        
		//Method by Alvaro Gonzalez on StackOverflow
		clearLi.forEach(function (item) {
            item.remove();
        })
        clearSpan.forEach(function (item) {
            item.remove();
        })
		
        localStorage.clear();
    })

    /*The enter key adds an extra <li> element.  This function is here to tell
    the page to ignore the enter key*/
    mainForm.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    })
})