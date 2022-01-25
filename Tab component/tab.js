const tabsBtn = document.querySelectorAll(".tabs");
const tabContent = document.querySelectorAll(".tab-content");

tabContent[0].style.display = "block";
for(var k=1;k<tabContent.length;k++){
    tabContent[k].style.display = "none";   
}
/*
tabContent[1].style.display = "none";
tabContent[2].style.display = "none";
*/

tabsBtn.forEach((eachList,i) =>{
    eachList.addEventListener("click", () =>{
        let a=0;
        tabContent[i].style.display = "block";
        tabsBtn[i].style.color="purple";
        tabsBtn[i].style.borderBottom="2px purple solid";

        for(let a=0;a<tabsBtn.length;a++)
        {
        if(a!=i)
        {tabContent[a].style.display = "none";
        tabsBtn[a].style.color="rgb(51, 49, 49)";
        tabsBtn[a].style.border="1px solid white"
        }
        }
        a++;
        
    })
})

