const colors=["orange","deeppink","purple","crimson","cyan","deepskyblue"];
let colorSlideShow;
let index=0;

function start() {
    console.log("start button is clicked...");
     

   colorSlideShow= setInterval(() =>

   
    {
        if(index === colors.length)
        {
            index= 0;
        }
    
    document.body.style =`background:${colors[index]}`;
    console.log(index,colors[index]);
    index++;
    },2*1000);
    
}
function stop()
{
    clearInterval(colorSlideShow);
    index=0;
}
function pause()
{
    //whenever u pause it should not recyle from back, it should begin from wherever it had left
    clearInterval(colorSlideShow);
}