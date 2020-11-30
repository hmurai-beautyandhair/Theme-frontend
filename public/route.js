$(document).ready(function () {
  $("#customerForm").submit(function (e) {
    e.preventDefault();
    console.log("text");
    postData();
  });
  $("#submit1").click(function (e) {
    $("#submit1").addClass("hide");
    $("#spin").removeClass("hide");
    postData1()
  });
  $("#submit2").click(function (e) {
    $("#submit2").addClass("hide");
    $("#spin2").removeClass("hide");
    postData2()
  });

  function postData1() {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "wigoutlet",
      dataType: "json",
      success: function (data) {
        $("#spin").addClass("hide");
        $("#postResultDiv1").html("Post Successfully! ");
        $("#postResultDiv10").html('Info: ' + data.name );
      },
      error: function (e) {
        alert("e");
        console.log("ERROR: ", e);
      },
    });
  }
  function postData2() {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "wigscom",
      dataType: "json",
      success: function (data) {
        console.log('Api call', data)
        $("#spin2").addClass("hide");
        $("#postResultDiv2").html("Post Successfully!");
        $("#postResultDiv20").html('Info: ' + data.name );
      },
      error: function (e) {
        alert("e");
        console.log("ERROR: ", e);
      },
    });
  }
  // function ajaxGet() {
  //   $.ajax({
  //     type: "GET",
  //     url: window.location + "api/reviews",
  //     success: function(result) {
  //       $("#getResultDiv ul").empty();
  //       var custList = "";
  //       $.each(result, function(i, customer) {
  //         $("#getResultDiv .list-group").append(customer.review + "<br>");
  //         if (customer.mark) rating += Number(customer.mark);
  //         length = i + 1;
  //       });
  //       console.log("length", length);
  //       console.log("Rating", Math.floor(rating / length).toFixed(1));
  //       console.log("Success: ", result);
  //     },
  //     error: function(e) {
  //       $("#getResultDiv").html("<strong>Error</strong>");
  //       console.log("ERROR: ", e);
  //     }
  //   });
  // }
});
