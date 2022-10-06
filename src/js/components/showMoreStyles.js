import { getResourse } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    // Управление видимостью объектов на странице

    // const cards = document.querySelectorAll(styles),


    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });
    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });

    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function () {
        getResourse('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
        this.remove();
    });

    function createCards(response) {
        response.forEach(({ src, title, link }) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }





};

{/* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
					<div class=styles-block>
						<img src=assets/img/styles-6.jpg alt>
						<h4>Поп-арт</h4>
						<a href="#">Подробнее</a>
					</div>
				</div> */}

export default showMoreStyles;