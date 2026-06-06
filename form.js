const firstNameError = document.querySelector('#firstname')
const surNameError = document.querySelector('#surname')
const phoneNumberError = document.querySelector('#phonenumber')
const emailAddressError = document.querySelector('#email')
const currentAddressError = document.querySelector('#currentaddress')
const textareaError = document.querySelector('#textarea1')
const firstNameValue = document.querySelector('#firstnametext')
const surnameValue = document.querySelector('#surnametext')
const phoneNumberValue = document.querySelector('#phonenumbertext')
const emailValue = document.querySelector('#emailtext')




firstNameValue.addEventListener('keyup', ()=>{
  firstNameValidation()
})

surnameValue.addEventListener('keyup', ()=>{
  console.log('here')
  surNameValidation()

})

phoneNumberValue.addEventListener('keyup', ()=>{
  console.log('here')
  phoneNumberValidation()
})

emailValue.addEventListener('keyup', ()=>{
  console.log('here')
  emailAddressValidation()
})

currentAddressError.addEventListener('keyup', ()=>{
  console.log('here')
})
textareaError.addEventListener('keyup', ()=>{
  console.log('here')
})

function firstNameValidation(){
const firstNameValue = document.querySelector('#firstnametext').value
if(firstNameValue.length === 0){
  firstNameError.innerHTML = 'Write your FirstName'
  return false
}
if(!firstNameValue.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)){
  firstNameError.innerHTML = 'first Name Only'
  return false
}
if(firstNameValue.length < 4){
  firstNameError.innerHTML = 'First Name must be at least 4 characters.'
  return
}
firstNameError.innerHTML = `
<div class="check">
<img src="image/checkmark.png">
</div>
`
}

function surNameValidation() {
const surnameValue = document.querySelector('#surnametext').value
if(surnameValue.length === 0){
  surNameError.innerHTML = 'Write your SurName'
  return false
}

if(!surnameValue.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)){
  surNameError.innerHTML = 'surName Only'
  return false
}
if(surnameValue.length < 4){
  surNameError.innerHTML = 'surName must be at least 4 characters.'
  return
}
surNameError.innerHTML = `
<div class="check">
<img src="image/checkmark.png">
</div>
`
}

function phoneNumberValidation(){
const phoneNumberValue = document.querySelector('#phonenumbertext').value
if(phoneNumberValue.length === 0){
  phoneNumberError.innerHTML = 'Phone Number is Required'
  return 
}

if(phoneNumberValue.length !== 11){
  phoneNumberError.innerHTML = 'Phone Number should be 11 digit'
  return 
}

if(!phoneNumberValue.match(/^[0-9]{11}$/)){
  phoneNumberError.innerHTML = 'invalid phone Number'
return 
}

phoneNumberError.innerHTML = `
<div class="check">
<img src="image/checkmark.png">
</div>
`
return
}

function emailAddressValidation(){
  const emailValue = document.querySelector('#emailtext').value
  if(emailValue.length === 0){
  emailAddressError.innerHTML = 'Email Address is required'
  return
  }

  

}
