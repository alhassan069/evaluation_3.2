var n = document.getElementById("ncontainer");

var details = JSON.parse(localStorage.getItem('Deetail'));
console.log(details);
show(details);

function show(details){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    title.textContent = details.title;
    let image = document.createElement("img");
    image.src = details.image;
    let content = document.createElement("p");
    content.innerText = details.content;
    let description = document.createElement("p");
    description.innerText = details.description;
    let continueReading = document.createElement("a");
    continueReading.src = details.continueReading;
    
    div.append(title,image,content,description,continueReading);
    n.appendChild(div);

}