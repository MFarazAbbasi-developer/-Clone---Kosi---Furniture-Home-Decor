window.addEventListener("scroll", function(){
    var navbar = document.getElementById("navbar");
    var scroll = window.scrollY;

    if (scroll >=100) {
        navbar.classList.add("scrolled");
        }
    else if (scroll==0) {
        navbar.classList.remove("scrolled");
            
    }
});

window.addEventListener("scroll", function(){
    var scrollTop = document.getElementById("rounded-circle");
    var scrollPosition = window.scrollY;

    if (scrollPosition >=200) {
        scrollTop.style.visibility = "visible";
        }
    else if (scrollPosition < 100) {
        scrollTop.style.visibility = "hidden";
    }
});



var scrollTop = document.getElementById("rounded-circle");

scrollTop.addEventListener("click", function() {
    globalThis.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


var slider_btn = document.getElementsByClassName("navigating-btn");
var slider_img = document.getElementsByClassName("sliding-img");

for (let i = 0; i < slider_btn.length; i++) {
    slider_btn[i].addEventListener("click", function(){
        if (i==0) {
            slider_btn[i].classList.add("first");
            slider_btn[1].classList.remove("first");
            slider_btn[2].classList.remove("first");
            
            slider_img[i].classList.remove("hidden");
            slider_img[1].classList.add("hidden");
            slider_img[2].classList.add("hidden");

            slider_img[i].classList.add("animate");
            slider_img[1].classList.remove("animate");
            slider_img[2].classList.remove("animate");
        }
        else if (i==1) {
            slider_btn[i].classList.add("first");
            slider_btn[0].classList.remove("first");
            slider_btn[2].classList.remove("first");

            slider_img[i].classList.remove("hidden");
            slider_img[0].classList.add("hidden");
            slider_img[2].classList.add("hidden");

            slider_img[i].classList.add("animate");
            slider_img[0].classList.remove("animate");
            slider_img[2].classList.remove("animate");
        }
        else if(i==2){
            slider_btn[i].classList.add("first");
            slider_btn[0].classList.remove("first");
            slider_btn[1].classList.remove("first");

            slider_img[i].classList.remove("hidden");
            slider_img[0].classList.add("hidden");
            slider_img[1].classList.add("hidden");

            slider_img[i].classList.add("animate");
            slider_img[0].classList.remove("animate");
            slider_img[1].classList.remove("animate");
        }

    });
}





// Search Sidebar

var searchbar = document.getElementById("searchbar-icon");
searchbar.addEventListener("click", searchbar_occur);
var searchbar_bottom = document.getElementById("searchbar-bottom-nav");
searchbar_bottom.addEventListener("click", searchbar_occur);
// Function to show searchbar
function searchbar_occur(){
    document.getElementById("searchbar").style.visibility = "visible";
    document.getElementById("searchbar").style.transform = "translateY(0)";
    document.getElementById("overlay").style.visibility = "visible";
}
// Searchbar hide button
var searchbar_crossbtn = document.getElementById("searchbar-cross-btn");
searchbar_crossbtn.addEventListener("click", function () {
    document.getElementById("searchbar").style.visibility = "hidden";
    document.getElementById("searchbar").style.transform = "translateY(-100%)";
    document.getElementById("overlay").style.visibility = "hidden";
});






// Cart Sidebar
var cartWindow = document.getElementById("cart-icon");
var cart_crossbtn = document.getElementById("cart-cross-btn");
cartWindow.addEventListener("click", function () {
    document.getElementById("cart-window").style.visibility = "visible";
    document.getElementById("cart-window").style.transform = "translateX(0)";
    document.getElementById("overlay").style.visibility = "visible";
});
cart_crossbtn.addEventListener("click", function () {
    document.getElementById("cart-window").style.visibility = "hidden";
    document.getElementById("cart-window").style.transform = "translateX(100%)";
    document.getElementById("overlay").style.visibility = "hidden";
});



// Sign In Sidebar
var signInWindow = document.getElementById("sign-in-icon");
var signIn_crossbtn = document.getElementById("sign-in-cross-btn");
signInWindow.addEventListener("click", function () {
    document.getElementById("sign-in-window").style.visibility = "visible";
    document.getElementById("sign-in-window").style.transform = "translateX(0)";
    document.getElementById("overlay").style.visibility = "visible";
});
signIn_crossbtn.addEventListener("click", function () {
    document.getElementById("sign-in-window").style.visibility = "hidden";
    document.getElementById("sign-in-window").style.transform = "translateX(100%)";
    document.getElementById("overlay").style.visibility = "hidden";
});



document.getElementById("overlay").addEventListener("click", function(){
    document.getElementById("overlay").style.visibility = "hidden";

    document.getElementById("searchbar").style.visibility = "hidden";
    document.getElementById("searchbar").style.transform = "translateY(-100%)";

    document.getElementById("cart-window").style.visibility = "hidden";
    document.getElementById("cart-window").style.transform = "translateX(100%)";
    
    document.getElementById("searchbar").style.visibility = "hidden";
    document.getElementById("sign-in-window").style.transform = "translateX(100%)";


    // Menu Sidebar
    document.getElementById("main-sidebar").style.visibility = "hidden";
    document.getElementById("main-sidebar").style.transform = "translateX(-100%)";
    document.getElementById("menu-exit-btn").style.visibility = "hidden";
    document.getElementById("menu-exit-btn").style.transform = "translateX(-100%)";
});









// Blogs Navigation 
let cards = new Array(6);
cards[0] = document.getElementById("card-1");
cards[1] = document.getElementById("card-2");
cards[2] = document.getElementById("card-3");
cards[3] = document.getElementById("card-4");
cards[4] = document.getElementById("card-5");
cards[5] = document.getElementById("card-6");
console.log(window.getComputedStyle(document.getElementById("card-1")).getPropertyValue('min-width'));

var left = document.getElementById("left-blog");
var right = document.getElementById("right-blog");
var num = 0;
right.addEventListener("click", function () {
    
    // For 3 cards on screen
    if (window.getComputedStyle(document.getElementById("card-1")).getPropertyValue('min-width') == "33.3333%") {
        if (num < 300) {
            num+=100;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.transform = "translateX(-" + String(num) + "%)"
                
            }
            
            left.style.cursor = "pointer";
    
            if (num == 300) {
                right.style.opacity = ".4";
                right.style.cursor = "not-allowed";
            }
        }
    }


    // For 2 cards on screen
    else if (window.getComputedStyle(document.getElementById("card-1")).getPropertyValue('min-width') == "50%") {
        if (num < 400) {
            num+=100;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.transform = "translateX(-" + String(num) + "%)"
                
            }
            
            left.style.cursor = "pointer";
    
            if (num == 400) {
                right.style.opacity = ".4";
                right.style.cursor = "not-allowed";
            }
        }
    }

    // For 1 card on screen
    else if (window.getComputedStyle(document.getElementById("card-1")).getPropertyValue('min-width') == "100%") {
        if (num < 500) {
            num+=100;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.transform = "translateX(-" + String(num) + "%)"
                
            }
            
            left.style.cursor = "pointer";
    
            if (num == 500) {
                right.style.opacity = ".4";
                right.style.cursor = "not-allowed";
            }
        }
    }
});

