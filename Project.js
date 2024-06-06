const imageURL = "https://portfolio-api-dungokats-projects.vercel.app/image/";

const Projects = {
    personalProjects: [
        {
            id: 1,
            pathname: "punnaphat-netlify-app",
            name: "Punnaphat Netlify App",
            description: [
                "A portfolio for storing my works and various information about myself.",
                "This project is the webpage you are currently viewing.",
            ],
            image: [
                {
                    name: "Home Page",
                    cover: `${imageURL}PortfolioPunnaphat.png`,
                    fullsize: `${imageURL}DiscordHomeFullSize.png`,
                },
            ],
            technology: ["ReactJS", "Tailwind CSS", "Express"],
            webURL: "https://www.google.com/",
            githubURL: "https://github.com/DungoKAT/React-Portfolio",
            date: "May 1, 2022",
        },
        {
            id: 2,
            pathname: "disclone",
            name: "Disclone webpage",
            description: [
                "A clone of the Discord webpage, specifically the Front End. The UI will resemble the original.",
                "The clone includes only the Home, Download, Nitro, Discover, Safety, and Career pages, it does not include the Discord App itself.",
                "This project was created solely for practice purposes.",
            ],
            image: [
                {
                    name: "Home Page",
                    cover: `${imageURL}DiscordHomeCover.png`,
                    fullsize: `${imageURL}DiscordHomeFullSize.png`,
                },
                {
                    name: "Download Page",
                    cover: `${imageURL}DiscordDownloadCover.png`,
                    fullsize: `${imageURL}DiscordDownloadFullSize.png`,
                },
                {
                    name: "Nitro Page",
                    cover: `${imageURL}DiscordNitroCover.png`,
                    fullsize: `${imageURL}DiscordNitroFullSize.png`,
                },
                {
                    name: "Discover Page",
                    cover: `${imageURL}DiscordDiscoverCover.png`,
                    fullsize: `${imageURL}DiscordDiscoverFullSize.png`,
                },
                {
                    name: "Server Preview Page",
                    cover: `${imageURL}DiscordServerPreviewCover.png`,
                    fullsize: `${imageURL}DiscordServerPreviewFullSize.png`,
                },
                {
                    name: "Safety Page",
                    cover: `${imageURL}DiscordSafetyCover.png`,
                    fullsize: `${imageURL}DiscordSafetyFullSize.png`,
                },
                {
                    name: "Career Page",
                    cover: `${imageURL}DiscordCareerCover.png`,
                    fullsize: `${imageURL}DiscordCareerFullSize.png`,
                },
            ],
            technology: ["ReactJS", "Tailwind CSS", "Express"],
            webURL: "https://discord-clone-for-practice.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Discord-Clone-for-Practice",
            date: "May 25, 2024",
        },
    ],
    educationProjects: [],
    miniWorkshops: [
        {
            name: "Dark Light Mode",
            webURL: "https://dark-light-basic.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Dark-Light-Mode-React",
        },
        {
            name: "Convert Currency",
            webURL: "https://convert-currency-basic.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Convert-Currency-React",
        },
        {
            name: "Weather App Basic",
            webURL: "https://weather-app-basic-for-practice.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Weather-App-Basic",
        },
        {
            name: "Todo List Basic",
            webURL: "https://todo-list-basic-for-practice.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Todo-List-Basic",
        },
        {
            name: "Quiz App",
            webURL: "https://quiz-app-basic-for-practice.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Quiz-App",
        },
        {
            name: "Image Carousel Basic",
            webURL: "https://image-carousel-basic.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Image-Carousel-Basic",
        },
        {
            name: "Shopping Cart Basic",
            webURL: "https://shopping-cart-basic-for-practice.netlify.app/",
            githubURL: "https://github.com/DungoKAT/Shopping-Cart-Basic",
        },
        {
            name: "Search Dropdown Filter Basic",
            webURL: "https://search-dropdown-filter-basic.netlify.app/",
            githubURL:
                "https://github.com/DungoKAT/Search-Dropdown-Filter-Basic",
        },
    ],
};

export default Projects;
