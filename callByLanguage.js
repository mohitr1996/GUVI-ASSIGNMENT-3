var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/language/deu?access_key=046f579e367aaaa7af04476f4923145c');

request.send();
request.onload =function () {
    var data = JSON.parse(this.response); 
    for(i=0;i<data.length;i++) {
        console.log(data[i]);
    }   
}