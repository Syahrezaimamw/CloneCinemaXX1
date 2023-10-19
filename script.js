// navbar respomsiv
const gelap =document.querySelector('.gelap')
const menuHamburger =document.querySelector('.menu-hamburger')
const hamburger =document.querySelector('.hamburger')
hamburger.addEventListener('click',function(){
    gelap.classList.toggle('gelapJS')
    menuHamburger.classList.toggle('menu-hamburgerJS')
    // main2.style.display='none'
})

gelap.addEventListener('click',function(){
    gelap.classList.toggle('gelapJS')
    menuHamburger.classList.toggle('menu-hamburgerJS')

})

// -------
const gambar=document.querySelectorAll('.isi-second-nav1 div img')
const text=document.querySelectorAll('.isi-second-nav1 div p')
const arrowdown =document.querySelector('.isi-second-nav1 div:last-child i')
const dropdown=document.querySelector('.dropdown')
for(let i=0;i<text.length;i++){
    text[0].addEventListener('mouseover',function(){
        
        gambar[0].setAttribute('src','play-hover.png')
    })
    text[1].addEventListener('mouseover',function(){
        
        gambar[1].setAttribute('src','speaker-hover.png')
    })
    text[2].addEventListener('mouseover',function(){
        
        gambar[2].setAttribute('src','map-hover.png')
    })
    text[3].addEventListener('mouseover',function(){
        
        
        gambar[3].setAttribute('src','start-hover.png')
        
    })
    text[4].addEventListener('mouseenter',function(){
        gambar[4].setAttribute('src','cari-hover.png')
        
        arrowdown.style.color='rgb(205,170,121)'
    })
   
    
    
    text[i].addEventListener('mouseout',function(){
        gambar[0].setAttribute('src','play.png')
        gambar[1].setAttribute('src','toa.png')
        gambar[2].setAttribute('src','map.png')
        gambar[3].setAttribute('src','star.png')
        
    })
    
    text[4].addEventListener('mouseenter',function(){
        dropdown.style.display='flex'
        gambar[4].setAttribute('src','cari-hover.png')
        text[4].style.color=' rgb(205,170,121)'
        arrowdown.style.color='rgb(205,170,121) '
        arrowdown.style.transform='rotate(180deg)'
        
    })
    text[4].addEventListener('mouseleave',function(){
        
    })
    
    dropdown.addEventListener('mouseleave',function(){
        
        gambar[4].setAttribute('src','search.png')
        text[4].style.color=' #006563'
        arrowdown.style.color='#006563'
        dropdown.style.display='none'
        arrowdown.style.transform='rotate(0deg)'
    })
}


// =========
const containerSlide=document.querySelector('.container-slide-gambar')
const slideLeft=document.querySelectorAll('.s-left ')
const slideLeftIcon=document.querySelectorAll('.s-left i ')
const slideRight=document.querySelectorAll('.s-right ')
const slideRightIcon=document.querySelectorAll('.s-right i')
containerSlide.addEventListener('mouseenter',function(){
    for(i=0;i<slideLeft.length;i++){

        slideLeft[i].classList.add('s-slideJS')
    }
    for(i=0;i<slideRight.length;i++){

        slideRight[i].classList.add('s-slideJS')
        
    }
    containerSlide.style.cursor='pointer'
})
containerSlide.addEventListener('mouseleave',function(){
    for(i=0;i<slideLeft.length;i++){

        slideLeft[i].classList.remove('s-slideJS')
    }
    for(i=0;i<slideRight.length;i++){

        
        slideRight[i].classList.remove('s-slideJS')
    }
    
})
slideRightIcon[0].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transform='translateX(-11.1%)'
    imgSlider.style.transition='0.3s'
})
slideLeftIcon[0].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transform='translateX(-44.44%)'
    imgSlider.style.transition='1s'
    
    
})
slideRightIcon[1].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transform='translateX(-22.22%)'
    imgSlider.style.transition='0.3s'
})
slideLeftIcon[1].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(0%)'
    
})
slideRightIcon[2].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(-33.33%)'
})
slideLeftIcon[2].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(-11.1%)'
})
slideRightIcon[3].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(-44.44%)'
})
slideLeftIcon[3].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(-22.22%)'
    
})
slideRightIcon[4].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transform='translateX(0%)'
    imgSlider.style.transition='1s'
})
slideLeftIcon[4].addEventListener('click',function(){
    const imgSlider =document.querySelector('.img-slide')
    imgSlider.style.transition='0.3s'
    imgSlider.style.transform='translateX(-33.33%)'
    
})

const slideIconAll=document.querySelectorAll('.slide-klik i')

slideIconAll.forEach(function(e){
    e.addEventListener('mouseenter',function(event){
        e.classList.toggle('iconJS')
    })
    e.addEventListener('mouseleave',function(){
        
        e.classList.toggle('iconJS')
    })
   
})
// =========
const isiInputValue=document.querySelector('.input-value p')
const opsiValue=document.querySelectorAll('.opsi ul li')
const inputValue=document.querySelector('.input-value')
const opsi=document.querySelector('.opsi')
const iconOpsi=document.querySelector('.ic-opsi i')

for(let i=0; i<opsiValue.length;i++){
    opsiValue[i].addEventListener('click',function(){
        let udin=opsiValue[i].innerHTML
        isiInputValue.innerHTML=udin
        opsi.classList.remove('opsiJS')
        iconOpsi.classList.toggle('icon-opsiJS')
    })
}


inputValue.addEventListener('click',function(){
    opsi.classList.toggle('opsiJS')
    iconOpsi.classList.toggle('icon-opsiJS')
})

// ==========ukuran hp
const theaters =document.querySelector(' .isi-theaters h3')
const menuTheaters =document.querySelector('.pilih-theaters')
const pilihTheaters=document.querySelectorAll('.pilih-theaters ul li')
const main2=document.querySelector('.main2')
theaters.addEventListener('click',function(){
   menuTheaters.classList.toggle('pilih-theatersJS')
   main2.style.display='none'
   
})
for(let k=0; k<pilihTheaters.length;k++){
    pilihTheaters[k].addEventListener('click',function(){
        console.log('heelo')
        let asep=pilihTheaters[k].innerHTML
        theaters.innerHTML=asep
        menuTheaters.classList.remove('pilih-theatersJS')
        opsi.classList.remove('opsiJS')
        iconOpsi.classList.toggle('icon-opsiJS')
        main2.style.display='flex'
    })
}