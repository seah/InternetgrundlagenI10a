InternetExplorer = document.all &&!window.opera; 
GK = window.sidebar; 
ObjectArray = [];
x = 0;

function myFader() {
    this.timeOut = false;
    this.fade = function (y) {
    
    }
}

function Fader() 
{ 
this.timeOut=false; 
this.fade=function(y) 
{ 
clearTimeout(this.timeOut); 
this.value=Number(eval('this.object.'+this.attr))+(this.delta*this.evt[y]); 
if(this.value>=this.min && this.value<=this.max) 
{ 
eval('this.object.'+this.attr+'='+this.value) 
this.timeOut=setTimeout('ObjectArray['+this.index+'].fade('+y+')',this.rate); 
} 
} 
} 
function init_fader(obj,delta,rate,min,max,dir) { 
if(InternetExplorer || GK) { 
ObjectArray.push(new Fader(x)); 
OB = ObjectArray[x]; 
OB.index = x; 
OB.object = obj; 
if(InternetExplorer) 
{ 
OB.attr = 'filters.alpha.opacity'; 
OB.faktor = 1; 
} 
else 
{ 
OB.attr = 'style.MozOpacity'; 
OB.faktor = 100; 
} 
OB.delta = delta/OB.faktor; 
OB.rate = rate; 
OB.min = min/OB.faktor; 
OB.max = max/OB.faktor; 
OB.evt=[-1,1];if(dir)OB.evt.reverse(); 
OB.object.onmouseover = new Function('f1','ObjectArray['+x+'].fade(0)'); 
OB.object.onmouseout = new Function('f2','ObjectArray['+x+'].fade(1)'); 
OB.fade(0);x++; 
}
}
