const itemsArray=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];

document.querySelector("#enter").addEventListener("click",()=>{
    const item=document.querySelector("#item")
    createItem(item)
})
function displayItems(){
    let items="";
    for(let i=0;i<itemsArray.length;i++){
        
    }
}
function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}
//Date display
function displayDate(){
    let date=new Date()
    date=date.toString().split(" ")
    document.querySelector("#date").textContent=date[2]+" "+date[1]+" "+date[3];
}
window.onload=function(){
    displayDate()
}