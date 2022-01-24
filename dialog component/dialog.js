let mainFrameButtons = document.querySelectorAll(".main-frame-btns")
let dialogBoxes = document.querySelectorAll(".dialog-boxes")

//hide all dialog boxes
dialogBoxes[0].style.display = "none";
dialogBoxes[1].style.display = "none";
dialogBoxes[2].style.display = "none";

//dialog box-1 hide/show event
mainFrameButtons[0].addEventListener("click", () => {
    dialogBoxes[1].style.display = "none";
    dialogBoxes[2].style.display = "none";
    dialogBoxes[0].style.display = "block";
})


//dialog box-2 hide/show event
mainFrameButtons[1].addEventListener("click", () => {
    dialogBoxes[0].style.display = "none";
    dialogBoxes[2].style.display = "none";
    dialogBoxes[1].style.display = "block";
})


//dialog box-3 hide/show event
mainFrameButtons[2].addEventListener("click", () => {
    dialogBoxes[0].style.display = "none";
    dialogBoxes[1].style.display = "none";
    dialogBoxes[2].style.display = "block";
})