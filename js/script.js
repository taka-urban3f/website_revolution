'use strict';

document.querySelector('.l-header__flex__btnHum').addEventListener('click', function(){
    document.querySelector('.l-header__flex__gnav').classList.toggle('l-header__flex__gnav--open');

    document.querySelector('.l-header__flex__btnHum').classList.toggle('l-header__flex__btnHum--open');
});