left.addEventListener("click", function () {
    if (num == 500) {
        for (let i = 0; i < 6; i++) {
            cards[i].style.transform = "translateX(-" + String(400) + "%)"
        }
        num-=100;
        right.style.cursor = "pointer";
        
    }
    else if (num == 400) {
        for (let i = 0; i < 6; i++) {
            cards[i].style.transform = "translateX(-" + String(300) + "%)"
        }
        num-=100;
        right.style.cursor = "pointer";
        
    }
    else if (num == 300) {
        for (let i = 0; i < 6; i++) {
            cards[i].style.transform = "translateX(-" + String(200) + "%)"
        }
        num-=100;
        right.style.cursor = "pointer";
        
    }
    else if (num == 200) {
        for (let i = 0; i < 6; i++) {
            cards[i].style.transform = "translateX(-" + String(100) + "%)"
            
        }
        num-=100;
        right.style.cursor = "pointer";
    }
    else if (num == 100) {
        for (let i = 0; i < 6; i++) {
            cards[i].style.transform = "translateX(" + String(0) + "%)"
            
        }
        num-=100;
        right.style.cursor = "pointer";

        left.style.opacity = ".4";
        left.style.cursor = "not-allowed";
    }
    
});




// Main Sidebar



// Slider arrival btn
let menu = document.getElementById("menu");
menu.addEventListener("click", function () {
    document.getElementById("main-sidebar").style.visibility = "visible";
    document.getElementById("menu-exit-btn").style.visibility = "visible";
    document.getElementById("menu-exit-btn").style.transform = "translateX(0%)";

    document.getElementById("overlay").style.visibility = "visible";

    document.getElementById("main-sidebar").style.transform = "translateX(0%)";
});
let menu_exit = document.getElementById("menu-exit-btn");
menu_exit.addEventListener("click", function () {
    document.getElementById("main-sidebar").style.visibility = "hidden";
    document.getElementById("menu-exit-btn").style.visibility = "hidden";
    document.getElementById("menu-exit-btn").style.transform = "translateX(-100%)";

    document.getElementById("overlay").style.visibility = "hidden";

    document.getElementById("main-sidebar").style.transform = "translateX(-100%)";
});










