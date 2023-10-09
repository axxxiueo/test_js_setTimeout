
// setTimeout(function(){
//     console.log("test2");
//     setTimeout(function(){
//         console.log("test3")
//     }, 1000);
// }, 1000);
// console.log("test");


// function test(){
//     console.log("test");
// }

// setTimeout(test, 1000);
// setTimeout(test, 2000);
// console.log("test1");

document.getElementById("test").addEventListener("click",function(){
    setTimeout(function(){
        document.getElementById("contents").style.display = "block";
    }, 1000);
});