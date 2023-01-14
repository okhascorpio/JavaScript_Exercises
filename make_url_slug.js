// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\W+/).join("-");
    } // \W+ = consecutive non alphanumerics
    // Only change code above this line
    console.log(urlSlug("A Mind Needs Books    Like A Sword Needs A Whetstone"));