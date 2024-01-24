let currentSlide=0;

function showSlide(){
    const wrapper = document.querySelector('.slider-wrapper')
    const slidewidth = document.querySelector('.slider-image').clientWidth;
    wrapper.style.transform = `translateY($(-currentSlide * slidewidth)px)`;


}


function prevSlide(){
    if(currentSlide>0)
    {
        currentSlide--;

    }
    else{
        currentSlide=1;
    }
    showSlide();
}
function nextSlide(){
    if(currentSlide<1)
    {
        currentSlide++;

    }
    else{
        currentSlide=0;
    }
    showSlide();
}
