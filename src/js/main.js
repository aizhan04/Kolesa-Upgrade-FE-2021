import '../css/style.scss';

const clothes = [
    {
        id:    0,
        img:   'src/assets/futbolka.jpg',
        alt:   'Футболка "Эволюционируй или сдохни"',
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 1000,
        isNew: true,
        size:  'S/M/L',
    },
    {
        id:    1,
        img:   'src/assets/kofta.jpg',
        alt:   'Футболка "Все очень круто, но надо переделать"',
        title: 'Футболка "Все очень круто, но надо переделать"',
        price: 230,
        isNew: true,
        size:  'S/M/L',
    },
    {
        id:    2,
        img:   'src/assets/kofta_sinyaa.jpg',
        alt:   'Толстовка "Kolesa Team"',
        title: 'Толстовка "Kolesa Team"',
        price: 7000,
        isNew: false,
        size:  'S/M/L',
    },

];

const accessories = [
    {
        id:    7,
        img:   'src/assets/rukzak.jpg',
        alt:   'Рюкзак',
        title: 'Рюкзак',
        price: 300,
        isNew: false,
        size:  'M',
    },
    {
        id:    8,
        img:   'src/assets/butylka.jpg',
        alt:   'Бутылка для воды',
        title: 'Бутылка для воды',
        price: 500,
        isNew: true,
        size:  'S',
    },

];
const sortedClothes = clothes.sort((a, b) => b.isNew - a.isNew);
const sortedAccessories = accessories.sort((a, b) => b.isNew - a.isNew);
const allGoods = sortedClothes.concat(sortedAccessories);
const newArray = allGoods.sort((a, b) => b.isNew - a.isNew);
const makeModalCard = (title, img, price) => `
 <div class="modal_single_wrapper">
                    <img class="modal_close_btn" src="/src/assets/modal_card/close-big.svg">

                    <div class="modal_left_part">
                        <div>
                            <img src="/src/assets/modal_card/main_img.jpg">
                        </div>
                        <div class="img_row">
                            <img class="small_photo" src="src=${img}>
                            <img class="active" src="/src/assets/modal_card/single3_img.jpg">

                            <img class="small_photo" src="/src/assets/modal_card/single2_img.jpg">
                        </div>
                    </div>
                    <div сlass="modal_right_part" style="width: 100%;">
                        <p class="modal_main_title"> ${title}</p>
                        <div class="modal_balance_info">
                            <div>
                                <p class="modal_balance_cost">${price}</p>
                                <button class="modal_main_btn" type="button">Заказать</button>
                            </div>
                            <div class="modal_balance_current">
                                <div class="modal_balance_current_info">
                                    <p class="modal_balance_current_text">Твой баланс:</p>
                                    <p>3 945 баллов</p>
                                </div>
                                <div>
                                    <img src="/src/assets/modal_card/basket.svg">
                                </div>
                            </div>
                        </div>
                        <p class="modal_colors-title">Цвета:</p>
                        <div class="modal_color">
                            <div class="modal_color-item">
                                <input id="blue" type="radio" name="name">
                                <label for="blue">Синий</label>
                            </div>
                            <div class="modal_color-item">
                                <input id="beige" type="radio" name="name">
                                <label id="modal_color-2" for="beige">Бежевый</label>
                            </div>
                            <div class="modal_color-item">
                                <input id="grey" type="radio" name="name">
                                <label id="modal_color-3" for="grey">Серый</label>
                            </div>

                        </div>
                        <p class="modal_size-text">Размер:</p>
                        <div class="modal_size_wrapper">
                            <div class="modal_size-item">
                                <input id="S" type="radio" name="size" value="S">
                                <label for="S">S</label>
                            </div>
                            <div class="modal_size-item">
                                <input id="M" type="radio" name="size" value="M">
                                <label for="M">M</label>
                            </div>
                            <div class="modal_size-item">
                                <input id="L" type="radio" name="size" value="L">
                                <label for="L">L</label>
                            </div>
                        </div>
                        <div class="modal_detail_info">
                            <p class="modal_detail_info_title">Детали:</p>
                            <p>Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%</p>
                        </div>

                        <div>
                            <p class="modal_detail_info_subtitle">Как выбрать размер:</p>
                            <p>Написать дяде Рику для уточнения.</p>
                        </div>
                    </div>
                </div>`;