let menu_heading = document.getElementById("main-menu");
let categories_heading = document.getElementById("all-categories");

menu_heading.addEventListener("click", function () {

    // Visibility
    document.getElementById("main-menu-links").style.visibility = "visible";
    document.getElementById("all-categories-links").style.visibility = "hidden";

    document.getElementById("main-menu-links").style.transition = "transition: all .25s ease-in-out";
    document.getElementById("all-categories-links").style.transition = "none";
    
    // Border Bottom
    menu_heading.style.borderBottom = "2px solid #cd8f5c";
    categories_heading.style.borderBottom = "none";
    
    // Font Weight
    menu_heading.style.fontWeight = "600";
    categories_heading.style.fontWeight = "400";


});

categories_heading.addEventListener("click", function () {
    
    // Visibility
    document.getElementById("all-categories-links").style.visibility = "visible";
    document.getElementById("main-menu-links").style.visibility = "hidden";
    


    document.getElementById("all-categories-links").style.transition = "transition: all .25s ease-in-out";
    document.getElementById("main-menu-links").style.transition = "none";
    // Border Bottom
    categories_heading.style.borderBottom = "2px solid #cd8f5c";
    menu_heading.style.borderBottom = "none";

    // Font Weight
    categories_heading.style.fontWeight = "600";
    menu_heading.style.fontWeight = "400";

    
});




// Home Sub-links
let home_links = document.getElementById("home-link");
home_links.addEventListener("click", function () {
    document.getElementById("home-sub-links").style.visibility = "visible";
    document.getElementById("home-sub-links").style.transform = "translateX(0%)";
    
});
let home_back = document.getElementById("home-back");
home_back.addEventListener("click", function () {
    document.getElementById("home-sub-links").style.visibility = "hidden";
    document.getElementById("home-sub-links").style.transform = "translateX(100%)";
});




