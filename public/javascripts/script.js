function donoffkaro(){
    var form = document.querySelectorAll("#files form")
    form.forEach(function(frm){
        frm.style.display = "none"
    })
} 

var fileicon = document.querySelector("#fileicon")
var foldericon = document.querySelector("#foldericon")
var fileform = document.querySelector("#fileform")
var folderform = document.querySelector("#folderform")

fileicon.addEventListener("click",function(){
    donoffkaro()
    fileform.style.display = "block"
})

foldericon.addEventListener("click",function(){
    donoffkaro()
    folderform.style.display = "block"
})

var files = document.querySelector("#files")
var popup = document.querySelector("#popup")
var popform = document.querySelector("#popup form")
var newfn = document.querySelector("#newfn")


files.addEventListener("click",function(dets){
    if(dets.target.id==="pencil"){
        popup.style.display = "block"
        var val = dets.srcElement.parentElement.parentElement.textContent.trim()
        newfn.value= val
        popform.setAttribute("action",`/updatename/${val}`)
    }
})

var close = document.querySelector("#close")
var logo = document.querySelector("#logo")

close.addEventListener("click",function(){
    logo.style.display = "none"
    close.style.display = "none"
})



