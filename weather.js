function fetchWeather(){
    var request = new XMLHttpRequest();
    var apikey = 'a7df6568baa1f99d3948e8db4c13e6db'
    var city = document.getElementById("temperature").nodeValue;
    console.log(city);
    var url='https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={apikey}';
    console.log(url);
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        table=document.createElement("table");
        table.border="2"
        table.align="center"
        row=table.insertRow(-1)
        cellh1=row.insertCell(-1)
        cellh2=row.insertCell(-1)
        cellh3=row.insertCell(-1)
        cellh1.innerHTML="DATE&TIME"
        cellh2.innerHTML="MIN_TEMPERATURE"
        cellh3.innerHTML="MAX_TEMPERATURE"
        result.list.array.forEach((day)=>
        {
            ro
        });
    }
}