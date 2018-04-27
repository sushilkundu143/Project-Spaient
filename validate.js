$.validator.setDefaults({
  submitHandler: function () {
    alert("submitted!");
  }
});
/*
$(document).ready(function () {
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please check your input."
);
$('input[type="full_name"]').rules("add", { regex: /^[A-Za-z]$/ });
*/
  // validate signup form on keyup and submit
  $("#signupForm").validate({
    rules: {
      first_name: {
        required: true
      },
      last_name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      agree: "required"
    },
    messages: {
      first_name: "Please enter your firstname",
      last_name: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above"
      },
      email: "Please enter a valid email address",
      agree: "Please accept our policy"
    }
  });

  // propose username by combining first- and lastname
  // $("#username").focus(function() {
  //   var firstname = $("#firstname").val();
  //   var lastname = $("#lastname").val();
  //   if (firstname && lastname && !this.value) {
  //     this.value = firstname + "." + lastname;
  //   }
  // });

});