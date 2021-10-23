var ncont = document.getElementById("newscont")

var itemsNews = JSON.parse(localStorage.getItem('sItems'));


appendNews(itemsNews);

function appendNews(newsData) {
    newsData.forEach(element => {
        let head = element.title;
        let link = element.urlToImage;

        let n1 = document.createElement("div");
        n1.setAttribute("class", "container");

        let h1 = document.createElement("h5");
        h1.innerText = head;

        let im = document.createElement("img");
        im.setAttribute("class", "imageNews");
        im.src = link;

        n1.append(h1, im);
        ncont.append(n1);
        
        n1.onclick = function detailedNewsz() {
            let title = element.title;
            let content = element.content;
            let description = element.description;
            let image = element.urlToImage;
            let continueReading = element.url;

            let obj = {
                title,
                content,
                description,
                image,
                continueReading,
            }

            var newDat = obj;
            var deetail = JSON.stringify(newDat);
            // console.log(deetail);
            localStorage.setItem('Deetail', deetail);

            window.location.href = "news.html";
        };


        // console.log(head,link)
    });



}


async function search() {
    console.log("started Initialization")
    let query = document.getElementById("query").value;
    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=264ff90885cd446898ddbda48952f1f7`);
    let data = await res.json();
    // console.log(data.articles)
    var searchQueries = data.articles;
    var localSearch = JSON.stringify(searchQueries);
    // console.log(localSearch);
    localStorage.setItem('sItems', localSearch);

    window.location.href = "search.html";

}

localStorage.removeItem('sItems');
