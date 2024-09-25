
const balance = document.getElementById("balance")
const historyButton = document.getElementById("historyBtn")
const donationButton = document.getElementById("DonationBtn")

const donateBtn = document.getElementById("donate-button")
const donateBtn2 = document.getElementById("donate-button-2")
const donateBtn3 = document.getElementById("donate-button-3")


const title = document.getElementById("title")
const title2 = document.getElementById("title-2")
const title3 = document.getElementById("title-3")

const historySection = document.getElementById("history-section")
const cardSection = document.getElementById("card-section")

const dateTime = new Date().toLocaleString()

donationButton.addEventListener("click",function(){
   
    cardSection.classList.remove("hidden")
    historySection.classList.add("hidden")
    // donationButton.classList.remove("bg-pColor")
    historyButton.classList.remove("bg-pColor")
    donationButton.classList.add("bg-pColor")
})
historyButton.addEventListener("click",function(){

    historySection.classList.remove("hidden")
    cardSection.classList.add("hidden")
   historyButton.classList.add("bg-pColor")
   donationButton.classList.remove("bg-pColor")
   
   })





// Donation btn 01 /

donateBtn.addEventListener("click", function(){
    const donateInput = Number(document.getElementById("donate-input").value)
    const donateBox = Number(document.getElementById("donate-box").innerText)
    if (donateInput <= 0){
        alert ("enter positive number") 
        return;
    }
    if(isNaN(donateInput)){
        alert ("enter a valid number")
        return;
    }

    const updateBalance = balance.innerText - donateInput
    
    if(updateBalance<0){
        alert("Insufficient Balance")
        return;
    }
        document.getElementById("donate-box").innerHTML = donateBox + donateInput
     balance.innerText = updateBalance
     const historyContent = document.getElementById("history-section");
     
     historyContent.innerHTML += `
     
     <div class="w-full border rounded-x1">
     <div class="card-body">
     <h2 class="text-lg">
     <span>${donateInput}</span>Tk Donated For
     
     <span>${title.innerText}</span>
     
     </h2>
     
     <p class="p-4 bg-slate-100 rounded-xl">Date <span>${dateTime}
     
     </span></p>
     </div>
     </div>
     `
    
    my_modal_5.showModal()
    document.getElementById("donate-input").value=""

})


// Donation btn 02

donateBtn2.addEventListener("click", function(){
    const donateInput2 = Number(document.getElementById("donate-input-2").value)
    const donateBox2 = Number(document.getElementById("donate-box-2").innerText)
    if (donateInput2 <= 0){
        alert ("enter positive number") 
        return;
    }
    if(isNaN(donateInput2)){
        alert ("enter a valid number")
        return;
    }

    const updateBalance = balance.innerText - donateInput2
    
    if(updateBalance<0){
        alert("Insufficient Balance")
        return;
    }
        document.getElementById("donate-box-2").innerHTML = donateBox2 + donateInput2
     balance.innerText = updateBalance
     const historyContent = document.getElementById("history-section");
     
     historyContent.innerHTML += `
     
     <div class="w-full border rounded-x1">
     <div class="card-body">
     <h2 class="text-lg">
     <span>${donateInput2}</span>Tk Donated For
     
     <span>${title2.innerText}</span>
     
     </h2>
     
     <p class="p-4 bg-slate-100 rounded-xl">Date <span>${dateTime}
     
     </span></p>
     </div>
     </div>
     `
    
    my_modal_5.showModal()
    document.getElementById("donate-input-2").value=""

})


// Donation btn 03

donateBtn3.addEventListener("click", function(){
    const donateInput3 = Number(document.getElementById("donate-input-3").value)
    const donateBox3 = Number(document.getElementById("donate-box-3").innerText)
    if (donateInput3 <= 0){
        alert ("enter positive number") 
        return;
    }
    if(isNaN(donateInput3)){
        alert ("enter a valid number")
        return;
    }

    const updateBalance = balance.innerText - donateInput3
    
    if(updateBalance<0){
        alert("Insufficient Balance")
        return;
    }
        document.getElementById("donate-box-3").innerHTML = donateBox3 + donateInput3
     balance.innerText = updateBalance
    
     const historyContent = document.getElementById("history-section");
     
     historyContent.innerHTML += `
     
     <div class="w-full border rounded-x1">
     <div class="card-body">
     <h2 class="text-lg">
     <span>${donateInput3}</span>Tk Donated For
     
     <span>${title3.innerText}</span>
     
     </h2>
     
     <p class="p-4 bg-slate-100 rounded-xl">Date <span>${dateTime}
     
     </span></p>
     </div>
     </div>
     `
    my_modal_5.showModal()
    document.getElementById("donate-input-3").value=""

})





