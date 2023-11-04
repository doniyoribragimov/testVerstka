$(function(){
    
    // $('.sample').slick({
    //     prevArrow: ``,
    //     nextArrow: ``,
    //     fade: true,
    //     responsive: [
    //         {
    //             breakpoint: 100000000,
    //             settings: 'unslick'
    //         },

    //         {
    //             breakpoint: 1201,
    //             settings: {
    //                 slidesToShow: 2,
    //                 autoplay: true,
    //             }
    //         },

    //         {
    //             breakpoint: 601,
    //             settings: {
    //                 slidesToShow: 1,
    //                 arrows: false
    //             }
    //         },
    //     ]
    // });

});

// PHONE MASKING

let maskedPhones = document.querySelectorAll("input[type='tel']");
for (var i = 0; i < maskedPhones.length; i++) {
    new IMask(maskedPhones[i], {
        mask: '+{7} (000) 000-00-00',
        placeholder: {
            show: 'always'
        }
    });
}

let body = document.querySelector('body')
// MODAL CLOSING FUNCTION

function closeModal(modalName, reverse = false) {
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function (e) {
        if (reverse) {
            if (e.target === modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        } else {
            if (e.target !== modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }

    })
}


function createTab(tabName, contentName) {
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);

    let tabsArray = Array.from(tabName)
    tabsArray.map((tab, tabIndex) => {
        tab.addEventListener('click', function () {
            for (let tabAll of tabName) tabAll.classList.remove('active')
            this.classList.add('active')

            for (let tabsContents of contentName) tabsContents.classList.remove('active')
            contentName[tabIndex].classList.add('active')
        })
    })
}

// ACCORDION 

function createAccordion(target, content, singleOn, startFrom) {
    const styleSheet = document.styleSheets[0]
    styleSheet.insertRule('.accordion-style { max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out }', styleSheet.cssRules.length);
    target = document.querySelectorAll(target)
    content = document.querySelectorAll(content)


    for (let contentItem of content) {
        // parent creating
        let parentElement = document.createElement('div');

        // adding class to parent
        parentElement.classList.add('accordion-content');

        contentItem.parentNode.insertBefore(parentElement, contentItem);
        parentElement.appendChild(contentItem);
        parentElement.classList.add('accordion-style')
    }

    if (target[startFrom]) {
        target[startFrom].classList.add('active')
        let nextElement = target[startFrom].nextElementSibling
        nextElement.style.maxHeight = nextElement.scrollHeight + "px";
    }



    if (singleOn) {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                for (let targetItem of target) {
                    targetItem.classList.remove('active')
                    targetItem.nextElementSibling.style.maxHeight = null;
                }

                this.classList.toggle('active')
                itemContent = this.nextElementSibling;

                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            })
        }

    } else {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                this.classList.toggle('active')
                itemContent = this.nextElementSibling;
                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            })
        }
    }


}

function createModal(modalName, modalClose, modalTrigger, isMultiple = false) {
    if(isMultiple){
        modalName = document.querySelector(modalName)
        modalClose = document.querySelector(modalClose)
        modalTrigger = document.querySelectorAll(modalTrigger)
    
        if (modalTrigger) {
            for(let trigger of modalTrigger){
                trigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    modalName.classList.add('active')
                    body.style.overflowY = 'hidden'
                })
            }
    
            if (modalClose) {
                modalClose.addEventListener('click', function () {
                    modalName.classList.remove('active')
                    body.style.overflowY = 'initial'
                })
            }
    
        }
    } else{
        modalName = document.querySelector(modalName)
        modalClose = document.querySelector(modalClose)
        modalTrigger = document.querySelector(modalTrigger)
    
        if (modalTrigger) {
            modalTrigger.addEventListener('click', function (e) {
                e.preventDefault();
                modalName.classList.add('active')
                body.style.overflowY = 'hidden'
            })
    
            if (modalClose) {
                modalClose.addEventListener('click', function () {
                    modalName.classList.remove('active')
                    body.style.overflowY = 'initial'
                })
            }
    
        }
    }


}

// createModal('.process__modal', '.process__close', '.process__video', true)
// createAccordion('.question__head', '.question__mains', false)
// createTab('.starter__tab', '.starter__content')
// closeModal('#modalLogin', true)



