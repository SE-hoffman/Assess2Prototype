var apikey = '61a3fbf534abfc7f972efc0a';
var url = 'https://shoffman-7e49.restdb.io/rest/prototype';

function setup() {
    createCanvas(400, 400);
    addScreenPositionFunction();
  }
function setup();
  function draw() {
    gridOutput(LABEL); 
    background(148, 196, 0);
    fill(255, 0, 0);
   
  }
function draw();
/* --- Functions --- */
function getLocation(url,apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }
}