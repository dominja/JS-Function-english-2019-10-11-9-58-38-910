function reverseString(message){
    return message.split("").reverse().join("");
}

function palindrome(message){
   if(message==reverseString(message)) {
       console.log(true);
   }else {
       console.log(false);
   }
}
palindrome('hello');
palindrome('abcba');