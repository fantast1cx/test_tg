let tg = window.Telegram.WebApp;

let targetItem = '';

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.expand();

const items = document.querySelectorAll('.item');

items.forEach(item => {

    item.onclick = e => {

        if (tg.MainButton.isVisible) tg.MainButton.hide();

        tg.MainButton.setText(`your item is -> ${item.dataset.id}`);
        tg.MainButton.show();

        targetItem = item.dataset.id;

    };

});



tg.onEvent('mainButtonClicked', () => {

    tg.openInvoice('https://t.me/$fg22ukhyGVe2AAAAhF5OakMogtM');
    // tg.close();

});


