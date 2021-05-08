//Vendors
import $ from 'jquery';
window.$ = $;

// Modules
import select from './modules/select';

const app = {
    ready() {
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
