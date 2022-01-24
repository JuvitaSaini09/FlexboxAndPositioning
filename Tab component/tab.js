const tabsBtn = document.querySelectorAll(".tabs");
const tabContent = document.querySelectorAll(".tab-content");
tabContent[0].style.display = "none";
tabContent[1].style.display = "none";
tabContent[2].style.display = "none";

tabsBtn.forEach((eachList) =>{
    eachList.addEventListener("click", () =>{
        console.log("hi")
    })
})

