function greetUser(){
    let name = prompt("What shall I call you?");
    if(name == ""){ 
    name = prompt("What's a matter you don't remember your name");
    }
        document.write(name +  ", did you know? ");
}
greetUser();
   
    function userAge(){
        let age = prompt("How old are you?");
        if(age < 30){
          document.write("Get out of the house once in awhile");
        } else {
          window.location.href = "http://www.google.com";
          
        }
      }
      userAge(); 
