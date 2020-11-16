import { fetchData } from "./modules/DataMiner.js";

(() => {
    console.log('loaded');
    function retrieveProjectInfo() {
        var elementID = event.target.id;
        var element = event.target.parentElement;
        fetchData(`./includes/index.php?id=${elementID}`).then(data => addInfo(data, element)).catch(err => console.log(err));
    }

    function addInfo(data, element){
        let currentUserText = element.children;
        currentUserText[0].textContent = data[0].name;
        currentUserText[2].textContent = data[0].description;
    }

    function renderMoviePosters(movie) {
        let userSection = document.querySelector('.movies_wrap'),
            userTemplate = document.querySelector('#movies-template').content;

        for (let user in movie) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.movie').children;

            currentUserText[1].src = `images/${movie[user].image}`;
            currentUserText[1].id = movie[user].id;
            userSection.appendChild(currentUser);
        }
        userSection.addEventListener("click", retrieveProjectInfo);
    }
        
    fetchData("./includes/index.php").then(data => renderMoviePosters(data)).catch(err => console.log(err));
})();