// Value order of header, description, logo
var portfolio = [
    ["header1", "desc1", "../img/placeholders/fun.png"],
    ["header2", "desc2desc2desc2desc2desc2desc2desc2", "../img/placeholders/design.png"],
    ["header3 header3 header3", "desc3 desc3!", "../img/placeholders/programming.png"]
];

var curr_item_p = 0;

/**
 * Initialises portfolio list.
 */
function createPortfolioList() {
    // Fill initial
    document.getElementById("portfolioLogo").setAttribute("src", portfolio[curr_item_p][2]);
    document.getElementById("portfolioHeader").innerHTML = portfolio[curr_item_p][0];
    document.getElementById("portfolioDesc").innerHTML = portfolio[curr_item_p][1];
}

/**
 * Cycles portfolio right (index++)
 */
function cyclePortfolioRight() {
    curr_item_p++;

    // Wrap if need to
    if (curr_item_p >= portfolio.length) {
        curr_item_p = 0;
    }

    // Fade out
    document.getElementById("portfolioItem").style.animation = "fadeOutSlideLeft 1s ease forwards 1";

    // Switch contents after a short wait (let animation play)
    setTimeout(() => {
        document.getElementById("portfolioLogo").setAttribute("src", portfolio[curr_item_p][2]);
        document.getElementById("portfolioHeader").innerHTML = portfolio[curr_item_p][0];
        document.getElementById("portfolioDesc").innerHTML = portfolio[curr_item_p][1];
    }, 1000);
    
    // Fade In
    let loadingOffset = 100; // In ms, give time for content switch to finish
    setTimeout(() => {
        document.getElementById("portfolioItem").style.animation = "fadeInSlideLeft 1s ease forwards 1";
    }, 1000 + loadingOffset);
}

/**
 * Cycles portfolio left (index--)
 */
 function cyclePortfolioLeft() {
    curr_item_p--;

    // Wrap if need to
    if (curr_item_p < 0) {
        curr_item_p = portfolio.length - 1;
    }

    // Fade out
    document.getElementById("portfolioItem").style.animation = "fadeOutSlideRight 1s ease forwards 1";

    // Switch contents after a short wait (let animation play)
    setTimeout(() => {
        document.getElementById("portfolioLogo").setAttribute("src", portfolio[curr_item_p][2]);
        document.getElementById("portfolioHeader").innerHTML = portfolio[curr_item_p][0];
        document.getElementById("portfolioDesc").innerHTML = portfolio[curr_item_p][1];
    }, 1000);
    
    // Fade In
    let loadingOffset = 100; // In ms, give time for content switch to finish
    setTimeout(() => {
        document.getElementById("portfolioItem").style.animation = "fadeInSlideRight 1s ease forwards 1";
    }, 1000 + loadingOffset);
}