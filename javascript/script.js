//change navbar styles on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >    0);
});

//show hiden faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    //change the icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'bx bx-plus'){
      icon.className = 'bx bx-minus'
    }else{
      icon.className = 'bx bx-plus'
    }
  })
})