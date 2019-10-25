var count = 15;
var counter;
var output = [];
var answers;
var q1;
var q2;
var q3;
var z;
var z1;
var z2;
var x;
var questions = [{
    question: "The animal which only eats grass and plants?",
    choices: ["omnivore", "carnivore", "herbivore" ],
    validAnswer: 2
    }, {
    question: "which flower can help to clean radioactive waster?",
    choices: ["rose", "sun flower", "lotus"],
    validAnswer: 1},{
    question: "how many bones do adult have",
    choices: [206,306,106],
    validAnswer: 3}
    ]
    function myTimer(){
        count--;
        $("#time-left").html("<h2>" + count +"</h2>");
        if(count==0){
            stop();
        }                  
          
    }
    function stop(){
        clearInterval(counter);
        // q1.checked = false;
        // q2.checked = false;
        // q3.checked = false;
        //$("#answers").html("<h2>" + z + " " + z1 + " " + z2 + "</h2>");
        var ans = $("#answers");
        ans.text(z);

    }

    function questionCheck(){
 //       for(var i = 0; i<questions.length; i++){
            q1 = document.getElementsByName('animal');
            z=[];
            console.log(q1);
            for(var i = 0; i < q1.length; i++){
                console.log(i, q1.length);
              if(q1[i].checked){
                  
                  z.push(q1[i].value);
                //  x = z.toString;
                  console.log("i am z",z);
                }

            }   
            q2 = document.getElementsByName('flower');
            z1=[];
            console.log(q2);
            for(var i1 = 0; i1 < q2.length; i1++){
                console.log(i1, q2.length);
              if(q2[i1].checked){
                  console
                  z1.push(q2[i1].value);
                  console.log("i am z1",z1);
                }

            }  
            q3 = document.getElementsByName('bones');
            z2=[];
            console.log(q3);
            for(var i2 = 0; i2 < q3.length; i2++){
                console.log(i2, q3.length);
              if(q3[i2].checked){
                  console
                  z2.push(q3[i2].value);
                  console.log("i am z2",z2);
                }

            }  

        }
$(document).ready(function() {
    
    $("#start-button").on("click",function(){ 
    count = 15   
    clearInterval(counter);
    counter = setInterval(myTimer, 1000);  
    questionCheck();
    }); 

    $("#done1").on("click", stop);
});