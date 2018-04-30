var p_status = new Array();
p_status = ['known', 'learning', 'next', 'want'];

var knowledges = new Array();
knowledges['known'] = ['C/C++', 'Java (Android)', 'Swift', 'Python', 'HTML/CSS', 'Haskell'];
knowledges['learning'] = ['JavaScript', 'PHP', 'SQL', 'JQuery', 'AJAX', 'D3'];
knowledges['next'] = ['NodeJS'];
knowledges['want'] = ['React', 'NPM', 'Elixir', 'Ruby'];

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

function addTemplates(obj, status, arr) {
    for (i in arr[status]) {
        obj.appendChild(makeTemplate(status, arr[status][i]));
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var list_items = document.getElementById("list_items");
    for (i in p_status) {
        addTemplates(list_items, p_status[i], knowledges);
    }
});