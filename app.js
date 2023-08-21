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
