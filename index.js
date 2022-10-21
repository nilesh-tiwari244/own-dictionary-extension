let merr = "https://www.merriam-webster.com/dictionary/";
let pp = localStorage.getItem("str_words");
pp = JSON.parse(pp);
let temp = "";
const inputel = document.getElementById("input-el");
const submitbtn = document.getElementById("button-submit");
const removebtn = document.getElementById("button-remove");
const extractbtn = document.getElementById("button-extract");
const removeallbtn = document.getElementById("button-removeall");
const savetabbtn = document.getElementById("button-savetab");
const un_li = document.querySelector("#unordered-list");

let flag=true;

render2();
inputel.focus();

extractbtn.addEventListener("click", function () {
    inputel.value = JSON.stringify(pp);
    inputel.value = pp;
})
submitbtn.addEventListener("click", function () {
    let tex = inputel.value;
    if (tex!=""){
        if (pp != null) {
            pp.push(tex);
        }
        else {
            pp=[];
            pp.push(tex);
        }
        inputel.value = "";
        localStorage.setItem("str_words", JSON.stringify(pp));
        render2();
        if (flag){
           document.getElementById(`word_${tex}`).click();
        } 
    }
    inputel.focus();
    flag=true;
})
inputel.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        flag=false;
        submitbtn.click();
    }
})

removebtn.addEventListener("click", function () {
    let tex = inputel.value;
    if (pp != null) {
        for (let i = 0; i < pp.length; i++) {
            if (pp[i] == tex) {
                for (let j = i; j < pp.length - 1; j++) {
                    pp[j] = pp[j + 1];
                }
                pp.pop();
                i = pp.length;
            }
        }
    }
    inputel.value = "";
    localStorage.setItem("str_words", JSON.stringify(pp));
    render2();

})

removeallbtn.addEventListener("dblclick", function () {
    localStorage.clear();
    pp = [];
    render2();
})
/*
savetabbtn.addEventListener("click",function(){
        let tex=null;
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        tex = tabs[0].url;
        if (pp != null) {
            pp.push(tex);
        }
        else{
            words.push(tex);
            pp=words;
            words=[];
        }
    });

    inputel.value = "";
    localStorage.setItem("str_words",JSON.stringify(pp));
    render2();
})
*/
function render2() {
    temp = "";
    if (pp != null) {
        for (let i = pp.length - 1; i >= 0; i--) {
            // temp+="<li> <a href='"+ words[i]+"' target='_blank'> " + words[i] + "</a> </li>";
            temp += `<li>
                     <a id="word_${pp[i]}" href="${merr}${pp[i]}" target="_blank">
                         ${pp[i]}
                     </a>
                 </li>
         `;
        }
        un_li.innerHTML = temp;
    }
}