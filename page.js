$(document).ready(function() {
  $('#submit').click(function() {

    var firstname = document.getElementById('firstname').value;
    $('#firstname').removeClass("focus");
    $('#alertfirstname').hide();
    if (firstname == null || firstname == 0) {
      $('#alertfirstname').show();
      $('#firstname').addClass("focus");
    }

    var lastname = document.getElementById('lastname').value;
    $('#alertlastname').hide()
    $('#lastname').removeClass("focus");
    if (lastname == null || lastname == 0) {
      $('#alertlastname').show()
      $('#lastname').addClass("focus");
    }

    var username = document.getElementById('username').value;
    $('#username').removeClass("focus");
    $('#alertusername').hide();
    if (username == null || username == 0) {
      $('#alertusername').show();
      $('#username').addClass("focus");
    }

    var sell = document.getElementById('sell').value;
    $('#sell').removeClass("focus");
    $('#alertsell').hide();
    if (sell == '@Example.com' || sell == null) {
      $('#alertsell').show();
      $('#sell').addClass("focus");
    }

    var pwd = document.getElementById('pwd').value;
    var RePwd = document.getElementById('RePwd').value;
    $('#alertpwd').hide();
    $('#alertpwd').removeClass("focus");
    var len=pwd.length;
    $('#pwd,#RePwd').removeClass("focus");
    if (pwd == null && repwd == null || len < 6 || pwd !== RePwd ){
      $('#alertpwd').show();
      $('#pwd,#RePwd').addClass("focus");
    }

    var ContactNo = document.getElementById('ContactNo').value;
    var contactlength = ContactNo.length;
    $('#alertContactNo').hide();
    $('#ContactNo').removeClass("focus");
    if( ContactNo == null || contactlength <= 9 || contactlength >= 11 ){
      $('#alertContactNo').show();
      $('#ContactNo').addClass("focus");
    }

    var email = document.getElementById('email').value;
    $('#email').removeClass("focus");
    $('#alertemail').hide();
    if(email == null || email.indexOf('@') == -1 || email.indexOf('.') == -1){
      $('#alertemail').show();
      $('#email').addClass("focus");
    }
  });
});
