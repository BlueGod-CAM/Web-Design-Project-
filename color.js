var d= new Date();
var time=d.getHours();
console.log(time);

 if(time<7||time>18){
    document.getElementsByTagName("BODY")[0].style.backgroundColor="#121212";    
    document.getElementsByTagName("BODY")[0].style.color="red";  
    var n=document.getElementsByTagName("a").length;
    var i;
    for(i=-0;i<n;i++){
        document.getElementsByTagName("a")[i].style.color="white";    
 }
}