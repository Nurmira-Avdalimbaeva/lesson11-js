// 1)

// let text = [
//     { title: "frontend", text: "backend" }
// ];
// let content = document.getElementById("content");
// text.forEach(function(item){
//     let titleElement = document.createElement("h2");
//     let textElement = document.createElement("p");

//     titleElement.textContent = item.title;
//     textElement.textContent = item.text;

//     content.appendChild(titleElement);
//     content.appendChild(textElement);
// });



// 2)

// let element = document.getElementById("element");
//         element.addEventListener("click", function(event) {
//             if (event.ctrlKey) {
//                 element.style.backgroundColor = "red";
//             }
//         });


// 3)

// let text = document.getElementById("text");
// text.addEventListener("click", function(event) {
    
//     let textToInsert = "";
//     if (event.ctrlKey) {
//         textToInsert = "1";
//     } else if (event.altKey) {
//         textToInsert = "2";
//     } else if (event.shiftKey) {
//         textToInsert = "3";
//     }

//     text.textContent = textToInsert;
// });