const makeProductCard = ((title, img, price, id, alt, isNew, size) => ` <div data-id="${id}" class="cards__single">
                        <div class="cards__item">
                            <div class="">
                                <img src="${img}" alt="${alt}">
                                ${isNew ? '<span class="cards__label">New</span>' : ''}
                            </div>
                            <div class="cards__info">
                                <h3 class="cards__count">${price} баллов</h3>
                                <h4 class="cards__title">${title}</h4>
                                <p class="cards__size">Размеры ${size}</p>
                                <button type="button" class="cards__btn">Заказать</button>
                            </div>
                        </div>
                    </div>`);

allGoods.forEach((card) => {
    const {
        title, img, price, id, alt, isNew, size,
    } = card;
    const cardHtml = makeProductCard(title, img, price, id, alt, isNew, size);

    document.querySelector('.js-cards').innerHTML += cardHtml;
});

document.querySelectorAll('.js-color').forEach((item) => {
    item.addEventListener('click', () => {
        const categoryKey = item.getAttribute('data-id');

        if (categoryKey === 'allGoods') {
            document.querySelector('.js-cards').innerHTML = '';
            newArray.forEach((card) => {
                const {
                    title, img, price, id, alt, isNew, size,
                } = card;
                const cardHtml = makeProductCard(title, img, price, id, img, alt, isNew, size);

                document.querySelector('.js-cards').innerHTML += cardHtml;
            });
        } else if (categoryKey === 'clothes') {
            document.querySelector('.js-cards').innerHTML = '';
            sortedClothes.forEach((card) => {
                const {
                    title, img, price, id, alt, isNew, size,
                } = card;
                const cardHtml = makeProductCard(title, img, price, id, img, alt, isNew, size);

                document.querySelector('.js-cards').innerHTML += cardHtml;
            });
        } else if (categoryKey === 'accessories') {
            document.querySelector('.js-cards').innerHTML = '';
            sortedAccessories.forEach((card) => {
                const {
                    title, img, price, id, alt, isNew, size,
                } = card;
                const cardHtml = makeProductCard(title, img, price, id, img, alt, isNew, size);

                document.querySelector('.js-cards').innerHTML += cardHtml;
            });
        }
    });
});
function addProducts(card) {
    const {
        title, img, price, isNew,
    } = card;
    const myCard = makeProductCard(title, img, price, isNew);

    document.querySelector('.js-cards').innerHTML += myCard;
}
allGoods.forEach((card) => {
    addProducts(card);
});
const modal = document.querySelector('.modal');
const outer = document.querySelector('.modal');

document.querySelectorAll('.cards__single').forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        const image = item.querySelector('img').src;
        const price = item.querySelector('.cards__count').innerHTML;
        const title = item.querySelector('.cards__title').innerHTML;

        const temp = makeModalCard(title, image, price);

        modal.style.display = 'block';
        modal.innerHTML = temp;

        // outer.innerHTML += temp;
    });
});
document.querySelector('.modal_close_btn').addEventListener('click', () => {
    modal.style.display = 'none';

    if (outer.querySelector('.modal_wrapper')) {
        outer.querySelector('.modal_wrapper').remove();
    }
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';

        if (outer.querySelector('.modal_wrapper')) {
            outer.querySelector('.modal_wrapper').remove();
        }
    }
});
// document.querySelector('#app').innerHTML = `
//   <h1>Hello, Aizhan!</h1>
// `;
