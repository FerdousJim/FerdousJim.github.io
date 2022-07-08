
let noOfCharac = 1540;

let contents = document.querySelectorAll(".content");
contents.forEach(content =>
    {
        if(content.textContent.length < noOfCharac){
            content.nextElementSibling.style.display ="none";
        }
        else{
            let displayText = content.textContent.slice
            (0,noOfCharac);
            let moreText = content.textContent.slice
            (noOfCharac);
            content.innerHTML=`${displayText}<span class="dots">...</span><span class ="hide more">${moreText}</span>`;
        }
    });
function readMore(btn){
    let bookitem = btn.parentElement;
    bookitem.querySelector(".dots").classList.toggle("hide");
    bookitem.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

