document.addEventListener('DOMContentLoaded',
    ()=>{
      console.log('DOMツリーの解析が終わりました。');


let bars= document.querySelector('.fa-bars');
let tab =document.querySelector('.tab');

bars.addEventListener('click',()=>{
tab.classList.toggle('open');
});


let x=document.querySelector('.fa-x');
x.addEventListener('click',()=>{
    tab.classList.remove('open');
    });

    let top=document.querySelector('.top');

    top.addEventListener('click',()=>{
    tab.classList.remove('open');
    });


    let work=document.querySelector('.work');

    work.addEventListener('click',()=>{
tab.classList.remove('open');
    });


   
    let about=document.querySelector('.about');

    about.addEventListener('click',()=>{
    tab.classList.remove('open');
    });

    let contact=document.querySelector('.contact');

    contact.addEventListener('click',()=>{
    tab.classList.remove('open');
    });

    let works=document.querySelector('#work');
    let learn=document.querySelector('.learn');
    let learn2=document.querySelector('.learn2');
    let abouts=document.querySelector('#about');
    let tree=document.querySelector('.tree');
    let contacts=document.querySelector('#contact');
    let formcontainer=document.querySelector('.form-container')
    let thank=document.querySelector('.thank');
    window.addEventListener('scroll',()=>{

const scroll=window.pageYOffset;


if(scroll>600){
works.style.opacity="1"
works.style.zIndex="1";
}else{
works.style.zIndex="0";
}
if(scroll>900){
  learn.style.opacity="1"
  learn.style.zIndex="1";
  }else{
  learn.style.zIndex="0";
  }
  if(scroll>1100){
    learn2.style.opacity="1"
    learn2.style.zIndex="1";
    }else{
    learn2.style.zIndex="0";
    }
  if(scroll>1500){
    abouts.style.opacity="1"
    abouts.style.zIndex="1";
    }else{
    abouts.style.zIndex="0";
    }
    if(scroll>1800){
      tree.style.opacity="1"
      tree.style.zIndex="1";
      }else{
      tree.style.zIndex="0";
      }
      if(scroll>2300){
        contacts.style.opacity="1"
        contacts.style.zIndex="1";

      }else{
        contacts.style.zIndex="0";
      }
      if(scroll>2600){
        thank.style.opacity="1"
        thank.style.zIndex="1";

      }else{
        thank.style.zIndex="0";
      }
      if(scroll>2700){
        formcontainer.style.opacity="1"
        formcontainer.style.zIndex="1";

      }else{
        formcontainer.style.zIndex="0";
      }

  });















}
);


  

