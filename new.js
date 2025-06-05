function name(n1,n2,n3){
    console.log("hello,"+n1);
    n2();
    n3();
}
function name2(){
    console.log("nice to meet");
}
function name3(){
    console.log("bye");
}
name("rahul",name2,name3);

