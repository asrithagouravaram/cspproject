function valid()
{
 if(document.RegisterasDonor.Name.value == "  ")
  {
   alert("Please enter your Name!");
  document.RegisterasDonor.Name.focus();
  return false;
 }
if(document.RegisterasDonor.FatherName.value == " ")
  {
    alert("Please enter your Father Name!");
  document.RegisterasDonor.FatherName.focus();
  return false;
 }
if(document.RegisterasDonor.MobileNo.value == " ")
  {
   
  alert("Please enter your phone no");
  document.RegisterasDonor.MobileNo.focus();
  return false;
 }
else if(isNaN(document.RegisterasDonor.MobileNo.value))
{
 alert("Please provide a Mobile No in the format 123.");
 document.RegisterasDonor.MobileNo.focus();
 return false;
}
else if(document.RegisterasDonor.MobileNo.value.length!=10)
{
 alert("Not a valid Phone Number");
 document.RegisterasDonor.MobileNo.focus();
 return false;
}
var email =document.RegisterasDonor.Email-Id.value;
  atpos=email.indexOf("@");
  dotpos=email.lastIndexOf(".");
  if(email==" " || atpos<1 || (dotpos-atpos<2))
  {
   alert("Please enter correct email ID");
   document.RegisterasDonor.email.focus();
   return false;
}

document.write("Your Registration form is submitted successfuly...");
 return(true);
}



