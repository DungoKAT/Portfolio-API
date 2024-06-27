const imageURL = "https://portfolio-api-dungokats-projects.vercel.app/image";

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
                    cover: `${imageURL}/my-portfolio/PortfolioPunnaphat.png`,
                },
            ],
            technology: ["ReactJS", "Tailwind CSS", "Express"],
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
                    cover: `${imageURL}/discord-clone/DiscordHomeCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordHomeFullSize.png`,
                },
                {
                    name: "Download Page",
                    cover: `${imageURL}/discord-clone/DiscordDownloadCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordDownloadFullSize.png`,
                },
                {
                    name: "Nitro Page",
                    cover: `${imageURL}/discord-clone/DiscordNitroCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordNitroFullSize.png`,
                },
                {
                    name: "Discover Page",
                    cover: `${imageURL}/discord-clone/DiscordDiscoverCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordDiscoverFullSize.png`,
                },
                {
                    name: "Server Preview Page",
                    cover: `${imageURL}/discord-clone/DiscordServerPreviewCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordServerPreviewFullSize.png`,
                },
                {
                    name: "Safety Page",
                    cover: `${imageURL}/discord-clone/DiscordSafetyCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordSafetyFullSize.png`,
                },
                {
                    name: "Career Page",
                    cover: `${imageURL}/discord-clone/DiscordCareerCover.png`,
                    fullsize: `${imageURL}/discord-clone/DiscordCareerFullSize.png`,
                },
            ],
            technology: ["ReactJS", "Tailwind CSS", "Express"],
            webURL: "https://discord-clone-for-practice.netlify.app",
            githubURL: "https://github.com/DungoKAT/Discord-Clone-for-Practice",
            date: "May 25, 2024",
        },
        {
            id: 3,
            pathname: "tictactoe-online",
            name: "Tic-Tac-Toe Online",
            description: [
                "A Tic-Tac-Toe game that allows multiplayer gameplay with variable board sizes.",
                "Includes a registration system with usernames and features that record game history and allow replays.",
                "Players can choose between three board sizes: 3x3, 5x5, and 7x7.",
            ],
            image: [
                {
                    name: "Gameplay",
                    cover: `${imageURL}/tictactoe-online/TictactoeGame.png`,
                },
                {
                    name: "Register Page",
                    cover: `${imageURL}/tictactoe-online/TictactoeRegister.png`,
                },
                {
                    name: "Home Page",
                    cover: `${imageURL}/tictactoe-online/TictactoeHome.png`,
                },
                {
                    name: "Game History Page",
                    cover: `${imageURL}/tictactoe-online/TictactoeGameHistory.png`,
                },
            ],
            technology: [
                "ReactJS",
                "Tailwind CSS",
                "TypeScript",
                "Java",
                "Spring Boot",
                "Websocket",
            ],
            webURL: "https://tictactoe-react-javasb-ws-test.netlify.app",
            githubURL:
                "https://github.com/DungoKAT/tictactoe-react-ts-sockjs-test",
            date: "June 21, 2024",
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
