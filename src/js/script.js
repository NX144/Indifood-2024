window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.tel'), function(input) {
//       var keyCode;
//       function mask(event) {
//         event.keyCode && (keyCode = event.keyCode);
//         var pos = this.selectionStart;
//         if (pos < 3) event.preventDefault();
//         var matrix = "+7 (___) ___ ____",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, ""),
//             new_value = matrix.replace(/[_\d]/g, function(a) {
//                 return i < val.length ? val.charAt(i++) : a
//             });
//         i = new_value.indexOf("_");
//         if (i != -1) {
//             i < 5 && (i = 3);
//             new_value = new_value.slice(0, i)
//         }
//         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return "\\d{1," + a.length + "}"
//             }).replace(/[+()]/g, "\\$&");
//         reg = new RegExp("^" + reg + "$");
//         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
//           this.value = new_value;
//         }
//         if (event.type == "blur" && this.value.length < 5) {
//           this.value = "";
//         }
//       }
  
//       input.addEventListener("input", mask, false);
//       input.addEventListener("focus", mask, false);
//       input.addEventListener("blur", mask, false);
//       input.addEventListener("keydown", mask, false);
  
//     });

//     const rememberMeLabel = document.querySelectorAll('.rememberMe');

//   rememberMeLabel.forEach(item => {
//     item.addEventListener('click', () => {
//       item.classList.toggle("rememberActive");
//     });
//   });
  

    const burgerBtn = document.querySelector(".block-hamburger");
    const menu = document.querySelector(".header-menu");
    const menuClose = document.querySelector(".header-menu__close");

    burgerBtn.addEventListener("click", (e) => {
        menu.classList.add("header-menu-active");
    })

    menuClose.addEventListener("click", (e) => {
        menu.classList.remove("header-menu-active");
    })

    document.querySelector(".fp-watermark").remove();


    const footerItem = document.querySelectorAll(".footer-menu__item");

    // const footerItemLinks = document.querySelectorAll(".footer__item-links");

    // footerItemLinks.forEach(item => {
    //     expandElement(item, 'footer__item-links-active');
    // })

    footerItem.forEach(item => {
        // if(item.nextElementSibling.classList.contains("footer__item-links") && window.innerWidth < 768) {
        //     expandElement(item, 'footer__item-links-active');
        // }
        item.addEventListener("click", (e) => {
            if(window.innerWidth <= 786) {
                // console.dir(e.target);
                if(e.target && e.target.classList.contains("footer-menu__link")) {
                    e.target.nextElementSibling.classList.toggle("footer__item-links-active");
                    e.target.lastChild.previousSibling.classList.toggle("arrow-active");
                    // console.log(e.target.lastChild)
                }
                else if(e.target && e.target.parentNode.classList.contains("footer-menu__link")) {
                    e.target.classList.toggle("arrow-active");
                    e.target.parentNode.nextElementSibling.classList.toggle("footer__item-links-active");
                }
            }
                
                
                // const content = e.target.nextElementSibling;
                // expandElement(content, 'footer__item-links-active');
        })
    })


    if(document.querySelectorAll('.contacts-info__tab')) {
        const tabItems = document.querySelectorAll('.contacts-info__tab');
        const tabBtns = document.querySelectorAll('.contacts-info__btns_btn');
    
    
        tabBtns.forEach(item => {
            if(item) {
                item.addEventListener('click', () => {
                    const index = item.getAttribute('data-tab');
                    tabBtns.forEach(item => {
                        item.classList.remove('contacts-info__btns_btn-active');
                    });
                    tabItems.forEach(item => {
                        if(item.getAttribute('data-tab') === index) {
                            item.classList.add('contacts-info__tab-active');
                        } else {
                            item.classList.remove('contacts-info__tab-active');
                        }
                    });;
                    item.classList.add('contacts-info__btns_btn-active');
                    console.log(index)
                });
            }
        });
    }

});