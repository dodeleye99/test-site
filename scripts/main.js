// ============ Use DOM to fetch document elements to modify them =============

// === The Image Element ===

// Fetch the <img> element from the HTML document
const myImage = document.querySelector("img");

// Store the of paths of the two images used: the default and an alternative.
const imageSrc1 = "images/firefox-logo1.png";
const imageSrc2 = "images/firefox-logo2.png";

// === The Copyright Notice Elements ===

// Fetch the element representing the copyright notice.
const copyrightNotice1 = document.getElementById("copyright-notice");
// Retrive its anchor (<a>) and CC licence (<span>) elements.
const copyrightAnchor = copyrightNotice1.querySelector("a");
const copyrightCC = copyrightNotice1.querySelector("span");

// Get the initial hypertext reference, and store one for the alt image.
const copyrightAnchorHref1 = copyrightAnchor.href;
const copyrightAnchorHref2 = 
        "https://commons.wikimedia.org/wiki/File:Firefox_Nightly_logo,_2017.svg"

// Get the initial text content of the anchor, and store one for the alt image.
const copyrightAnchorText1 = copyrightAnchor.textContent;
const copyrightAnchorText2 = "Firefox Nightly logo 2017";

// Get the initial CC licence text, and store one for the alt image.
const copyrightCCText1 = copyrightCC.textContent;
const copyrightCCText2 = "CC BY-SA 3.0";

// === Colouring === 

// Fetch the styles of the <html>, <h1> and <body> elements.
const htmlStyle = document.querySelector("html").style;
const h1Style = document.querySelector("h1").style;
const bodyStyle = document.querySelector("body").style;

// Get the initial background color of the HTML page, and store an alternative.
const htmlBgColor1 = htmlStyle.backgroundColor;
const htmlBgColor2 = '#011c36'; // a very dark blue

// Get the initial color of the h1 text, and store an alternative.
const h1Color1 = h1Style.color;
const h1Color2 = '#011c36'; // a very dark blue (matching html alt background)

// Get the initial background color of the body, and store an alternative.
const bodyBgColor1 = bodyStyle.color;
const bodyBgColor2 = '#1499f8'; // a light blue

// Get the initial color of the border of the body, and store an alternative.
const bodyBorderColor1 = bodyStyle.borderColor;
const bodyBorderColor2 = '#1be1ac'; // a turquoise like color.

// =========================== Add an image changer ===========================

// When the image is clicked, the following instructions are carried out:
// (Note that () => {...} is an anomymous function)
myImage.onclick = () => {

    // Get the source of the current displayed source image (in <img> element).
    const mySrc = myImage.getAttribute("src");

    // If it matches the first source, modify the page to an alternative form.
    if (mySrc === imageSrc1) {
        
        // Change the current source image to the alternative image.
        myImage.setAttribute("src", imageSrc2);

        // Modify the styles of concern to an alternative style set.
        htmlStyle.backgroundColor = htmlBgColor2;
        h1Style.color = h1Color2;
        bodyStyle.backgroundColor = bodyBgColor2;
        bodyStyle.borderColor = bodyBorderColor2;

        // Modify the copyright text to correspond to the switched image.
        copyrightAnchor.href = copyrightAnchorHref2;
        copyrightAnchor.textContent = copyrightAnchorText2;
        copyrightCC.textContent = copyrightCCText2;
    }
    // Otherwise (alt form), modify the page to the original form.
    else {

        // Change the current source image to the original image.
        myImage.setAttribute("src", imageSrc1);

        // Modify the styles of concern to the original style set.
        htmlStyle.backgroundColor = htmlBgColor1;
        h1Style.color = h1Color1;
        bodyStyle.backgroundColor = bodyBgColor1;
        bodyStyle.borderColor = bodyBorderColor1;

        // Modify the copyright text to correspond to the switched image.
        copyrightAnchor.href = copyrightAnchorHref1;
        copyrightAnchor.textContent = copyrightAnchorText1;
        copyrightCC.textContent = copyrightCCText1;
    }
};

// ===================== Use DOM to retrieve more elements ====================

// Fetch the <h1> element found on the HTML page.
// (the 'let' keyword is ideally used to declare non-constant variables.)
let myHeading = document.querySelector("h1");

// Fetch the <button> elements found on the HTML page, using their ids to 
// identify them.
let myButton1 = document.getElementById("change-button");
let myButton2 = document.getElementById("delete-button");

// ================== Adding a personalised welcome message ===================

/**
 * A function used to set a personalised greeting for the user.
 */
function setUserName() {

    /* Display a dialogue box, asking the user to enter their name, storing it
    in a variable after the user clicks the OK button shown in it. */
    const myName = prompt("Please enter your name.");

    // Only set if a name was actually entered
    if(myName) {
        /* 
            This is an API that allows one to store data in the browser to 
            retrive later. Using the setItem() function, one can store a data 
            item under a given name.

            In this case, a data item called 'name' is stored with the 
            value of the myName variable (contaning the user's entry for 
            their name).
        */
        localStorage.setItem("name", myName);

        /* Finally the textContent of the heading to a string personalised for
        the user, by including their entered name that was newly stored. */
        myHeading.textContent = `Mozilla is cool, ${myName}`;
        // Notice how to include variables into a string, 
        // using (`...`) and ${...}.
    }   
}

// Check whether the 'name' data (created by setUserName()) exists yet.
if (!localStorage.getItem("name")) {
    // If not, then create it by having the user set it.
    setUserName();
}
// If it does exist (i.e. the user set it on a previous visit to the page) ...
else {
    // ...then retrieve the stored name and use it to set the heading to a
    // personalised message to the user.
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// ==================== Define functionality for the buttons ==================

// Set what happens when the "change user" button is clicked.
myButton1.onclick = () => {
    // Have the user set the stored name, allowing them to set a different
    // name.
    setUserName();
};

// Set what happens when the "delete user" button is clicked.
myButton2.onclick = () => {
    // Check whether the 'name' data exists.
    if(localStorage.getItem("name")) {
        // If so, delete it, and remove the headers's personalisation.
        localStorage.removeItem("name");
        myHeading.textContent = "Mozilla is Cool";
    }
};

/** 
 * ================================= Concepts =================================
 * 
 * The 'const' keyword
 * The 'let' keyword
 * The Document Object Model (DOM) API
 * Defining functionality of clicked elements.
 * Modifying the styles of elements.
 * Creating functionality for buttons.
 * Creating local storage on web browser.
 * Anonymous functions
 * ============================================================================
 */