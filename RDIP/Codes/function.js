var eng1 = ['John ate an apple before afternoon',
                    'before afternoon John ate an apple',
                    'John before afternoon ate an apple'
                ];
var eng2 = ['some students like to study in the night',
                    'at night some students like to study'
                ];
var eng3 = ['John and Mary went to church',
                    'Mary and John went to church'
                ];
 var eng4 = ['John went to church after eating',
                    'after eating John went to church',
                    'John after eating went to church'
                ];
var eng5 = ['did he go to market',
                    'he did go to market'
                ];
var eng6 = ['the woman who called my sister sells cosmetics',
                    'the woman who sells cosmetics called my sister',
                    'my sister who sells cosmetics called the woman',
                    'my sister who called the woman sells cosmetics'
                ];
var eng7 = ['John goes to the library and studies',
                    'John studies and goes to the library'
                ];
 var eng8 = ['John ate an apple so did she',
                    'she ate an apple so did John'
                ];
 var eng9 = ['the teacher returned the book after she noticed the error',
                    'the teacher noticed the error after she returned the book',
                    'after the teacher returned the book she noticed the error',
                    'after the teacher noticed the error she returned the book',
                    'she returned the book after the teacher noticed the error',
                    'she noticed the error after the teacher returned the book',
                    'after she returned the book the teacher noticed the error',
                    'after she noticed the error the teacher returned the book'
                ];
 var eng10 = ['I told her that I bought a book yesterday',
                    'I told her yesterday that I bought a book',
                    'yesterday I told her that I bought a book',
                    'I bought a book that I told her yesterday',
                    'I bought a book yesterday that I told her',
                    'yesterday I bought a book that I told her'
                ];



  var english = [eng1,eng2,eng3,eng4,eng5,eng6,eng7,eng8,eng9,eng10];



 var hin1 = ['राम और श्याम बाजार गयें',
                    'राम और श्याम गयें बाजार',
                    'बाजार गयें राम और श्याम',
                    'गयें बाजार राम और श्याम'

                ];
 var hin2 = ['राम सोया और श्याम भी',
                    'श्याम सोया और राम भी',
                    'सोया श्याम और राम भी',
                    'सोया राम और श्याम भी'
                ];
 var hin3 = ['मैंने उसे बताया कि राम सो रहा है',
                    'मैंने उसे बताया कि सो रहा है राम',
                    'उसे मैंने बताया कि राम सो रहा है',
                    'उसे मैंने बताया कि सो रहा है राम',
                    'मैंने बताया उसे कि राम सो रहा है',
                    'मैंने बताया उसे कि सो रहा है राम',
                    'उसे बताया मैंने कि राम सो रहा है',
                    'उसे बताया मैंने कि सो रहा है राम',
                    'बताया मैंने उसे कि राम सो रहा है',
                    'बताया मैंने उसे कि सो रहा है राम',
                    'बताया उसे मैंने कि राम सो रहा है',
                    'बताया उसे मैंने कि सो रहा है राम'
                ];
  var hin4 = ['राम खाकर सोया',
                    'खाकर राम सोया',
                    'राम सोया खाकर',
                    'खाकर सोया राम',
                    'सोया राम खाकर',
                    'सोया खाकर राम'
                ];
var hin5= ['बिल्लियों को मारकर कुत्ता सो गया	',
                    'मारकर बिल्लियों को कुत्ता सो गया',
                    'बिल्लियों को मारकर सो गया कुत्ता',
                    'मारकर बिल्लियों को सो गया कुत्ता',
                    'कुत्ता सो गया बिल्लियों को मारकर',
                    'कुत्ता सो गया मारकर बिल्लियों को',
                    'सो गया कुत्ता बिल्लियों को मारकर',
                    'सो गया कुत्ता मारकर बिल्लियों को'
                ];
var hin6 = ['एक लाल किताब वहाँ है',
                    'एक लाल किताब है वहाँ',
                    'वहाँ है एक लाल किताब',
                    'है वहाँ एक लाल किताब'
                ];
var hin7 = ['एक बड़ी सी किताब वहाँ है',
                    'एक बड़ी सी किताब है वहाँ',
                    'बड़ी सी एक किताब वहाँ है',
                    'बड़ी सी एक किताब है वहाँ',
                    'वहाँ है एक बड़ी सी किताब',
                    'वहाँ है बड़ी सी एक किताब',
                    'है वहाँ एक बड़ी सी किताब',
                    'है वहाँ बड़ी सी एक किताब'
                ];



 var hindi = [hin1,hin2,hin3,hin4,hin5,hin6,hin7];
 var select=document.getElementById("choose");
/*
function fs()
{


}*/

function wordshuffle(sentence)
{
var words=sentence.split(" ")
words = words.sort(() => Math.random() - 0.5)
return words;

}

 function run()
 {
     var i,j,val,finalsent="",form;
     if(select.value==="english")
     {
        document.getElementById("sen1").innerHTML="select buttons in proper order"
        document.getElementById("sen2").innerHTML="sentence can either be interrogative or declarative"
       var ran=Math.floor(Math.random() * 10);
       var ind=Math.floor(Math.random() * english[ran].length);
        var shuffle=wordshuffle(english[ran][ind]);
        for(i=0;i<shuffle.length;i++)
        {
            val=shuffle[i];
            //var ids="btn"+i;
           //form= "<button id='"btn"+i' onclick='fs(this.id,this.value)' value=val>"+val+"</button>"  ;

           //var button = document.createElement("button");
           //button.innerHTML = "exp";
           

            finalsent+=" "+ val;
        }
        document.getElementById("res").innerHTML=finalsent;

     }
     else if(select.value==="hindi")
     {
        document.getElementById("sen1").innerHTML="select buttons in proper order"
        document.getElementById("sen2").innerHTML="sentence can either be interrogative or declarative"
        var ran=Math.floor(Math.random() * 7);
        var ind=Math.floor(Math.random() * hindi[ran].length);
         var shuffle=wordshuffle(hindi[ran][ind]);
         /*for(i=0;i<shuffle.length;i++)
         {
             val=shuffle[i];
            form= "<button id="'btn"+i+"' onclick='fs(this.id,this.value)' value='"+val+"'>"+val+"</button>"  ;
             finalsent+=form
         }
         document.getElementById("res").innerHTML=finalsent;
 
         */

     }


     else
     {

        document.getElementById("sen1").innerHTML=""
        document.getElementById("sen2").innerHTML=""
        

     }
 }