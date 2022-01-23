const clock = document.querySelector("#clock p")

getclock();
function getclock( ){
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2,"0")
    const Minute = String(date.getMinutes()).padStart(2,"0")
    const second =  String(date.getSeconds()).padStart(2,"0")
    clock.innerText= (`${Hour}:${Minute}:${second}`)
}
setInterval(getclock, 1000)