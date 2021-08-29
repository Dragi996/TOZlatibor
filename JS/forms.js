document.getElementById('submitBtn').addEventListener("click", validation);



function validation(event) {
  event.preventDefault();
  var inputNameNode = document.getElementById('inputName');
  var inputSurnameNode = document.getElementById('inputSurname');
  var inputEmailNode = document.getElementById('inputEmail');
  var commentNode = document.getElementById('comment'); 
  var isCorrectValidationNode = document.getElementById('isCorrectValidation');
  var allCommentsListNode = document.querySelector('.allComments');
  console.log("kliknuto");
  console.log(inputNameNode.value);
  // console.log(inputSurnameNode);
  // console.log(inputEmailNode);
  // console.log(commentNode);
  // console.log(isCorrectValidationNode);


  if (!inputNameNode.value || !inputSurnameNode.value || !inputEmailNode.value
    || !commentNode.value) {
      isCorrectValidationNode.innerText="Sva polja moraju biti popunjena!"
  }else{
    isCorrectValidationNode.innerText="";
    var newLIElement=document.createElement('li');
    newLIElement.innerHTML=`<div class="inlineDiv"><span class="fas fa-user"></span>
  <h5>${inputNameNode.value} ${inputSurnameNode.value}</h5></div>
  <p>${commentNode.value}</p>`
    allCommentsListNode.appendChild(newLIElement);
  }
  inputNameNode.value="";
  inputSurnameNode.value="";
  inputEmailNode.value="";
  commentNode.value="";
}