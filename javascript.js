// document.getElementById("count").innerText=5;
// let totalCount=25
// let  number=25
// console.log(number);
// let count=0;
// function increment()
// {
//         count++;
//         document.getElementById("count").innerText=count;

// }
// function reset()
// {
        
//         document.getElementById("count").innerText=0;
        
// }
// function save()
// {
//         let val="";

//         val=val + count;

//         Document.getElementById("display").innerText=val;
// }

let counter=0;

let countEl=document.getElementById("count");

let saveEl=document.getElementById("display");

function increment()
{
        counter+=1;

        document.getElementById("count").innerText=counter;
}
function decrement()
{
        counter-=1;
        document.getElementById("count").innerText=counter;

}
function saves()
{
        let finalcount
        finalcount=counter + " - ";
        saveEl.textContent+=finalcount;
        countEl.innerText=0;
        counter=0;
          
}
function reset()
{
       countEl.innerText=0;
        counter=0;
}
