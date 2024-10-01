'use strict';

// ハンバーガーボタンをクリックしたらメニューを開閉する処理。
const elem_btnHum = document.querySelector('.l-header__flex__btnHum');
if (elem_btnHum) {
    elem_btnHum.addEventListener('click', function () {
        elem_btnHum.classList.toggle('l-header__flex__btnHum--open');

        const elem_gnav = document.querySelector('.l-header__flex__gnav');
        if (elem_gnav) {
            elem_gnav.classList.toggle('l-header__flex__gnav--open');
        }
    });
}

// ハンバーガーメニュー内の項目をクリックしたら、メニューを閉じる処理
const elems_gnav_link = document.querySelectorAll('.l-header__flex__gnav__link');
if (elems_gnav_link.length >= 1) {
    elems_gnav_link.forEach(function (elem) {
        elem.addEventListener('click', function () {
            const elem_btnHum = document.querySelector('.l-header__flex__btnHum');
            if (elem_btnHum) {
                elem_btnHum.classList.remove('l-header__flex__btnHum--open');
            }

            const elem_gnav = document.querySelector('.l-header__flex__gnav');
            if (elem_gnav) {
                elem_gnav.classList.remove('l-header__flex__gnav--open');
            }
        });
    });
}