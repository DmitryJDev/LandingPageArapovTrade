window.addEventListener('load', () => {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.el-animate');

    for (let elm of elements) {
        observer.observe(elm);
    }

    //AnCHOR
    const linksAnchor = document.querySelectorAll('.js-scroll');
    for (const link of linksAnchor) {
        link.onclick = function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
            $( "#menu" ).prop( "checked", false );
        }
    };

    //ACCORDEON
    initAcc('.faq__item');

    function initAcc(elem) {
        const acc_item = document.querySelectorAll(elem);
        for (let link of acc_item) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (!e.target.matches(elem + ' .js-faq__link')) return;
                else {
                    if (!e.target.closest(elem).classList.contains('active')) {
                        let elements = document.querySelectorAll('.faq__item');
                        for (let elm of elements) {
                            elm.classList.remove('active');
                        }
                        e.target.closest(elem).classList.add('active');
                    } else {
                        e.target.closest(elem).classList.remove('active');
                    }
                }
            });
        }
    }


    $(document).click( function(e){
		var div = $( ".top-menu" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) { 
            $( "#menu" ).prop( "checked", false );
		}
	});
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('el-show');
        }
    });
}


// (function () {
// 	const popup = () => {
// 		let popup
// 		let popupCall
// 		let popupInner
// 		let popupClose
// 		let body
// 		const init = () => {
// 			popupCall = document.querySelectorAll('.js-modal')
// 			body = document.querySelector('body')
// 			popup = document.querySelector('.modal')
// 			popupInner = popup.querySelector('.modal__inner')
// 			popupClose = popup.querySelector('.js-modal-close')
// 			listeners()
// 		}
// 		const close = () => {
// 			popup.classList.remove('is-open')
// 			body.classList.remove('m-hidden')
// 		}
// 		const showPopup = () => {
// 			popup.classList.add('is-open')
// 			body.classList.add('m-hidden')
// 		}
// 		const listeners = () => {
// 			Array.prototype.forEach.call(popupCall, el => {
// 				el.addEventListener('click', (e) => {
// 					e.preventDefault()
// 					showPopup()
// 				})
// 			})
// 			popupClose.addEventListener('click', () => {
// 				close()
// 			})
// 			popup.addEventListener('click', () => {
// 				close()
// 			})
// 			popupInner.addEventListener('click', (e) => {
// 				e.stopPropagation()
// 			})
// 			document.onkeydown = (event) => {
// 				const key = event.key
// 				if (key === 'Escape') {
// 					close()
// 				}
// 			}
// 		}
// 		return {
// 			init: init
// 		}
// 	}
// 	popup().init()
// })();
	