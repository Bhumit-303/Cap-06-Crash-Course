//    catching the element 

let bodyy= document.getElementById("tbody");
let department= document.getElementById("depart")
let gen = document.getElementById("Gender")
let salary=document.getElementById("salary")




//  this is a function who call multiple function by passing data 

function call (data){

   department.addEventListener("change", ()=>{
       post(data)
   })
gen.addEventListener("change", ()=>{
   gender(data)
})
      salary.addEventListener("change", ()=>{
       payment(data)
      })
}


//  showing data function   
function showdata(data){

bodyy.innerHTML=""
    let narr=data.forEach((ele,i)=>{

       let tr=document.createElement("tr")

       let td1=document.createElement("td")
   td1.innerHTML=ele.id;
       let td2=document.createElement("td")
   td2.innerHTML=ele.name ;
       let td3=document.createElement("td")
   td3.innerHTML=ele.gender ;
       let td4=document.createElement("td")
   td4.innerHTML=ele.department ;
       let td5=document.createElement("td")
       td5.innerHTML=ele.salary ;
      

tr.append(td1,td2,td3,td4,td5)

bodyy.append(tr)
   })
 
}

//  function for filtering by departments
function post (data){

   let dvalue1= department.value;

   let data1= data.filter((ele)=>{
       return   dvalue1 ==  ele.department;
   })
   showdata(data1);
}

//  function for filter by gender 
function gender (data){
   let dvalue2=gen.value;

   let data2= data.filter((ele)=>{
       return   dvalue2 ==  ele.gender;
   })
   showdata(data2);

}

//  function for sorting by salary
function payment (data){
   let dvalue3=salary.value;
//  console.log(dvalue3)
   let data3= data.sort((a,b)=>{
if(dvalue3=="asc"){
   return a.salary-b.salary;
}else{
   return b.salary-a.salary;
}

   }) 
   showdata(data3);
}

//  function for page next 
var count=1;
function next(){
  
count++;
if(count==11){
   count=1;
}

employee(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${count}&limit=10`)


}

//  function for previous page
function prev(){
   count--;
   if(count==0){
        count=10;
   }
 
   
   employee(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${count}&limit=10`)
}


//  fetching data function 
async function  employee(URL){
   try {
       let res= await fetch(URL)
       let resp= await res.json();
   //  console.log(resp)
let responsed= resp.data;
    showdata(responsed)
    call(responsed)
   
   
   } catch (error) {
       console.log(error)
   
   }
      
   }


   //  calling the fetching data function

   employee(` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${1}&limit=10`)