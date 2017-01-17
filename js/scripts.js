$("document").ready(function(){
  $("#count").submit(function(event){
    event.preventDefault();

    var endValue = parseInt($("#end").val());
    var multipleValue = parseInt($("#increment").val());
    var factValue = parseInt($("#factorial").val());

    $("#result").append(countBy(endValue, multipleValue))

    $("#factResult").append(factorialOutput(factValue))
  })
})

var countBy = function(endValue, multipleValue){
  if (endValue && multipleValue){
    var output = "";
    for (var number = 0; number <= endValue; number += multipleValue){
      output += number + ", ";
    }
    return output
  } else {
    alert("You need to put a value in all boxes");
  }
};

var factorialOutput = function(factorial) {
  if (factorial) {
    var answer = 1;
    for (var number = 1; number <= factorial; number += 1) {
      answer *= number;
    }
  }return answer;
}
