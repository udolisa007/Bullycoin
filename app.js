const menu_display = document.querySelector('.display-menu')
const menu_btn = document.querySelector('.menu-btn')
menu_btn.addEventListener('click', ()=>{

    menu_display.classList.toggle('show-nav')
     
     if(menu_display.classList.contains('show-nav')){
           menu_btn.src = './image/Close.png'  
     }else{
        menu_btn.src = './image/Menu.png'
     }
    
    
    
})