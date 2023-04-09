
function insta()
{
  var url="https://www.instagram.com/vk368065/";
      window.open(url,null);
}
function in1()
{
  var url="https://www.linkedin.com/in/vishal-kumar-68768b193/";

  window.open(url,null);
}  
function application()
  {
    alert("Details store successfully!")
  }
  function run()
  {
    var url="https://www.youtube.com/watch?v=R3PspP7-lao";
        window.open(url,null);
  }
  function call(something)
  {
     console.log("Welcome to AJAX");
  }
  
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
  console.log(sum);
}


function but1(a)
{
  alert( a*a);
}  
function but2(a)
{
  alert(a*a);
}  
  
function but3(a)
{
  alert(a*a);

}  
  
function but4(a)
{
  alert(a*a);
}  
  
function but5(a)
{
  alert(a*a);
}  
  
function but6(a)
{
  aler(a*a);
}  
  
function but7(a)
{
  alert(a*a);
}  
  
function but8(a)
{
  alert(a*a);
}  
  
function but9(a)
{
  alert(a*a);
}  
var canvas
var ctx
var video;
var webcamWidth;
var webcamHeight;

navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

function startWebcam() {
  // canvas = document.getElementById("myCanvas")
  // video = document.getElementById('video')
  canvas = document.createElement('canvas')
  video = document.createElement('video')
  video.setAttribute('autoplay', true)
  ctx = canvas.getContext('2d')

  if (navigator.getUserMedia) {
    navigator.getUserMedia (
      {
        video: true,
        audio: false
      },

      function(stream) {
        webcamWidth = stream.getVideoTracks()[0].getSettings().width
        webcamHeight = stream.getVideoTracks()[0].getSettings().height
        canvas.setAttribute('width', webcamWidth);
        canvas.setAttribute('height', webcamHeight);

        // video.src = window.URL.createObjectURL(localMediaStream);
        video.srcObject = stream
      },

      function(err) {
        console.log( err);
      }
    );
  } else {
  console.log("getUserMedia not supported by your browser");
  }
}

function getCurrentFrame() {
  ctx.drawImage(video, 0,0)
  img_dataURI = canvas.toDataURL('image/png')
  document.getElementById("my-data-uri").src = img_dataURI
}

