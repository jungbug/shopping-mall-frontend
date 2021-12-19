// jQuery(document).ready(function($){
//     "user strict"

//     const mainSlider = $(".main_slider")
//     const hamburger = $(".hamburger_container")
//     const menu = $(".hamburger_menu")
//     const menuActive = false;
//     const hamburgerClose = $(".hamburger_close")
//     const fsOverlay = $(".fs_menu_overlay")

//     initFavorite()

//     function initFavorite(){
//         if($(".favorite").length){
//             let favs = $(".favorite");

//             favs.each(function(){
//                 let fav = $(this)
//                 let active = false
//                 if(fav.hasClass("active")){
//                     active = true
//                 }
//                 fav.on("click", function(){
//                     if(active){
//                         fav.removeClass("active")
//                         active = false
//                     }else{
//                         fav.addClass("active")
//                         active = true
//                     }
//                 })
//             })
//         }
//     }
// })

const favs = document.querySelectorAll(".favorite")
const userIcon = document.querySelector("#user_icon")
const loginContainer = document.querySelector(".login_container")
const loginContainerCloseIcon = document.querySelector(".login_container_close_icon")

const init = () => {
    for(let i = 0; i<favs.length; i++){
        favs[i].addEventListener("click", () => {
            let flag = true
            if(favs[i].classList.contains("active")){
                flag = false
            }
            if(flag){
                favs[i].classList.add("active")
            }else{
                favs[i].classList.remove("active")
            }
        })
    }
}
function initIsotopeFiltering(){
    if($(".grid_sorting_button").length){
        $(".grid_sorting_button").click(function(){
            $(".grid_sorting_button.active").removeClass("active")
            $(this).addClass("active")
            
            const selector = $(this).attr("data-filter")
            $(".product-grid").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            })
            return false
        })
    }
}
userIcon.addEventListener("click", () => {  
    loginContainer.classList.remove("display")
})

loginContainerCloseIcon.addEventListener("click", () => {
    loginContainer.classList.add("display")
})

init()
initIsotopeFiltering()