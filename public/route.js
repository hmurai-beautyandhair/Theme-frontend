$(document).ready(function () {
  $("#customerForm").submit(function (e) {
    e.preventDefault();
    console.log("text");
    postData();
  });
  $("#submit1").click(function (e) {
    $("#submit1").addClass("hide");
    $("#spin").removeClass("hide");
  });
  $("#submit2").click(function (e) {
    $("#submit2").addClass("hide");
    $("#spin2").removeClass("hide");
  });

  function postData1() {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "/wigoutlet",
      // data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        $("#spin").addClass("hide");
        $("#postResultDiv1").html("<p>" + "Post Successfully! <br>" + "</p>");
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
      url: window.location + "/wigscom",
      // data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        $("#spin2").addClass("hide");
        $("#postResultDiv2").html("<p>" + "Post Successfully! <br>" + "</p>");
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
