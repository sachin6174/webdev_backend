// import fetch from 'node-fetch'

function data(){
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=chandigarh&unit=metric&appid=44c9a010fc226d7fe3f5823247fada87")
    fetch("/data.json")
    .then(
        function (res) {
            res.json();
        }
    ).then(
        function (rsp) {
            console.log(rsp);
        }
    )
}

let interval = 2000;
setInterval( data, interval); 