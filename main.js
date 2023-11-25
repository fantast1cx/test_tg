let tg = window.Telegram.WebApp;

let targetItem = '';

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

const items = document.querySelectorAll('.item');

items.forEach(item => {

    item.onclick = e => {

        // if (tg.MainButton.isVisible) tg.MainButton.hide();

        // tg.MainButton.setText(`your item is -> ${item.dataset.id}`);
        // tg.MainButton.show();

        // targetItem = item.dataset.id;

        Telegram.WebApp.MainButton
        .setText('CLOSE WEBVIEW')
        .show()
        .onClick(function(){ webviewClose(); });

    };

});



// tg.onEvent('mainButtonClicked', () => {

//     // let test = JSON.stringify({test: 123});
//     // tg.answerWebAppQuery(test);
//     window.close();

// });


