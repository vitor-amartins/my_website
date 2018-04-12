known = ['C/C++', 'Java (Android)', 'Swift', 'Python', 'HTML/CSS'];
learning = ['Haskell', 'JavaScript', 'PHP', 'SQL', 'JQuery', 'D3'];
next = ['AJAX'];
want = ['React', 'NodeJS', 'NPM', 'Elixir', 'Ruby'];

$(document).ready(function() {

    var list_items = document.getElementById("list_items");

    for (var i = 0; i < known.length; i++) {
        var div = document.createElement("div");
        div.className = "item col-xs-6 col-md-4";
        var img = document.createElement("img");
        img.src = "images/checked.svg";
        var p = document.createElement("p");
        p.innerHTML = known[i];
        div.appendChild(img);
        div.appendChild(p);
        list_items.appendChild(div);
    }

    for (var i = 0; i < learning.length; i++) {
        var div = document.createElement("div");
        div.className = "item col-xs-6 col-md-4";
        var img = document.createElement("img");
        img.src = "images/hourglass.svg";
        var p = document.createElement("p");
        p.innerHTML = learning[i];
        div.appendChild(img);
        div.appendChild(p);
        list_items.appendChild(div);
    }

    for (var i = 0; i < next.length; i++) {
        var div = document.createElement("div");
        div.className = "item col-xs-6 col-md-4";
        var img = document.createElement("img");
        img.src = "images/next.svg";
        var p = document.createElement("p");
        p.innerHTML = next[i];
        div.appendChild(img);
        div.appendChild(p);
        list_items.appendChild(div);
    }

    for (var i = 0; i < want.length; i++) {
        var div = document.createElement("div");
        div.className = "item col-xs-6 col-md-4";
        var img = document.createElement("img");
        img.src = "images/want.svg";
        var p = document.createElement("p");
        p.innerHTML = want[i];
        div.appendChild(img);
        div.appendChild(p);
        list_items.appendChild(div);
    }
});