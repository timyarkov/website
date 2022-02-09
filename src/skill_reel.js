// Text first val, img path second
var reel = [
    ["Programming is kinda cool", "../img/placeholders/programming.png"],
    ["Design is also pretty cool", "../img/placeholders/design.png"],
    ["Fun is the coolest however, because everything is fun", "../img/placeholders/fun.png"]
];

var curr_item = 0;

/**
 * Initialises the reel, setting the initial value and
 * making it to switch every 10 seconds.
 */
 function initReel() {
    // Populate initial values
    document.getElementById("skillReel").getElementsByTagName("h2")[0].innerHTML = reel[curr_item][0];
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

        document.getElementById("skillReel").getElementsByTagName("h2")[0].innerHTML = reel[curr_item][0];
        document.getElementById("skillReel").getElementsByClassName("logo")[0].setAttribute("src", reel[curr_item][1]);
    }, 1000);
    
    // Fade In
    let loadingOffset = 100; // In ms, give time for content switch to finish
    setTimeout(() => {
        document.getElementById("skillReel").style.animation = "fadeInRollDown 1s ease forwards 1";
    }, 1000 + loadingOffset);
}