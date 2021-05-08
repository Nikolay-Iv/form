//Vendors
import $ from 'jquery';
window.$ = $;

import 'inputmask';

// Modules
import inputmask from './modules/inputmask';
import select from './modules/select';

const app = {
    ready() {
        inputmask();
        select();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
