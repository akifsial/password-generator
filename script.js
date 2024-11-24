const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const symbol="`~!@#$%^&*()_+-=][\;/.,{}|?><"

let random_btn=document.getElementById("random-btn")
let random_inp=document.getElementById('random-inp')
let copy_btn=document.getElementById('copy-btn')
let _length=12
let all_char=upperCase+lowerCase+number+symbol

random_btn.addEventListener('click',numberGenerator)

function numberGenerator(){
    password=''
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]

    while (_length > password.length){
        password+=all_char[Math.floor(Math.random() * all_char.length)]
    }
    
    random_inp.value=password
}

function copyText(){
    random_inp.select()
    document.execCommand("copy")
}