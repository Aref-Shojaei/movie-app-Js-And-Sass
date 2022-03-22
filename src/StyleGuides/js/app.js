const log = console.log;

log("app is running...");

// ** Btn components
const btns = document.querySelectorAll(".btn");

btns.forEach(button=>{
    button.addEventListener("mouseover",()=>{
        button.classList.add("btn-hover")
    })
    button.addEventListener("click",()=>{
        button.classList.add("btn-active")
    })
})


// ** card component

const newCard = `
<div class="card">
    <div class="card-img">
        <span class="rating-button">
            <i class='star-icon'></i>
            8
         </span>
        <img src="../assets/images/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.jpg" alt="">
    </div>
    <div class="content">
        <a href="#" class="card-title">Black Widow</a>
        <div class="action">
            <i class="purple-like-icon"></i>
            <a href="#">Suggest this</a>
        </div>
    </div>
</div>`
;

const cards = document.querySelectorAll(".card");

cards.forEach(item=>{
setTimeout(()=>{
    item.innerHTML = newCard; 
},2000)
})


// ** popup components

const closeBtn_added_suggestion = document.querySelector(".added-suggestion-popup .close-btn");
const closeBtn_suggestion = document.querySelector('.suggestion-popup .close-btn');

closeBtn_added_suggestion.addEventListener('click', () => {
    closeBtn_added_suggestion.parentElement.remove()
})
closeBtn_suggestion.addEventListener('click', () => {
    closeBtn_suggestion.parentElement.remove()
})