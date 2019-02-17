// Modifies the UI of the popup so it changes the image 
// when there is a file present or not
// Can also set the theme of the Popup if time is alotted

file.addEventListener("change", () => {
    var img = document.getElementById("image");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/1180px-Checkmark_green.svg.png";
    console.log(img.src);
})
