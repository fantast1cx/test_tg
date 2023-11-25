let tg = window.Telegram.WebApp;

let targetItem = '';

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

const items = document.querySelectorAll('.item');

items.forEach(item => {

    item.onclick = e => {

        if (tg.MainButton.isVisible) tg.MainButton.hide();

        tg.MainButton.setText(`your item is -> ${item.dataset.id}`);
        tg.MainButton.show();

        targetItem = item.dataset.id;

    };

});



Telegram.WebApp.onEvent('mainButtonClicked', () => {

    tg.sendData(targetItem);

});