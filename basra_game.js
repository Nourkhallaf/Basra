var cards=new Array();
var cards1=new Array();
var cards2=new Array();
var floor=new Array();
var image=new Array();
var image1=new Array();
var image2=new Array();
var imgval=new Array();
var imgvalCom=new Array();
var floorimg=new Array();
var num=new Array(0,1,2,3);
var round=0;
var k,h=0,o=0,n,m,i,j,rand=0,basra;
var kCom,jCom,iCom,nCom,pimgCom,totalCom=0;
var total=0,comp,pla,cont=0,cont2=0,pimg,turn,sp=0,sc=0;
var scorep=document.getElementById("scorep");
var scorec= document.getElementById("scorec");
var turn_player=document.getElementById("turn");
var round_player=document.getElementById("round");
var floorcards=document.getElementsByClassName("floor");
var player_computer= document.getElementsByClassName("player_computer");
var player= document.getElementsByClassName("player");

cards=[
    "./cards/1_of_clubs.png","./cards/1_of_diamonds.png","./cards/1_of_hearts.png","./cards/1_of_spades.png",
    "./cards/2_of_clubs.png","./cards/2_of_diamonds.png", "./cards/2_of_hearts.png","./cards/2_of_spades.png",
    "./cards/3_of_clubs.png","./cards/3_of_diamonds.png","./cards/3_of_hearts.png","./cards/3_of_spades.png",
    "./cards/4_of_clubs.png","./cards/4_of_diamonds.png","./cards/4_of_hearts.png","./cards/4_of_spades.png",
    "./cards/5_of_clubs.png","./cards/5_of_diamonds.png","./cards/5_of_hearts.png","./cards/5_of_spades.png",
    "./cards/6_of_clubs.png","./cards/6_of_diamonds.png","./cards/6_of_hearts.png","./cards/6_of_spades.png",
    "./cards/7_of_clubs.png","./cards/7_of_diamonds.png","./cards/7_of_hearts.png","./cards/7_of_spades.png",
    "./cards/8_of_clubs.png","./cards/8_of_diamonds.png","./cards/8_of_hearts.png","./cards/8_of_spades.png",
    "./cards/9_of_clubs.png","./cards/9_of_diamonds.png","./cards/9_of_hearts.png", "./cards/9_of_spades.png",
    "./cards/10_of_clubs.png","./cards/10_of_diamonds.png","./cards/10_of_hearts.png","./cards/10_of_spades.png",
    "./cards/11jack_of_clubs.png","./cards/11jack_of_diamonds.png","./cards/11jack_of_hearts.png","./cards/11jack_of_spades.png",
    "./cards/13king_of_clubs.png","./cards/13king_of_diamonds.png","./cards/13king_of_hearts.png","./cards/13king_of_spades.png",
    "./cards/12queen_of_clubs.png","./cards/12queen_of_diamonds.png","./cards/12queen_of_hearts.png","./cards/12queen_of_spades.png"
    ]
//functio shuffle for cards

function shuffle()
 {
     if(document.getElementById("bt").childNodes[0] != undefined)
     {document.getElementById("bt").removeChild(document.getElementById("bt").childNodes[0])};
     var i = cards.length;
     if (i == 0) return;
     while (--i)
     {
         var j = Math.floor(Math.random() * (i + 1));
         var tempi = cards[i];
         var tempj = cards[j];
         cards[i] = tempj;
         cards[j] = tempi;
     }
 //array of floor(4)
     for(ii=0;ii<4;ii++)
     {
         floorimg[ii]=parseInt(cards[ii].split("/")[2]);        
     }
     if(floorimg[0]!=11&&floorimg[1]!=11&&floorimg[2]!=11&&floorimg[3]!=11)
     {
         for(k=0;k<4;k++)
         {  
            floor[k]=cards[k];
            image[k]=document.createElement("img");
            image[k].setAttribute("src","");
            floorcards[0].appendChild(image[k]);
            floorcards[0].childNodes[k].src=floor[k];
         } 
         for(h=0,k=4;k<=27;k++,h++)
         {cards1[h]=cards[k]; }
         for(o=0;k<=51;k++,o++)
         {cards2[o]=cards[k];}
         h=0;
         o=0;
         setTimeout(distribute,1000);
     }
     else
     {
         setTimeout(shuffle,500);
     }
 
// split cards array to two arraies for the two players  
 }
function distribute()
 {
     round++;
     var i1 = num.length;
     if (i1 == 0) return;
     while (--i1)
     {
         var j1 = Math.floor(Math.random() * (i1 + 1));
         var tempi1 = num[i1];
         var tempj1 = num[j1];
         num[i1] = tempj1;
         num[j1] = tempi1;
     }
     round_player.innerHTML=round;
    // distribute cadrs on computer_ append 4 img child 
    for(comp=0;comp<4;comp++,h++)    
    {
        image1[comp]=document.createElement("img");
        image1[comp].setAttribute("id","");
        image1[comp].setAttribute("value","");
        image1[comp].setAttribute("src","./cards/facedown.png");
        player_computer[0].appendChild(image1[comp]);
        player_computer[0].childNodes[comp].value=cards1[h];
        player_computer[0].childNodes[comp].id=num[comp];
    }
     rand=0;
     // distribute cadrs on player_ append 4 img child
    for(pla=0;pla<4;pla++,o++)
    {
        image2[pla]=document.createElement("img");
        image2[pla].setAttribute("src","");
        image2[pla].setAttribute("onclick","player_click(this)");
        player[0].appendChild(image2[pla]);
        player[0].childNodes[pla].src=cards2[o];
     }
     turn=1;
     turn_player.innerHTML=turn;
 }