// Shop Sub-links
let shop_links = document.getElementById("shop-link");
shop_links.addEventListener("click", function () {
    document.getElementById("shop-sub-links").style.visibility = "visible";
    document.getElementById("shop-sub-links").style.transform = "translateX(0%)";
    
});
let shop_back = document.getElementById("shop-back");
shop_back.addEventListener("click", function () {
    document.getElementById("shop-sub-links").style.visibility = "hidden";
    document.getElementById("shop-sub-links").style.transform = "translateX(100%)";
});
// Shop -> Shop Layout Sub-link
let shop_layout_links = document.getElementById("shop-layout-link");
shop_layout_links.addEventListener("click", function () {
    document.getElementById("shop-layout-sub-links").style.visibility = "visible";
    document.getElementById("shop-layout-sub-links").style.transform = "translateX(0%)";
    
});
let shop_layout_back = document.getElementById("shop-layout-back");
shop_layout_back.addEventListener("click", function () {
    document.getElementById("shop-layout-sub-links").style.visibility = "hidden";
    document.getElementById("shop-layout-sub-links").style.transform = "translateX(100%)";
});
// Shop -> Shop Features Sub-link
let shop_features_links = document.getElementById("shop-features-link");
shop_features_links.addEventListener("click", function () {
    document.getElementById("shop-features-sub-links").style.visibility = "visible";
    document.getElementById("shop-features-sub-links").style.transform = "translateX(0%)";
    
});
let shop_features_back = document.getElementById("shop-features-back");
shop_features_back.addEventListener("click", function () {
    document.getElementById("shop-features-sub-links").style.visibility = "hidden";
    document.getElementById("shop-features-sub-links").style.transform = "translateX(100%)";
});






// Product Sub-links
let product_links = document.getElementById("product-link");
product_links.addEventListener("click", function () {
    document.getElementById("product-sub-links").style.visibility = "visible";
    document.getElementById("product-sub-links").style.transform = "translateX(0%)";
    
});
let product_back = document.getElementById("product-back");
product_back.addEventListener("click", function () {
    document.getElementById("product-sub-links").style.visibility = "hidden";
    document.getElementById("product-sub-links").style.transform = "translateX(100%)";
});
// Product -> Product Layout Sub-link
let product_layout_links = document.getElementById("product-layout-link");
product_layout_links.addEventListener("click", function () {
    document.getElementById("product-layout-sub-links").style.visibility = "visible";
    document.getElementById("product-layout-sub-links").style.transform = "translateX(0%)";
    
});
let product_layout_back = document.getElementById("product-layout-back");
product_layout_back.addEventListener("click", function () {
    document.getElementById("product-layout-sub-links").style.visibility = "hidden";
    document.getElementById("product-layout-sub-links").style.transform = "translateX(100%)";
});
// Product -> Product Feature Sub-link
let product_feature_links = document.getElementById("product-feature-link");
product_feature_links.addEventListener("click", function () {
    document.getElementById("product-feature-sub-links").style.visibility = "visible";
    document.getElementById("product-feature-sub-links").style.transform = "translateX(0%)";
    
});
let product_feature_back = document.getElementById("product-feature-back");
product_feature_back.addEventListener("click", function () {
    document.getElementById("product-feature-sub-links").style.visibility = "hidden";
    document.getElementById("product-feature-sub-links").style.transform = "translateX(100%)";
});
// Product -> Product Feature Sub-link
let product_features_links = document.getElementById("product-features-link");
product_features_links.addEventListener("click", function () {
    document.getElementById("product-features-sub-links").style.visibility = "visible";
    document.getElementById("product-features-sub-links").style.transform = "translateX(0%)";
    
});
let product_features_back = document.getElementById("product-features-back");
product_features_back.addEventListener("click", function () {
    document.getElementById("product-features-sub-links").style.visibility = "hidden";
    document.getElementById("product-features-sub-links").style.transform = "translateX(100%)";
});





// Blog Sub-links
let blog_links = document.getElementById("blog-link");
blog_links.addEventListener("click", function () {
    document.getElementById("blog-sub-links").style.visibility = "visible";
    document.getElementById("blog-sub-links").style.transform = "translateX(0%)";
    
});
let blog_back = document.getElementById("blog-back");
blog_back.addEventListener("click", function () {
    document.getElementById("blog-sub-links").style.visibility = "hidden";
    document.getElementById("blog-sub-links").style.transform = "translateX(100%)";
});



