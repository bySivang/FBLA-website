// JavaScript File


//Swap tables using inner HTML for menus
var pmenu = "overview";
    function menuswap(nmenu) {
      
        var menu = document.getElementById("menu_" + pmenu);
       /* var tabbed = document.getElementById("nav_" + nmenu);
         alert("hello01");

        tabbed.style.textDecoration="underline";
         alert("hello12");*/

        menu.style.display = "none";
      //  tabbed = document.getElementById("nav_" + pmenu);
       
        menu = document.getElementById("menu_" + nmenu);
       

        menu.style.display = "block";
       // tabbed.style.textDecoration="none";
        pmenu = nmenu;
        //have all tables invisible except the one being viewed
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
    

//Create a dropdownmenu for mobile view and remove the normal menu if in mobile view
    function drop() {
        var height = document.getElementById("menudropdown");
        if (height.style.height != "250px") {
        height.style.height = "250px";}
        else {
        height.style.height = "0px";}
        }



//POPUP BOXES
        //Create a popup box that shows your reservation has gone through (Change display:none)
        //Displayed on index.html
        
            function popup(){
                var frm = document.getElementById("frm");
                var hour = frm.Hours.value; //Get submitted values from form
                var date = frm.datepicker.value; //Get submitted values from form
                var people = frm.numberofpeople.value; //Get submitted values from form
                if (hour != "Hours" && date != "Date" && people != "People") { //Checks if all criteria are filled out
                document.getElementById("reservationpopup").style.display = "block";}
                else {
                    alert("Your input was invalid. Did you fill out all the criteria?");} //Outputs alert if all criteria isn't filled out
            }
        
            function popupmid(){
                                
                var frm = document.getElementById("frm");
                var hour = frm.Hours.value; //Get submitted values from form
			
                var date = frm.datepicker.value; //Get submitted values from form
				
                var people = frm.numberofpeople.value; //Get submitted values from form
				
                var firstname = document.getElementById("firstnameres").value;
			
                var lastname = document.getElementById("lastnameres").value;
			
                var phone = document.getElementById("phoneres").value;
             
                if (firstname != "" && lastname != ""){
                    if (phone.length == 10){
                        document.getElementById('reservationpopup').style.display = "none";
                        if (people > 1 || people == "10+") {
                        document.getElementById("reservationpopup1").style.display = "block";
                        var resvar = document.getElementById("resvar");
                        resvar.innerHTML = firstname + " " +lastname + ", at " + hour + " on " + date + " for " + people + " people.";} //Outputs the reservation popup for multiple people
                    else {
                        document.getElementById("reservationpopup1").style.display = "block";
                        var resvar = document.getElementById("resvar");
                        resvar.innerHTML = firstname + " " + lastname + ", at " + hour + " on " + date + " for " + people + " person.";} //Outputs the reservation popup for one person
                }
                else{
                    alert("Enter a correct phone number");
                    return false;
                }
                }
                else {
                    alert("Enter in a name for contact purposes");
                    return false;
                }
                
            }


        //Create a popup box that shows your review has gone through
            function reviewsubmit() {
	          var rform = document.getElementById("reviewform");
				var radiochecked = 0; //Count number of checked boxes
				if(rform.quality.value >0){
					radiochecked++
				}
				if(rform.atmo.value > 0 ){
					radiochecked++;
				}
				if(rform.staff.value >0){
					radiochecked++;
				}
				if(rform.speed.value > 0){
					radiochecked++;
				}	
					
	
                if (radiochecked == 4) { //Checks if everything is filled and all buttons are checked
				 alert("Thank you for Submitting the Form.We Appreciate The Feedback");
                   /*document.getElementById("reviewpopup").style.display = "block";*/
				}
                else {
					
                    alert("Please fill out all the criteria. You're missing something.");
					}
                }
				
				
				
				function getRadioCheckedValue(radio_name)
{
   var oRadio = document.form[1].elements[radio_name];
 
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
 
   return '';
}
			

        //Create a popup box that shows your contact information has gone through
            function contactsubmit() {
                var frm = document.getElementById("frm");
                var name = frm.Name.value; //Get submitted values from form
                var Phone = frm.Phone.value; //Get submitted values from form
                var email = frm.Email.value; //Get submitted values from form
                
                if (name != "" && Phone != "" && email != ""){ //Check if everything is filled out
                    document.getElementById("contactpopup").style.display = "block";
                    var resvar = document.getElementById("resvar");
                    resvar.innerHTML = "Thank You, " + name + "! We will contact you soon!";}
                else {
                    alert("Your input was invalid. Did you fill out all the criteria?");}
                }



        //Create a popup box for "Forgot password" in MyBreadibility
            function passwordpopup() {
                document.getElementById("passwordpopup").style.display = "block";}
             
             
                
        //Create a  popup up box that shows your email address was valid to recover your password      
            function sendemail() {
                var input = document.getElementById("emailinput");

                if (input.value.indexOf('@') == -1 || input.value.indexOf('.') == -1) { //Check if email DOES NOT have @ and . symbols in it
                alert("Error. Enter a valid email address.");}
                else {
                alert("Thank you! Please check your email address for the new password.");
                document.getElementById("passwordpopup").style.display = "none";}
            }


        //Create a popup box for "Sign up" in MyBreadibility
            function signuppopup() {
                document.getElementById("signuppopup").style.display = "block";}
            
            
            
        //Creates a pop up box that shows your sign up was valid        
            function signupsubmit() {
                var name = document.getElementById("name").value;
                var username = document.getElementById("username2").value;
                var lastname = document.getElementById("lastname").value;
                var email1 = document.getElementById("emailinput1").value;
                var email2 = document.getElementById("emailinput2").value;
                var pass1 = document.getElementById("password1").value;
                var pass2 = document.getElementById("password2").value;
                var completed = 0; //Count number for completed things in signup


                //Large if statement that does not all you to move on until previous sections of form are completed, checks in order
                if (name != "") { //Check if name input is filled in
                    completed++;
                    if (lastname != "") { //Check if lastname input is filled in
                    completed++;
                        if (email1.indexOf('@') == -1 || email1.indexOf('.') == -1) { //Check if email input has a @ and . in it
                            alert("Error. Enter a valid email address.");}
                        else {
                        completed++;
                            if (email1.indexOf('@') == -1 || email1.indexOf('.') == -1) { //Check if email input has a @ and . in it
                                alert("Error. Enter a valid email address.");}
                            else {
                                completed++;
                                if (email2 == email1) { //Check if your confirmed email matches your regular email for consistency
                                    completed++;
                                    if (username != "") { //Check if username is filled in
                                    completed++;
                                        if (pass1 != "") { //Check if password is filled in
                                        completed++;
                                            if (pass2 == pass1) { //Check if your password email matches your regular password for consistency
                                            completed++;}
                                            else {alert("Check your password. Confirm you wrote it correctly both times.")}
                                        }
                                        else {alert("Input a password.");}
                                    }
                                    else {alert("Input a username.");}
                                }
                                else {alert("Check your email address. Confirm you wrote it correctly both times.")}
                            }
                        }
                    }
                    else {alert("Error. Please input your last name.");}
                }
                else {alert("Error. Please input your first name.");}

                if (completed == 8) {
                    alert("Thank you for signing up for My Breadibility!")
                    document.getElementById("signuppopup").style.display = "none";}
                }        
             
             

    //Remove the popup reservation from the screen by changing back to display none
        function endpopup(x) {
            document.getElementById(x).style.display = "none";}
//END POPUP BOXES        
        
        
        
        
//Creates css transitions for FAQ (MyBreadbility) paragraphs        
var prevfaq ;
    function faqclick(faq) {
        var info = document.getElementById(faq);
		
       
        if (info.style.maxHeight != "300px") { //Checks if paragraph tag is open
		   
          /*  if (prevfaq !=  ) { //Checks if another faq tab is open, closes if it is
               alert("here");
			   var prev = document.getElementById(prevfaq);
				alert(prev);
                prev.style.WebkitTransform = "perspective(400) rotate3d(1,0,0,-90deg)";
                prev.style.maxHeight = "0px";
				} */
                
            info.style.WebkitTransform = "perspective(400) rotate3d(0,0,0,0)";
			
            info.style.maxHeight = "300px";
			
            prevfaq = faq;
			
			}
        else { //If paragraph tag is closed (No faq paragraphs are visible)
		
            info.style.WebkitTransform = "perspective(400) rotate3d(1,0,0,-90deg)";
            info.style.maxHeight = "0px";
            prevfaq = "";
			}
    }
        
        
        
        
        
//Checks if login input is correct for My Breadibility and stores values to use in other html files
    function login() {
        var username = document.getElementById("username");
        var password = document.getElementById("password");

        if (username.value != "" && password.value != "") { //Checks if username and password are filled out
            sessionStorage.clear(); //Removes previous username/passwords from storage
            sessionStorage.user = username.value; //Saves new username to storage
            sessionStorage.points = sessionStorage.user.length * 100; //Saves point value to storage
        
            var names = ["Oren Olsen","Francesca Fermin","Vella Villavicencio","Kandice Klenk","Curt Crandle","Clayton Cornman","John Cena"];
            var email = ["Oren.Olsen@gmail.com","Francesca.Fermin@verizon.net","Vella.Villavicencio@aol.com","Kandice.Klenk@yahoo.com","Curt.Crandle@msn.com","Clayton.Cornman@gmail.com","youcantseeme@comcast.com"];
            var number = Math.floor((Math.random() * 6));
        
            sessionStorage.accountname = names[number]; //Picks a random name and assigns it
            sessionStorage.email = email[number]; //Picks an email according to name and assigns it
            sessionStorage.number= number; //Picks a random number of days for last date visited and assigns it
            return true;} //Sends the html file to welcome screen
        else {
            alert("Please input a correct username and/or password.")
            return false;} //Stops html from going to welcome screen
    }




//Fills out a personal MyBreadibility welcome page from Stored values after login
    function usersname() {
        var name = sessionStorage.user;
        var number = Math.floor((Math.random() * 10000));
        
        document.getElementById('Breadibility-h1').innerHTML = "Welcome back " + name + "!";
        document.getElementById("points").innerHTML = "You Have a total of " + sessionStorage.points + " Points!";
        document.getElementById("accountname").innerHTML = sessionStorage.accountname;
        document.getElementById("accountemail").innerHTML = sessionStorage.email;
        document.getElementById("purchasedate").innerHTML = (Number(sessionStorage.number) +2) + " days ago"
        document.getElementById("random").innerHTML = number;
    }



//Checks if you have enough points to redeem an item
    function redeem(item , cost){
        if(cost <= sessionStorage.points){ //If enough points, subtract cost and display a popup that shows you have redeemed the item
            sessionStorage.points = sessionStorage.points - cost;
            document.getElementById("redeempopup").style.display = "block";
            var itemred = document.getElementById("itemred");
            itemred.innerHTML = item; //Name of item you bought
            document.getElementById("points").innerHTML = "You Have a total of " + sessionStorage.points + " Points!";}
        else{
        alert("You do not have enough points for this purchase");}
    }


//Shows how many points you have on the "Reedem Offers" page
    function redeempoints() {
    document.getElementById("points").innerHTML = "You Have a total of " + sessionStorage.points + " Points!";
    }



