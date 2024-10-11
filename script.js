//NAV 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('.hamburger img:not(#menu-icon)');

hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    navMenu.style.display = isActive ? 'flex' : 'none';
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    const isClickOutside = !hamburger.contains(event.target) && !navMenu.contains(event.target);
    if (isClickOutside && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        navMenu.style.display = 'none';
    }
});








//HERO SECTION
const words = [
    "ux designer",
    "front-end developer",
    "website designer",
    "graphic designer"
];

let currentIndex = 0;
const textElement = document.querySelector('.text-decoration');

function changeWord() {
    textElement.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        textElement.textContent = words[currentIndex];
        textElement.classList.remove('fade-out');
    }, 500);
}

setInterval(changeWord, 2000);


//PROJECTS CONTAINER 
const projects = [
    {
        number: "01",
        title: "Shakira",
        tags: ["Website Design", "User Experience Design", "Animation"],
        link: "shakira.html",
        image: "assets/shak-pic.jpg"
    },

    {
        number: "02",
        title: "Georgia Webster",
        tags: ["Website Design", "Web Development", "Personal Project"],
        link: "georgiawebster.html",
        image: "assets/georgia-thumbnail (2).jpg"
    },

    {
        number: "03",
        title: "Sony Music Nashville",
        tags: ["Website Design", "User Experience Design"],
        link: "smnashville.html",
        image: "assets/smnashville-thumbnail (6).jpg"
    },

    {
        number: "04",
        title: "Home Team",
        tags: ["Website Design", "User Experience Design", "Graphic Design"],
        link: "hometeam.html",
        image: "assets/hometeam-thumbnail.jpg"
    },

    {
        number: "05",
        title: "AI Panel",
        tags: ["User Experience Design", "User Research"],
        link: "ai.html",
        image: "assets/ai-thumbnail (1).jpg"
    },

    {
        number: "06",
        title: "Josh Fudge",
        tags: ["Website Design", "Web Development", "Personal Project"],
        link: "joshfudge.html",
        image: "assets/josh-thumbnail.jpg"
    },

    {
        number: "07",
        title: "3 Doors Down",
        tags: ["Website design", "User experience design"],
        link: "3dd.html",
        image: "assets/threeDD-thumbnail.jpg"
    }

];

// Function to generate buttons
const container = document.getElementById("projects-container");

projects.forEach((project) => {
    const button = document.createElement("button");
    button.classList.add("projects-item-container");

    button.onclick = () => window.location.href = project.link;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("project-title");

    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.textContent = project.number;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("project-name");
    nameDiv.textContent = project.title;

    titleDiv.appendChild(numberDiv);
    titleDiv.appendChild(nameDiv);
    button.appendChild(titleDiv);


    const tagsDiv = document.createElement("div");
    tagsDiv.classList.add("tags");

    project.tags.forEach((tag) => {
        const tagItem = document.createElement("div");
        tagItem.classList.add("tag-item");
        tagItem.textContent = tag;
        tagsDiv.appendChild(tagItem);
    });

    button.appendChild(tagsDiv);

    // Create an image element and set its source from the project
    const hoverImage = document.createElement("img");
    hoverImage.src = project.image;
    hoverImage.classList.add("hover-image");
    button.appendChild(hoverImage);

    container.appendChild(button);
});



