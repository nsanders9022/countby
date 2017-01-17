$("document").ready(function(){
  $("#count").submit(function(event){
    event.preventDefault();

    var endValue = parseInt($("#end").val());
    var multipleValue = parseInt($("#increment").val());

    $("#result").append(countBy(endValue, multipleValue))
  })
})

var countBy = function(endValue, multipleValue){
  if (endValue && multipleValue){
    var output = ""
    for (var number = 0; number <= endValue; number += multipleValue){
      output += number + ", ";
    }
    return output
  } else {
    alert("You need to put a value in all boxes");
  }
};
