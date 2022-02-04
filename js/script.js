window.addEventListener('scroll', () => {
  let positionScroll = this.scrollY
  if (positionScroll > 120) {
    document.querySelector('.area-main-menu').style.position = 'fixed'
    document.querySelector('.area-main-menu').style.backgroundColor = 'white'
    document.querySelector('.main-menu').style.color = 'black'
   
  }else{
    document.querySelector('.area-main-menu').style.position = 'relative'
    document.querySelector('.area-main-menu').style.backgroundColor = 'transparent'
    document.querySelector('.main-menu').style.color = 'white'
  }

})