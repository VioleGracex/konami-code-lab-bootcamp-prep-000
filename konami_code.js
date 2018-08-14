const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];


 function init()
  {
   // your code here
   var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
   var index = 0;
   document.addEventListener('keydown', function (e) {
     //const key = parseInt(e.detail || e.which);

    /*if (key === code[index])
     {
       index++;

       if (index === code.length - 1)
       {
         window.alert("YOU DID IT!");
         index = 0;
       }
     }
     else
     {
       index = 0;
     }
   }, true);*/
   if (keys.toString().indexOf(konami) >= 0) {
            // do something such as:
            // alert('Konami');
            
            // and finally clean up the keys array
            keys = [];
        };
    }, true);
 }