function player_click(pic)
{  
   if(turn==1)
   {
       imgval=new Array();
       var sum=new Array();
       cont=0
       pimg=parseInt(pic.src.split("/")[4]);
       var pimg7=pic.src.split("/")[4];
       var len=floorcards[0].childNodes.length;
       basra=len;
       cont=game(pimg,pimg7,len);
       player[0].removeChild(pic);
       if(cont==0)
       {floorcards[0].appendChild(pic);} 
       else
       {
        cont++;
        sp+=cont;
        scorep.innerHTML=sp;  
       }
       turn=2;
       turn_player.innerHTML=turn;
       document.getElementById(rand).src= document.getElementById(rand).value;
       setTimeout("computer_click(rand++)",1000);
  }// enf if            
}// end function
function computer_click(rand)
{    
   if(turn==2)
     { 
         imgvalCom=new Array();
         var sumCom=new Array();
         cont2=0;
         //document.getElementById(rand).src= document.getElementById(rand).value;
         document.getElementById(rand).focus(); 
         pimgCom=parseInt(document.getElementById(rand).value.split("/")[2]);
         var pimg7Com=document.getElementById(rand).value.split("/")[2];
         var len2=floorcards[0].childNodes.length;
         var basraCom=len2;
        /*for(nCom=0;nCom<len2;nCom++)
        {
            imgvalCom[nCom]=parseInt(floorcards[0].childNodes[nCom].src.split("/")[4]) ;
        } */ 
        cont2=game(pimgCom,pimg7Com,len2);
        if(cont2==0)
        {
            var newimg=document.createElement("img");
            newimg.setAttribute("src","");
            console.log(document.getElementById(rand).value)
            newimg.src=document.getElementById(rand).value;
           floorcards[0].appendChild(newimg);
        } 
        else
        {
            cont2++;
            sc+=cont2;
            scorec.innerHTML=sc;  
        }
         player_computer[0].removeChild(document.getElementById(rand));
         turn=1;
         turn_player.innerHTML=turn;
         if(player_computer[0].childNodes.length==0)
         {  
             if(h==24&& o==24&& round==6)
             {
                 console.log(scorep+"; "+scorec);
                 if(sp>sc)
                     location.replace("winneryou.html");
                 if(sp<sc)
                     location.replace("winnercom.html");
                 if(sp==sc)
                     location.replace("noone.html");
             }
             setTimeout(distribute,1000);
         }
     }
}
function button()
{
    var btn =document.createElement("button");
    btn.setAttribute("id","myBtn");
    btn.setAttribute("onclick","shuffle()");
    document.getElementById("bt").appendChild(btn);
    var txt= document.createTextNode("start");
    document.getElementById("myBtn").appendChild(txt); 
}

function game(pimg,pimg7,len)
{
    var cont =0;
    imgval=new Array();
    for(n=0;n<len;n++)
    {
        imgval[n]=parseInt(floorcards[0].childNodes[n].src.split("/")[4]);
    }
    if(pimg!=11&&pimg!=12&&pimg!=13&&pimg7!="7_of_diamonds.png")   
    {
      
        
       cont = findSum(imgval,pimg,len);
    }
       
    else if(pimg==12 ||pimg==13)
    {
       for(n=0;n<len;n++)
       {
           if(imgval[n]==pimg )
           {
               if(len==1)
               {
                   cont+=10;
               }
               cont++;len--;
               floorcards[0].removeChild(floorcards[0].childNodes[n]);
               imgval.splice(n,1);
           }
       }
   }
    else if(pimg==11)
    {
        cont+=len;
        if(len==1&& imgval[0]==11)
        {cont+=20;}
        for(n=0;n<len;len--)
        {
            floorcards[0].removeChild(floorcards[0].childNodes[n]);
            imgval.splice(n,1);
        }
    }
    else if(pimg7=="7_of_diamonds.png")
    {
       
        
       cont+=len;
       
        if(sum(imgval)%7==0)
        {cont+=10;}
        
        for(n=0;n<len;len--)
        {
            floorcards[0].removeChild(floorcards[0].childNodes[n]);
            
            imgval.splice(n,1);
        }
    }
    return cont;
}



function sum(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++)
		total += arr[i];
	return total
}


function combinationSets(arr) {
	//debugger;
	var cS = [[]];
	for (var i=0; i < arr.length; i++) {
		for (var j = 0, len = cS.length; j < len; j++) {
			cS.push(cS[j].concat(arr[i]));
		}
	}
	return cS;
}

function findSum(imgval, pimg,len){
	cont=0;
	var sumSets = [];
	var numberSets = combinationSets(imgval);
	for(var i=0; i < numberSets.length; i++){
		var result = [];
		var numberSet = numberSets[i]; 
		if(sum(numberSet) == pimg){
			for( var j=0; j<numberSet.length;j++){
				result.push(inArray(numberSet[j],imgval))
			}
			function inArray(num,arr){
				return (arr.indexOf(num)!=-1)
			}
			checkTrue = result.every(function(item, index, array){
				return item;
			});
			if(checkTrue==true){
				for( var j=0; j<numberSet.length;j++){
                    floorcards[0].removeChild(floorcards[0].childNodes[imgval.indexOf(numberSet[j])]);
                    
                    cont++;
                    len--;
                    if(len==0)
               {
                   cont+=10;
               }
                    
                        imgval.splice(imgval.indexOf(numberSet[j]),1);
                   
            
				}
				sumSets.push(numberSet);
                 console.log( numberSet);
                 //console.log([imgval.indexOf(numberSet[f])]);}
			}
		}
	}
	return cont;
}
