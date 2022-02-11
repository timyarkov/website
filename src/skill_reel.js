// Text first val, img path second, popup text 3rd
var reel = [
    ["Programering", "../img/placeholders/programming.png", "popup1"],
    ["Designering", "../img/placeholders/design.png", "popup2"],
    ["Fun", "../img/placeholders/fun.png", "popup3"]
];

var curr_item = 0;

/**
 * Initialises the reel, setting the initial value and
 * making it to switch every 10 seconds.
 */
function initReel() {
    // Populate initial values
    document.getElementById("skillReel").getElementsByTagName("h2")[0].innerHTML = "I do " + reel[curr_item][0] + ".";
    document.getElementById("skillReel").getElementsByClassName("logo")[0].setAttribute("src", reel[curr_item][1]);

    // Get into the loop
    cycleWait();
}

/**
 * To get around no sleep, sets delay before calling cycle, does
 * cycle, then calls itself.
 */
function cycleWait() {
    setTimeout(() => {
        cycleReel();
        cycleWait();
    }, 7000);
}

/**
 * Cycles to the next item on the reel. 
 */
function cycleReel() {
    // Fade Out
    document.getElementById("skillReel").style.animation = "fadeOutRollDown 1s ease forwards 1";

    // Switch contents after a short wait (let animation play)
    setTimeout(() => {
        curr_item++;

        if (curr_item == reel.length) {
            curr_item = 0;
        }

        document.getElementById("skillReel").getElementsByTagName("h2")[0].innerHTML = "I do " + reel[curr_item][0] + ".";
        document.getElementById("skillReel").getElementsByClassName("logo")[0].setAttribute("src", reel[curr_item][1]);
        document.getElementById("skillReel").getElementsByClassName("logo")[0].setAttribute("alt", reel[curr_item][0]);
    }, 1000);
    
    // Fade In
    let loadingOffset = 100; // In ms, give time for content switch to finish
    setTimeout(() => {
        document.getElementById("skillReel").style.animation = "fadeInRollDown 1s ease forwards 1";
    }, 1000 + loadingOffset);
}

/**
 * Creates the list of skills with dynamic popups.
 */
function createSkillList() {
    for (const elem of reel) {
        // Create the div
        let item = document.createElement("div");
        item.className = "skillItem";

        // Create items within div
        let logo = document.createElement("img");
        logo.src = elem[1]; // Logo src
        logo.alt = elem[0]; // Item name

        let desc = document.createElement("div");
        desc.className = "skillItemDesc";
        let descText = document.createElement("p");
        descText.innerHTML = elem[2]; // Popup text
        desc.appendChild(descText);

        // Add to the div
        item.appendChild(logo);
        item.appendChild(desc);

        // Add to list div
        document.getElementById("skillList").appendChild(item);
    }
}