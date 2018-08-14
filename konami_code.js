/*const code = [
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
   }, true);
   if (keys.toString().indexOf(konami) >= 0) {
            // do something such as:
            // alert('Konami');

            // and finally clean up the keys array
            keys = [];
        };
    }, true);
 }*/
 f (window.addEventListener) {
     // create the keys and konami variables
     var keys = [],
         konami = "38,38,40,40,37,39,37,39,66,65";
     
     // bind the keydown event to the Konami function
     window.addEventListener("keydown", function(e){
         // push the keycode to the 'keys' array
         keys.push(e.keyCode);
         
         // and check to see if the user has entered the Konami code
         if (keys.toString().indexOf(konami) >= 0) {
             // do something such as:
             // alert('Konami');
             
             // and finally clean up the keys array
             keys = [];
         };
     }, true);
 };