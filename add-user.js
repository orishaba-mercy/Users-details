// console.log('hello');
document.getElementById('add-user').addEventListener('submit',async function(event){
    event.preventDefault();
    // let forData =new FormData(this);
    // console.log({FormData});
    let firstName=document.getElementById('first-name').value;
    let lastName=document.getElementById('last-name').value;
    let age=document.getElementById('age').value;

    let data={
        firstName:firstName,
        lastName:lastName,
        age:age,
    }
    console.log({data});
let result= await fetch('https://dummyjson.com/users/add',{
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify(data)
    

})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)


console.log({result});
let success=document.getElementById('success');
result.id? success.innerHTML='user added successfully':success.innerHTMLHTML='user not added';

})





// document.getElementById("addUser").addEventListener("submit",async function(event){
//     event.preventDefault();
//     // let formData = new FormData(this)
//     // console.log({formData});
//     let firstName = document.getElementById("first-name").value;
//     let lastName = document.getElementById("last-name").value;
//     let age = document.getElementById("age").value;
//     let data = {
//         firstName:firstName,
//         lastName:lastName,
//         age:age
//     }
//     console.log({data});
//     let result = await fetch('https://dummyjson.com/users/add',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response=>response.json())
//     .then(response=>response)
//     .catch(error=>error.message)
//     console.log({result})
//     let success = document.getElementById("success")
//     result.id? success.innerHTML = "User added Successfully": success.innerHTML = "User not added";
// })