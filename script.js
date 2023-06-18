function mega_swam() {
    const swam_img = document.getElementById("swam_img");
    const swam_name = document.getElementById("swam_name");


    if (swam_name.textContent == "Mega Swampert #0260") {
        swam_img.src = "img/swampert.png";
        swam_name.innerText = "Swampert #0260";
    } else {
        swam_img.style.opacity = "0";
        swam_name.innerText = "Mega Swampert #0260";
        swam_img.setAttribute("src","img/swampert_f2.png");
        swam_img.style.opacity = "1";
    }
}

function mega_blazi() {
    const blazi_img = document.getElementById("blazi_img");
    const blazi_name = document.getElementById("blazi_name");

    if (blazi_name.textContent == "Mega blaziken #0257") {
        blazi_img.src = "img/blaziken.png";
        blazi_name.innerText = "Blaziken #0257";
    }else {
        blazi_name.innerText = "Mega blaziken #0257";
        blazi_img.setAttribute("src","img/blaziken_f2.png");
        //blazi_img.style.width = "25vh";
    }
}