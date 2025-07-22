function PasswordGenerate(){
   const passwordBox = document.querySelector("#password")
   const length = 15;
   const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const Lowercase ="abcdefghijklmnopqrstuvwxyz";
   const special ="!@#$%^&*_+-~`<>?";
   const number ="0123456789";
   const allChar = UpperCase+Lowercase+special+number;

   
    let password ="";
password +=UpperCase[Math.floor(Math.random()*UpperCase.length)]
password +=Lowercase[Math.floor(Math.random()*Lowercase.length)]
password +=special[Math.floor(Math.random()*special.length)]
password +=number[Math.floor(Math.random()*number.length)]
 while(password.length<length){
   password+= allChar[Math.floor(Math.random()*allChar.length)];
 }
  password = [...password].sort(() => 0.5 - Math.random()).join("");
 passwordBox.value =password ;
}


function copyPassword  (){
     const passwordBox = document.getElementById("password");
    const copyIcon =document.querySelector(".copy-icon")
      if (!passwordBox.value) {
          alert("Please generate a password first!");
          return;
        }
             if (navigator.clipboard) {
          navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
              copyIcon.textContent = "✓";
              setTimeout(() => copyIcon.textContent = "📋", 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
              fallbackCopy(passwordBox);
            });
        } else {
          // Fallback for older browsers
          fallbackCopy(passwordBox);
        }
      }
    



