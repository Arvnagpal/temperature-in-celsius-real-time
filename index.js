first="https://openweathermap.org/data/2.5/weather?q="
second="London,uk"
third= "&appid=b6907d289e10d714a6e88b30761fae22&units=metric"

function myFunction() {
    var x = document.getElementById("cityVal").value;
    alert(x);
    second = x;
    var url = first+second+third;
    alert(url);
fetch(url)
.then(Response =>{Response.json()
.then(json => document.getElementById('tableData').innerText=json.main.temp)    
})
  }