
function validate() {
    let isChecked = false;
    let isYValid = false;
    let isRValid = false;
    let arrayOfX = document.getElementsByName('xValue');
    let y =parseFloat(document.getElementById("yValue").value.replace(",", "."));
    let r =parseFloat(document.getElementById("rValue").value.replace(",", "."));
//x
    for (let i = 0; i < arrayOfX.length; i++) {
        if(arrayOfX[i].checked) {
            isChecked = true;
            showMessage(" ","xErrorLine");
            document.getElementById('xSpan').classList.remove('error');
            break;
        }

    }if(!isChecked){
        showMessage("Х не указан","xErrorLine");
        document.getElementById('xSpan').classList.add('error');
    }

//y
    if((isNaN(y) || y <= -5 || y >= 5)){
        showMessage("Y не указан или указан не верно", "yErrorLine");
        document.getElementById('ySpan').classList.add('error');
    }else{
        isYValid = true;
        showMessage(" ","yErrorLine");
        document.getElementById('ySpan').classList.remove('error');
    }

//r
    if((isNaN(r) || r <= 2 || r >= 5)){
        showMessage("R не указан или указан не верно", "rErrorLine");
        document.getElementById('rSpan').classList.add('error');
    }else{
        isRValid = true;
        showMessage(" ","rErrorLine");
        document.getElementById('rSpan').classList.remove('error');

    }
    if (isChecked && isYValid && isRValid){
        showMessage(" ");
        return true;
    }
    return false;

}

function showMessage(messageHTML, element) {
    document.getElementById(element).innerHTML = messageHTML;
}
//
// function sendRequest() {
//     let xhr = new XMLHttpRequest();
//     const body = "xValue="+encodeURIComponent(x)+
//         "yValue="+encodeURIComponent(y)+
//         "rValue="+encodeURIComponent(r);
//     xhr.open('POST','/pip2/controller');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function() {
//         if (this.readyState !== 4)
//             return;
//         alert( "aa" );
//     };
//     xhr.send(body);
//     // xhr.onload = function(){
//     //     document.location.href='/pip2/controller';
//     // };
//
// }

// document.getElementById("submitButton").onclick = function submit(e) {
//     e.preventDefault();
//     if(validR() && validX() && validY()){
//         sendRequest();
//     }
// };

let canvas = document.querySelector("#graph");
let c = canvas.getContext("2d");
canvas.width = 400;
canvas.height =400;

function draw(){

    let rValue = 160;
    let width = 400;
    let height = 400;
    c.strokeStyle ="#FFFFFF";
// x-line
    c.beginPath();
    c.moveTo(5, height/2);
    c.lineTo(width-5, height/2);
    c.moveTo(width/2-rValue, height/2-3);
    c.lineTo(width/2-rValue, height/2+3);
    c.moveTo(width/2-rValue/2, height/2-3);
    c.lineTo(width/2-rValue/2, height/2+3);
    c.moveTo(width/2+rValue/2, height/2-3);
    c.lineTo(width/2+rValue/2, height/2+3);
    c.moveTo(width/2+rValue, height/2-3);
    c.lineTo(width/2+rValue, height/2+3);
    c.moveTo(width-10, height/2-5);
    c.lineTo(width-6, height/2);
    c.lineTo(width-10, height/2+5);
    c.stroke();

//y-line
    c.beginPath();
    c.moveTo(width/2, 5);
    c.lineTo(width/2, height-5);
    c.moveTo(width/2-3, height/2-rValue);
    c.lineTo(width/2+3, height/2-rValue);
    c.moveTo(width/2-3, height/2-rValue/2);
    c.lineTo(width/2+3, height/2-rValue/2);
    c.moveTo(width/2-3, height/2+rValue/2);
    c.lineTo(width/2+3, height/2+rValue/2);
    c.moveTo(width/2-3, height/2+rValue);
    c.lineTo(width/2+3, height/2+rValue);
    c.moveTo(width/2-5, 10);
    c.lineTo(width/2, 6);
    c.lineTo(width/2+5, 10);
    c.stroke();

//text
    c.font = "14px Arial";
    c.fillStyle = "#FFFFFF";
    c.fillText("X", width-13, height/2 -5);
    c.fillText('R/2', width/2 + rValue/2, height/2-5);
    c.fillText('R', width/2 + rValue, height/2-5);
    c.fillText('-R', width/2 - rValue, height/2-5);
    c.fillText('-R/2', width/2 - rValue/2, height/2-5);
    c.fillText("Y", width/2+5, 13);
    c.fillText('-R', width/2+5, height/2 + rValue);
    c.fillText('-R/2', width/2+5, height/2 + rValue/2);
    c.fillText('R/2', width/2+5, height/2 - rValue/2);
    c.fillText('R', width/2+5, height/2 - rValue);

// 1part
    c.fillStyle = "rgb(255,255,255,0.4)";
    c.fillRect(width/2,height/2-rValue, rValue/2, rValue);

// 3part circle of 3 part r= r/2
    c.beginPath();
    c.moveTo(width/2 - rValue/2, height/2);
    c.lineTo(width/2, height/2);
    c.lineTo(width/2, height/2 + rValue/2);
    c.arc(width/2, height/2, rValue/2, Math.PI*0.5, Math.PI, false);
    c.fill();

// 4part triangle 0 r/2 r/2
    c.beginPath();
    c.moveTo(width/2, height/2 + rValue/2);
    c.lineTo(width/2 + rValue/2, height/2);
    c.lineTo(width/2, height/2);
    c.lineTo(width/2, height/2 + rValue/2);
    c.fill();
}


canvas.addEventListener("mousedown", function(event) {
    let click_x, click_y;
    let r = parseFloat(document.getElementById("rValue").value.replace(",", "."));
    if (!isNaN(r) && r > 2 && r < 5) {
        document.getElementById('rSpan').classList.remove('error');
        let rect = canvas.getBoundingClientRect();
        click_x = event.clientX - rect.left;
        click_y = event.clientY - rect.top;
        let x = (click_x-200)/ 160 * r;
        let y = (-click_y+200) / 160 * r;

        drawPoint(click_x,click_y);
        sendCanvas(x.toFixed(3),y.toFixed(3),r);
    }else {
        showMessage("R не указан или указан не верно", "rErrorLine");
        document.getElementById('rSpan').classList.add('error');
    }
});

function drawPoint( x, y) {
    c.fillStyle = "#FFFFFF";
    c.beginPath();
    c.arc(x, y, 1.5, 0, Math.PI * 2);
    c.fill();

}

function sendCanvas(x,y,r) {

    let form = document.createElement('form');
    form.action = "controller";
    form.method = "POST";
    form.hidden=true;
    form.innerHTML = "<input name= 'xValue' value=\"" + x + "\">" + "<input name= 'yValue' value=\"" + y + "\">" + "<input name= 'rValue' value=\"" + r + "\">";
    document.body.append(form);
    form.submit();
    form.onload = function(){document.location.href='result.jsp';};
}


