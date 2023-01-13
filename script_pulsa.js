// Get Card Type
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
document.querySelector('.card-type').textContent = type;


// Create Elements
if (type == "Smartfren") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.smartfren.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.smartfren[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.smartfren[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.smartfren[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
} else if (type == "Indosat Ooredoo") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.indosatooredoo.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.indosatooredoo[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
} else if (type == "XL") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.xl.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.xl[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.xl[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.xl[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
} else if (type == "AXIS") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.axis.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.axis[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.axis[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.axis[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
} else if (type == "Telkomsel") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.telkomsel.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.telkomsel[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.telkomsel[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.telkomsel[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
} else if (type == "Token PLN") {
    fetch('./data_pulsa.json')
        .then(response => response.json())
        .then(data => {
            var products = [];
            for (let i = 0; i < data.tokenpln.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.tokenpln[i].description;
                text2.textContent = "Harga";
                text3.textContent = data.tokenpln[i].price;

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(text3);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.tokenpln[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));
}


// Popup Dialog
var description = "";
var price ="";
var product = "";

function pesan(i) {
    description = document.querySelector('.item' + i + ' p:nth-child(1)').textContent;
    price = document.querySelector('.item' + i + ' p:nth-child(3)').textContent;
    document.querySelector('.detail').textContent = description;

    if (type == "Token PLN") {
        document.querySelector('.nomor').innerHTML = "No. Listrik Pintar<span>*</span>";
    }

    document.querySelector('.dialog-wrapper').style = "display: flex;";
    document.querySelector('.dialog-card').style = "animation: dialog-visible 0.4s ease-in-out forwards;";
    setTimeout(icon_visible, 200);

    const products = JSON.parse(localStorage.getItem('product_code'));
    product = products[i];
}

const wa_message = document.querySelector('#wa-number');
const btn_send = document.querySelector('.btn-send');
const btn_cancel = document.querySelector('.btn-cancel');

btn_send.addEventListener('click', function () {
    const wa_number = document.querySelector('#wa-number').value;
    if (wa_number.length > 0) {
        let pesanan = `**%20*KikoCell*%20**%0A${num(date.getDate())}/${num(date.getMonth() + 1)}/${date.getFullYear()}%20${num(date.getHours())}:${num(date.getMinutes())}:${num(date.getSeconds())}%0A%0A*---%20PESANAN%20---*%0A%0A*NO. TUJUAN :*%0A${wa_number}%0A*PRODUK :*%0A${product}%0A*KETERANGAN :*%0A${type.toUpperCase()}%20${description.toUpperCase()}%0A*HARGA :*%0A${price}`;
        window.open(`https://wa.me/+62881010268909?text=${pesanan}`, "_blank");
        document.querySelector('#wa-number').value = "";
        document.querySelector('.icon').style = "animation: icon-hidden 0.3s ease-in-out forwards;";
        setTimeout(dialog_hidden, 100);
        setTimeout(outer_hidden, 400);
    }
    else {
        wa_message.classList.add('invalid');
        setTimeout(removeError, 300);
    }
});

function removeError() {
    wa_message.classList.remove('invalid');
}

btn_cancel.addEventListener('click', function () {
    document.querySelector('#wa-number').value = "";
    document.querySelector('.icon').style = "animation: icon-hidden 0.3s ease-in-out forwards;";
    setTimeout(dialog_hidden, 100);
    setTimeout(outer_hidden, 400);
});

function outer_hidden() {
    document.querySelector('.dialog-wrapper').style = "display: none;";
}

function dialog_hidden() {
    document.querySelector('.dialog-card').style = "animation: dialog-hidden 0.3s ease-in-out forwards;";
}

function icon_visible() {
    document.querySelector('.icon').style = "animation: icon-visible 0.3s ease-in-out forwards;"
}

function num(value) {
    return ('0' + value).slice(-2);
}


// Get Year
var date = new Date();
document.getElementById("copyright").textContent = "Copyright ©" + date.getFullYear() + " KikoCell. All Rights Reserved";