var color1 = document.getElementById("color1");
color1.addEventListener("click", function() { document.body.style.backgroundColor = "#ff857a";
});

var color2 = document.getElementById("color2");
color2.addEventListener("click", function() { document.body.style.backgroundColor = "#ffe47a";
});

var color3 = document.getElementById("color3");
color3.addEventListener("click", function() { document.body.style.backgroundColor = "#a0f98b";
});

var color4 = document.getElementById("color4");
color4.addEventListener("click", function() { document.body.style.backgroundColor = "#8be5f9";
});

var color5 = document.getElementById("color5");
color5.addEventListener("click", function() { document.body.style.backgroundColor = "#d8a4f4";
});





// $.ajax( {
//     type: 'GET',
//     url: "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCTCNblsUxhjxKk0NvzfRgvZec-dgc0P7c",
//     success: function(data) {
//         var res = data.items;
//         res.splice(99, res.length-100);
//         console.log(res);
//         newFont(res);
//     }
// })

// function showDrop() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// function filter() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//         if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//         } else {
//             a[i].style.display = "none";
//         }
//     }
// }

// function newFont(arr) {
//     var mainBar = document.getElementById("myDropdown");
//     var newlink = [];
//     for (var i = 0; i <arr.length; i++) {
//         newlink.push(document.createElement("a"));
//         newlink[i].innerHTML = arr[i].family;
//         mainBar.appendChild(newlink[i]);
//     }
// }