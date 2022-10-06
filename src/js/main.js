import modals from './components/modals';
import slider from './components/slider';
import forms from './components/forms';
import mask from './components/mask';
import checkTextInputs from './components/checkTextInputs';
import showMoreStyles from './components/showMoreStyles';
import calc from './components/calc';
import filter from './components/filter';
import pictureSize from './components/pictureSize';
import accordion from './components/accordion';
import burger from './components/burger';
import scrolling from './components/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    mask('[name="phone"]');
    //showMoreStyles('.button-styles', '.styles-2')
    showMoreStyles('.button-styles', '#styles .row')

    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filter();
    pictureSize('.sizes-block');

    accordion('.accordion-heading', '.accordion-block');

    burger('.burger-menu', '.burger');

    scrolling('.pageup');
});