var portfolioItems = [
    {
        label: "Hangman",
        description: "Hangman style word guess game with a Fruit and Veggie theme.",
        url: "https://mike14747.github.io/Hangman/",
        github_repo: "https://github.com/mike14747/Hangman",
        image: "images/hangman.jpg",
        alt_text: "Fruit and Vegetable Hangman",
        tech: ["Javascript", "HTML", "CSS", "Bootstrap"],
        active: true
    },
    {
        label: "Mortal Kombat RPG",
        description: "RPG game where the player must use strategy to win.",
        url: "https://mike14747.github.io/Mortal-Kombat-RPG/",
        github_repo: "https://github.com/mike14747/Mortal-Kombat-RPG",
        image: "images/mortal_kombat.jpg",
        alt_text: "Mortal Kombat RPG Game",
        tech: ["Javascript", "JQuery", "Bootstrap"],
        active: true
    },
    {
        label: "Baseball Trivia",
        description: "Baseball-themed trivia game making use of timers.",
        url: "https://mike14747.github.io/TriviaGame/",
        github_repo: "https://github.com/mike14747/TriviaGame",
        image: "images/baseball_trivia.jpg",
        alt_text: "Baseball Trivia",
        tech: ["Javascript", "JQuery", "Bootstrap"],
        active: true
    },
    {
        label: "Space giphyAP",
        description: "A app that dynamically populates the page with animated gifs based on user input.",
        url: "https://mike14747.github.io/giphyAPI/",
        github_repo: "https://github.com/mike14747/giphyAPI",
        image: "images/giphyAPI.jpg",
        alt_text: "Space giphyAPI",
        tech: ["Javascript (all vanilla except JQuery ajax calls)", "APIs", "JSON", "Bootstrap"],
        active: true
    },
    {
        label: "Train Scheduler",
        description: "Train scheduling app using Firebase, where logged in users can edit train info.",
        url: "https://mike14747.github.io/Train-Scheduler/",
        github_repo: "https://github.com/mike14747/Train-Scheduler",
        image: "images/train_scheduler.jpg",
        alt_text: "Train Scheduler",
        tech: ["Javascript", "JQuery", "Bootstrap", "Firebase", "Moment JS"],
        active: true
    },
    {
        label: "LocalEyes",
        description: "This app takes an input zipcode and retrieves relevant data from multiple APIs.",
        url: "https://mike14747.github.io/LocalEyes/",
        github_repo: "https://github.com/mike14747/LocalEyes",
        image: "images/localeyes.jpg",
        alt_text: "LocalEyes",
        tech: ["Javascript", "JQuery", "APIs", "JSON", "Bootstrap"],
        active: true
    },
    {
        label: "Node JS Liri Bot",
        description: "Command line app that retrieves concert, movie and/or song info based on user input.",
        url: "",
        github_repo: "https://github.com/mike14747/liri-node-app",
        image: "images/liri.jpg",
        alt_text: "Liri Bot",
        tech: ["Javascript", "Node", "axios", "APIs", "JSON"],
        active: true
    },
    {
        label: "Constructor Word Guess",
        description: "Command line word guess game using constructor functions across multiple files.",
        url: "",
        github_repo: "https://github.com/mike14747/Constructor-Word-Guess",
        image: "images/word_guess.gif",
        alt_text: "Constructor Word Guess",
        tech: ["Javascript", "Node", "inquirer"],
        active: true
    },
    {
        label: "NodeJS-MySQL Bamazon",
        description: "Command line storefront using nodeJS and MySQL.",
        url: "",
        github_repo: "https://github.com/mike14747/nodejs-mysql",
        image: "images/node-mysql.png",
        alt_text: "Node-MySQL",
        tech: ["Javascript", "MySQL", "Node", "inquirer"],
        active: true
    },
    {
        label: "Friend Finder",
        description: "Full-stack app that takes in results from a user survey to find the user's best match.",
        url: "https://whispering-atoll-64572.herokuapp.com/",
        github_repo: "https://github.com/mike14747/FriendFinder",
        image: "images/friendfinder.jpg",
        alt_text: "Friend Finder",
        tech: ["Javascript", "JQuery", "Node", "Express JS", "Bootstrap-only CSS"],
        active: true
    },
    {
        label: "Veggie Burger",
        description: "Burger logging app using a homemade ORM, following the MVC design pattern.",
        url: "https://stark-cliffs-35399.herokuapp.com/",
        github_repo: "https://github.com/mike14747/burger",
        image: "images/burger.jpg",
        alt_text: "Veggie Burger",
        tech: ["Javascript", "JQuery", "MySQL", "Handlebars", "Node", "Express JS", "Bootstrap-only CSS"],
        active: true
    },
    {
        label: "Sequelized Veggie Burger",
        description: "Burger logging app using the Sequelize ORM.",
        url: "https://lit-harbor-30183.herokuapp.com/",
        github_repo: "https://github.com/mike14747/sequelizedBurger",
        image: "images/seq_burger.jpg",
        alt_text: "Sequelized Veggie Burger",
        tech: ["Javascript", "JQuery", "Sequelize ORM", "MySQL", "Handlebars", "Node", "Express JS", "Bootstrap-only CSS"],
        active: true
    },
    {
        label: "eMartketplace",
        description: "",
        url: "https://glacial-bayou-58542.herokuapp.com/",
        github_repo: "https://github.com/letscook1/project2",
        image: "",
        alt_text: "eMartketplace",
        tech: ["Javascript", "JQuery", "Sequelize ORM", "MySQL", "Handlebars", "Node", "Passport JS", "Express JS", "Bootstrap"],
        active: false
    },
    {
        label: "",
        description: "",
        url: "",
        github_repo: "",
        image: "",
        alt_text: "",
        tech: [],
        active: false
    },
    {
        label: "",
        description: "",
        url: "",
        github_repo: "",
        image: "",
        alt_text: "",
        tech: [],
        active: false
    },
    {
        label: "",
        description: "",
        url: "",
        github_repo: "",
        image: "",
        alt_text: "",
        tech: [],
        active: false
    }
];

var counter = 0;
portfolioItems.forEach(function (element) {
    counter++;
    if (counter > 1 && element.active === true) {
        $("#portfolio_div").append("<hr class='hr_card border-green'>");
    }
    if (element.active === true) {
        var tech = element.tech.join(", ");
        var newItem = $("<div class='my-card no-gutters'>");
        if (element.url === "") {
            var newImgDiv = "<div class='my-col-6'><img src='" + element.image + "' alt='" + element.alt_text + "' class='img-fluid'></div>";
            var textTitle = "<h5 class='card-title'>" + element.label + "</h5>";
        } else {
            var newImgDiv = "<div class='my-col-6'><a href='" + element.url + "' target='_blank'><img src='" + element.image + "' alt='" + element.alt_text + "' class='img-fluid'></a></div>";
            var textTitle = "<h5 class='card-title'><a href='" + element.url + "' target='_blank'>" + element.label + "</a></h5>";
        }
        var newTextDiv = "<div class='my-col-6'><div class='card-body'>" + textTitle + "<p class='card-text'>" + element.description + "</p><p class='card-text'><a href='" + element.github_repo + "' target='_blank'>GitHub Repo</a></p><p class='card-text'><small class='text-muted'>" + tech + "</small></p></div></div>";
        
        newItem.append(newImgDiv).append(newTextDiv);
    }
    $("#portfolio_div").append(newItem);
});