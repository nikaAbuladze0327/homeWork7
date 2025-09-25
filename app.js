//ajax homeworks
//N1
let divWraper = document.getElementById("divWrap");
let list = document.getElementById("list");
//let requestV1 = new XMLHttpRequest();
//requestV1.open(
//  "GET",
//  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
//);

//requestV1.addEventListener("load", function () {
//  let response = this.response;
//  let responseParsed = JSON.parse(response);
//  console.log(responseParsed);

//  responseParsed.meals.forEach((meal) => {
//   let li = document.createElement("li");
//    let pic = document.createElement("img");
//    li.innerText = responseParsed.meals[2].strMeal;
//    pic.innerText = responseParsed.meals[2].strMealThumb;
//    pic.setAttribute("src", "pic");
//    pic.style.width = "100px";
//    list.appendChild(li);
//    list.appendChild(pic);
// });
//});

//requestV1.addEventListener("error", function () {
//  let errorText = document.createElement("p");
//  errorText.innerText = "ERROR!!!";
//  divWraper.appendChild(errorText);
//});

//requestV1.send();
//N2

//fetch("http//:jsonplaceholder.typicode.com/users", {
//  method: "GET",
//})
//  .then(function (responseNew) {
//    if (!responseNew.ok) {
//      throw new error();
//    }
//    return responseNew.json();
//  })
//  .then(function (companys) {
//    companys.forEach((comp) => {
//     let li = document.createElement("li");
//      li.textContent = comp.company.name;
//      list.appendChild(li);
//    });
//  })
//  .catch(function (error) {
//    console.log(error);
//
//    let errorp = document.createElement("p");
//    errorp.textContent = "Theres an Error About Server";
//    list.appendChild(errorp);
//  });
