let imageInput = document.getElementById("imageInput");
let previewImage = document.getElementById("previewImage");
let button = document.getElementById("button");
let Analysed = document.getElementById("Analysed");

let value = false;

imageInput.addEventListener("change",function(){
   let image = imageInput.files[0];
   if(image){
       previewImage.src = URL.createObjectURL(image);
       value = true;
   }
})

button.addEventListener("click",function(){
   if(!imageInput.files.length){
       alert("Please upload an image");
       return;
   }
})

button.addEventListener("click",function(){
   if(value){
       Analysed.textContent = "Plastic Waste";
   }
})