// Pages Sub-links
let pages_links = document.getElementById("pages-link");
pages_links.addEventListener("click", function () {
    document.getElementById("pages-sub-links").style.visibility = "visible";
    document.getElementById("pages-sub-links").style.transform = "translateX(0%)";
    
});
let pages_back = document.getElementById("pages-back");
pages_back.addEventListener("click", function () {
    document.getElementById("pages-sub-links").style.visibility = "hidden";
    document.getElementById("pages-sub-links").style.transform = "translateX(100%)";
});
// Pages -> FAQ's Sub-link
let faq_links = document.getElementById("faq-link");
faq_links.addEventListener("click", function () {
    document.getElementById("faq-sub-links").style.visibility = "visible";
    document.getElementById("faq-sub-links").style.transform = "translateX(0%)";
    
});
let faq_back = document.getElementById("faq-back");
faq_back.addEventListener("click", function () {
    document.getElementById("faq-sub-links").style.visibility = "hidden";
    document.getElementById("faq-sub-links").style.transform = "translateX(100%)";
});


// Contact Sub-links
let contact_links = document.getElementById("contact-link");
contact_links.addEventListener("click", function () {
    document.getElementById("contact-sub-links").style.visibility = "visible";
    document.getElementById("contact-sub-links").style.transform = "translateX(0%)";
    
});
let contact_back = document.getElementById("contact-back");
contact_back.addEventListener("click", function () {
    document.getElementById("contact-sub-links").style.visibility = "hidden";
    document.getElementById("contact-sub-links").style.transform = "translateX(100%)";
});






// Top Picks --> Product change on color

// For 1st Image
let color_1_1 = document.getElementById("color-1-1");
let color_1_2 = document.getElementById("color-1-2");
let color_1_3 = document.getElementById("color-1-3");
let color_1_4 = document.getElementById("color-1-4");

color_1_1.addEventListener("click", function(){
    document.getElementById("top-picks-img-1").src = "images/card-1-1.jpg";
});
color_1_2.addEventListener("click", function(){
    document.getElementById("top-picks-img-1").src = "images/card-1-2.jpg";
});
color_1_3.addEventListener("click", function(){
    document.getElementById("top-picks-img-1").src = "images/card-3-1.jpg";
});
color_1_4.addEventListener("click", function(){
    document.getElementById("top-picks-img-1").src = "images/card-1-4.jpg";
});

// For 3rd Image
let color_3_1 = document.getElementById("color-3-1");
let color_3_2 = document.getElementById("color-3-2");
let color_3_3 = document.getElementById("color-3-3");
let color_3_4 = document.getElementById("color-3-4");

// color_3_1.addEventListener("click", function(){
//     document.getElementById("top-picks-img-3").src = "images/card-3-1.jpg";
// });
// color_3_2.addEventListener("click", function(){
//     document.getElementById("top-picks-img-3").src = "images/card-1-2.jpg";
// });
// color_3_3.addEventListener("click", function(){
//     document.getElementById("top-picks-img-3").src = "images/card-3-1.jpg";
// });
// color_3_4.addEventListener("click", function(){
//     document.getElementById("top-picks-img-3").src = "images/card-1-4.jpg";
// });

// For 4th Image
let color_4_1 = document.getElementById("color-4-1");
let color_4_2 = document.getElementById("color-4-2");
let color_4_3 = document.getElementById("color-4-3");
let color_4_4 = document.getElementById("color-4-4");

color_4_1.addEventListener("click", function(){
    document.getElementById("top-picks-img-4").src = "images/card-4-1.jpg";
});
color_4_2.addEventListener("click", function(){
    document.getElementById("top-picks-img-4").src = "images/card-4-2.jpg";
});
color_4_3.addEventListener("click", function(){
    document.getElementById("top-picks-img-4").src = "images/card-4-3.jpg";
});
color_4_4.addEventListener("click", function(){
    document.getElementById("top-picks-img-4").src = "images/card-4-4.jpg";
});

// For 5th Image
let color_5_1 = document.getElementById("color-5-1");
let color_5_2 = document.getElementById("color-5-2");
let color_5_3 = document.getElementById("color-5-3");
let color_5_4 = document.getElementById("color-5-4");
let color_5_5 = document.getElementById("color-5-5");

