// Header
// isInViewport
function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= -100 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right-100 <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// isInViewport End
var a=document.querySelectorAll("header .menu a" );
var home=document.querySelector(".home")
var gallery=document.querySelector(".gallery")
var product=document.querySelector(".product")
var contact=document.querySelector(".contact")
console.log(gallery)

window.addEventListener("scroll",function(){
    console.log(isInViewport(gallery))
    if(isInViewport(home)){
        console.log("Home")
        a[0].classList.add("active")
        a[1].classList.remove("active")
        a[2].classList.remove("active")
        a[3].classList.remove("active")
    } 
    if(isInViewport(gallery)){
        console.log("Nav")
        a[0].classList.remove("active")
        a[1].classList.add("active")
        a[2].classList.remove("active")
        a[3].classList.remove("active")
    }
    if(isInViewport(product)){
        a[0].classList.remove("active")
        a[1].classList.remove("active")
        a[2].classList.add("active")
        a[3].classList.remove("active")
    }
    if(isInViewport(contact)){
        a[0].classList.remove("active")
        a[1].classList.remove("active")
        a[2].classList.remove("active")
        a[3].classList.add("active")
    }
})
// Header End


// gallery
var slider_img=document.querySelector(".gallery .slider-img img");
num=1;
function img () { 
    if(num < 12){
        slider_img.src=`./assets/gallery/${num}.jpg`;
        return num++;
    }else{
        return num=1;
    }
    
}
setInterval(img, 1000);
// gallery End
// prodcut
function changimg(color,div){
    let img=document.querySelector(`.product-item .item-${div} img `);
    img.src=`./assets/product/${div} ${color}.png`
}
// prodcut End 
