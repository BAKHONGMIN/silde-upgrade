$(document).ready(function(){
    let gugudan = "";
    $("#btn button").click(function(){
        gugudan= $("#btn input").val();
        $("#btn span").text(gugudan);  

    });
  });

window.onload = ()=>{
    document.getElementById("trigger").onclick=()=>{
        let inputnum = document.getElementById('guguNum').value;
        guguDan(inputnum);
    }

// window.onload = function(){}와 같다
// 3단이 출력되도록 처리하기
function guguDan(num){   
    let guguText="";    
    for(let i=0; i<10; i++){
        guguText += `<li>${num}X${i}=${num*i}</li>`;
        }
    document.getElementById("gugu").innerHTML = guguText;
    }

}