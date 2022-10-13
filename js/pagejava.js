function formcheck() {
	var name1 = document.forms["registerForm"]["name1"].value
	var name2 = document.forms["registerForm"]["name2"].value
	var phone = document.forms["registerForm"]["phone"].value
	var email = document.forms["registerForm"]["email].value
	if((!name1) || (!name2) || (!phone) || (!email)) {
		alert("Please complete all the necessary fields");
		return false;
	}
	else {
		alert("You have successfully registered for our newsletter")
	}
}
	