color_5_1.addEventListener("click", function(){
    document.getElementById("top-picks-img-5").src = "images/card-5-1.jpg";
});
color_5_2.addEventListener("click", function(){
    document.getElementById("top-picks-img-5").src = "images/card-5-2.jpg";
});
color_5_3.addEventListener("click", function(){
    document.getElementById("top-picks-img-5").src = "images/card-4-1.jpg";
});
color_5_4.addEventListener("click", function(){
    document.getElementById("top-picks-img-5").src = "images/card-5-4.jpg";
});
color_5_5.addEventListener("click", function(){
    document.getElementById("top-picks-img-5").src = "images/card-4-2.jpg";
});
// fifth color for 5th image
let img_5_plus_1 = document.getElementById("img-5-plus-1");
let check_for_plus_1 = 1;
img_5_plus_1.addEventListener("click", function () {
    if (check_for_plus_1 == 1) {
        color_5_5.style.visibility = "visible";
        color_5_5.style.position = "static";
        img_5_plus_1.innerText = "-1";

        check_for_plus_1 = -1;
    }
    else if (check_for_plus_1 == -1) {
        color_5_5.style.visibility = "hidden";
        color_5_5.style.position = "absolute";
        img_5_plus_1.innerText = "+1";

        check_for_plus_1 = 1;
    }
});


// For 6th Image
let color_6_1 = document.getElementById("color-6-1");
let color_6_2 = document.getElementById("color-6-2");
let color_6_3 = document.getElementById("color-6-3");
let color_6_4 = document.getElementById("color-6-4");
let color_6_5 = document.getElementById("color-6-5");

color_6_1.addEventListener("click", function(){
    document.getElementById("top-picks-img-6").src = "images/card-6-1.jpg";
});
color_6_2.addEventListener("click", function(){
    document.getElementById("top-picks-img-6").src = "images/card-1-2.jpg";
});
color_6_3.addEventListener("click", function(){
    document.getElementById("top-picks-img-6").src = "images/card-4-1.jpg";
});
color_6_4.addEventListener("click", function(){
    document.getElementById("top-picks-img-6").src = "images/card-4-2.jpg";
});
color_6_5.addEventListener("click", function(){
    document.getElementById("top-picks-img-6").src = "images/card-1-4.jpg";
});
// fifth color for 5th image
let img_6_plus_1 = document.getElementById("img-6-plus-1");
let check_for_plus__1 = 1;
img_6_plus_1.addEventListener("click", function () {
    if (check_for_plus__1 == 1) {
        color_6_5.style.visibility = "visible";
        color_6_5.style.position = "static";
        img_6_plus_1.innerText = "-1";

        check_for_plus__1 = -1;
    }
    else if (check_for_plus__1 == -1) {
        color_6_5.style.visibility = "hidden";
        color_6_5.style.position = "absolute";
        img_6_plus_1.innerText = "+1";

        check_for_plus__1 = 1;
    }
});




// For 7th Image
let color_7_1 = document.getElementById("color-7-1");
let color_7_2 = document.getElementById("color-7-2");
let color_7_3 = document.getElementById("color-7-3");

// color_7_1.addEventListener("click", function(){
//     document.getElementById("top-picks-img-7").src = "images/card-4-1.jpg";
// });
// color_7_2.addEventListener("click", function(){
//     document.getElementById("top-picks-img-7").src = "images/card-4-2.jpg";
// });
// color_7_3.addEventListener("click", function(){
//     document.getElementById("top-picks-img-7").src = "images/card-4-3.jpg";
// });

// For 8th Image
let color_8_1 = document.getElementById("color-8-1");
let color_8_2 = document.getElementById("color-8-2");
let color_8_3 = document.getElementById("color-8-3");

color_8_1.addEventListener("click", function(){
    document.getElementById("top-picks-img-8").src = "images/card-8-1.jpg";
});
color_8_2.addEventListener("click", function(){
    document.getElementById("top-picks-img-8").src = "images/card-1-2.jpg";
});
color_8_3.addEventListener("click", function(){
    document.getElementById("top-picks-img-8").src = "images/card-8-3.jpg";
});








console.log("This is to check that code is working...");