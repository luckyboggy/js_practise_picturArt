const modals = () => {

    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, triggerDestroy = false) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            // Все модальные окна на странице
            mWindows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.targer) {
                    // Отменятет перезагрузку страницы (по умолчанию)
                    event.preventDefault();
                }

                btnPressed = true;

                if (triggerDestroy) {
                    item.remove();
                }

                // Закрываем все модальные окна
                mWindows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                // Делает элемент modal видимым
                modal.style.display = 'block';
                // Отмена прокрутки остальной страницы
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // Через классы bootstrap
                //document.body.classList.add('modal-open')
            });
        });

        close.addEventListener('click', () => {
            // Закрываем все модальные окна
            document.querySelectorAll('[data-modal]').forEach(item => {
                item.style.display = 'none';
            });
            // Делает элемент modal невидимым
            modal.style.display = 'none';
            // разрещение прокрутки страницы
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
            // Через классы bootstrap
            //document.body.classList.remove('modal-open')
        });

        // закрытие модального окна по клику вне его
        modal.addEventListener('click', (event) => {
            if ((event.target === modal) && closeClickOverlay) {
                // Закрываем все модальные окна
                mWindows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0`;
                //document.body.classList.remove('modal-open')
            }
        });
    }

    function showModalByTyme(selector, time) {
        setTimeout(() => {
            let display = false;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = true;
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();


        return scrollWidth;
    }

    function openByScrol(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    openByScrol('.fixed-gift');

    showModalByTyme('.popup-consultation', 60000);
};

export default modals;