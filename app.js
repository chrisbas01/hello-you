function greetUser(){
    let name = prompt("What shall I call you?");
    if(name == ""){ 
     name = prompt("What's a matter you don't remember your name");
    }
        document.write(name   + ", did you know? ");
}
greetUser();
    // function Second(){
    //     document.write(name + ", what did you learn?")
    //     greetUser()
    //     second()
