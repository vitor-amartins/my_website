known = ['C/C++', 'Java (Android)', 'Swift', 'Python', 'HTML/CSS'];
learning = ['Haskell', 'JavaScript', 'PHP', 'SQL', 'JQuery', 'D3'];
next = ['AJAX'];
want = ['React', 'NodeJS', 'NPM', 'Elixir', 'Ruby'];

function makeTemplate(status, item) {
    var newDiv = document.createElement("div");
    newDiv.className = "item col-xs-6 col-md-4";
    var img = document.createElement("img");
    img.src = "images/" + status + ".svg";
    var p = document.createElement("p");
    p.innerHTML = item;
    newDiv.appendChild(img);
    newDiv.appendChild(p);
    return newDiv;
}

$(document).ready(function() {

    var list_items = document.getElementById("list_items");

    for (i in known) {
        list_items.appendChild(makeTemplate('known', known[i]));
    }

    for (i in learning) {
        list_items.appendChild(makeTemplate('learning', learning[i]));
    }

    for (i in next) {
        list_items.appendChild(makeTemplate('next', next[i]));
    }

    for (i in want) {
        list_items.appendChild(makeTemplate('want', want[i]));
    }
});