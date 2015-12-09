$(document).ready(function() {
  $('#submit').click(function() {
	var count=0; // that is taken to display the alert pop

    // validation for first name
    var firstname = document.getElementById('firstname').value;
    $('#firstname').removeClass("focus");
    $('#alertfirstname').hide();
    if (firstname == null || firstname == 0) {
      $('#alertfirstname').show();
      $('#firstname').addClass("focus");
	  $('.right').hide();
      } else {
		      count++;
	  }

    // validation for Second name
    var lastname = document.getElementById('lastname').value;
    $('#alertlastname').hide()
    $('#lastname').removeClass("focus");
    if (lastname == null || lastname == 0) {
      $('#alertlastname').show()
      $('#lastname').addClass("focus");
	  $('.right').hide();
    } else {
		count++;
	}

    // validation for User name
    var username = document.getElementById('username').value;
    $('#username').removeClass("focus");
    $('#alertusername').hide();
    if (username == null || username == 0) {
      $('#alertusername').show();
      $('#username').addClass("focus");
	  $('.right').hide();
    } else {
		count++;
	}

    //Validation for domian name
    var sell = document.getElementById('sell').value;
    $('#sell').removeClass("focus");
    $('#alertsell').hide();
    if (sell == '@Example.com' || sell == null) {
      $('#alertsell').show();
      $('#sell').addClass("focus");
      } else {
		      count++;
	  }

    //validation for password and re enter password
    var pwd = document.getElementById('pwd').value;
    var RePwd = document.getElementById('RePwd').value;
    $('#alertpwd').hide();
    $('#alertpwd').removeClass("focus");
    var len=pwd.length;
    $('#pwd,#RePwd').removeClass("focus");
    if (pwd == null && repwd == null || len < 6 || pwd !== RePwd ){
      $('#alertpwd').show();
      $('#pwd,#RePwd').addClass("focus");
	  $('.right').hide();
      } else {
		count++;
	  }

    // validation for contact no //
    $('#alertContactNo').hide();
    $('#ContactNo').removeClass("focus");
    var fld = document.getElementById('ContactNo');
    var ContactNo = fld.value;
    console.log
    if (fld.value == "") {
      $('#alertContactNo').show();
      $('#ContactNo').addClass("focus");
      fld.value = "";
      fld.focus();
      return false;
    } else if (isNaN(fld.value)) {
      $('#alertContactNo').show();
      $('#ContactNo').addClass("focus");
      fld.value = "";
      fld.focus();
      return false;
    } else if (!(fld.value.length == 10)) {
      $('#alertContactNo').show();
      $('#ContactNo').addClass("focus");
      fld.value = "";
      fld.focus();
      return false;
    } else {
      count++;
    }


    //validation for Email
    var email = document.getElementById("email").value;
    $('#alertemail').hide();
    $('#email').removeClass("focus");
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length || email == null) {
      $('#alertemail').show();
      $('#email').addClass("focus");
    } else {
      count++;
    }


    var dob = document.getElementById('textbox').value;

    var sex = document.getElementById("MyRadio").checked;
    if (sex == true) {
      gender = 'Male';
    } else {
      gender = 'FeMale'
    }

    console.log(gender);
    //validation for Date of birth
    /*
    var dob = document.getElementById('textbox').value;
    console.log(textbox);
    if (dob === null) {
      alert(hello);
      $('alertdob').show();
    }
    */

    console.log(count)
	if (count === 7) {
		$('.right').show(1000);


  //Printing the tables of values from forms
	var dvv = document.getElementsByClassName('mydivtable');
	var table = ""
	table += "<table class='table table-bordered' id='table'>";
	table += "<tr align='center'><td>FirstName</td>";
	table += "<td >" + firstname + "</td></tr>";
	table += "<tr align='center'><td>Lastname</td>";
	table += "<td>" + lastname + "</td></tr>";
	table += "<tr align='center'><td>UserName</td>";
	table += "<td>" + username +''+ sell + "</td></tr>";
	table += "<tr align='center'><td>Contact No</td>";
	table += "<td>" + ContactNo + "</td></tr>";
	table += "<tr align='center'><td>Alternamte Email</td>";
	table += "<td>" + email + "</td></tr>";
  table += "<tr align='center'><td>Alternamte Email</td>";
	table += "<td>" + email + "</td></tr>";
  table += "<tr align='center'><td>DOB(yyyy/mm/dd)</td>";
	table += "<td>" + dob + "</td></tr>";
  table += "<tr align='center'><td>Gender</td>";
	table += "<td>" + gender + "</td></tr>";
	table += "</table>";
	document.getElementById('mydivtable').innerHTML=table;
  }
  });


  $('#Save').click(function(){
    $('.right').hide();
    $('#table').hide();
    $('h2').hide();
    $('#alertsave').show();
  });

  $('#Cancel').click(function(){
	  $('.right').hide();
  });

  $('#popout').click(function(){
	  $('.right').hide();
  });

  $('#tabcross').click(function(){
    $('#alertsave').hide();
    $('#table').show();
    $('h2').show();
  });
});
