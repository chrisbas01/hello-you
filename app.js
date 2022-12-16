function greetUser(){
    let name = prompt("What shall I call you?");
    if(name == ""){ 
    name = prompt("What's a matter you don't remember your name");
    }
    document.write(name +  ", did you know?  ");
    
    return name;
}
let userName =  greetUser();
   
    function userAge(){
        let age = prompt("How old are you?");
        if(age < 30){
        
          document.write("..Get out of the house once in awhile... ");
        } else if(age >= 30) {
          window.location.href = "https://jaseadamsdev.github.io/hello-travel";
          
        }
        else { alert("Please tell me with numbers"); userAge();}
        return userAge
      }
      userAge(); 


      function Stars(){
      let output = '';
      let happy = prompt("Pick a number! (Between 1 & 5 please)");
       for(let i = 0; i < happy; i++){
    output += "<img class='happy'src='stars.jpg'width='80' height='80' />";
}
  return document.write(output);
}

