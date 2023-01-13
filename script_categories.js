// Smartfren
function category_10() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    listData.innerHTML = "";
    category1.classList.add('active');
    category2.classList.remove('active');
    category3.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.smartfren.nonstop.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.smartfren.nonstop[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.smartfren.nonstop[i].price;

                const detail = data.smartfren.nonstop[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.smartfren.nonstop[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_11() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.add('active');
    category3.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.smartfren.unlimited_harian.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.smartfren.unlimited_harian[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.smartfren.unlimited_harian[i].price;

                const detail = data.smartfren.unlimited_harian[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.smartfren.unlimited_harian[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_12() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.add('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.smartfren.unlimited_nonstop.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.smartfren.unlimited_nonstop[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.smartfren.unlimited_nonstop[i].price;

                const detail = data.smartfren.unlimited_nonstop[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.smartfren.unlimited_nonstop[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}


// Indosat Ooredoo
function category_20() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    const category5 = document.querySelector('.type4');
    listData.innerHTML = "";
    category1.classList.add('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.remove('active');
    category5.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.indosatooredoo.internet.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo.internet[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.indosatooredoo.internet[i].price;

                const detail = data.indosatooredoo.internet[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo.internet[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_21() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    const category5 = document.querySelector('.type4');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.add('active');
    category3.classList.remove('active');
    category4.classList.remove('active');
    category5.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.indosatooredoo.data_freedom.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo.data_freedom[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.indosatooredoo.data_freedom[i].price;

                const detail = data.indosatooredoo.data_freedom[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo.data_freedom[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_22() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    const category5 = document.querySelector('.type4');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.add('active');
    category4.classList.remove('active');
    category5.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.indosatooredoo.data_harian.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo.data_harian[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.indosatooredoo.data_harian[i].price;

                const detail = data.indosatooredoo.data_harian[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo.data_harian[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_23() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    const category5 = document.querySelector('.type4');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.add('active');
    category5.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.indosatooredoo.data_longlife.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo.data_longlife[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.indosatooredoo.data_longlife[i].price;

                const detail = data.indosatooredoo.data_longlife[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo.data_longlife[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_24() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    const category5 = document.querySelector('.type4');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.remove('active');
    category5.classList.add('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.indosatooredoo.data_yellow.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.indosatooredoo.data_yellow[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.indosatooredoo.data_yellow[i].price;

                const detail = data.indosatooredoo.data_yellow[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.indosatooredoo.data_yellow[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}


// XL
function category_30() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.add('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.xl.data_pure.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.xl.data_pure[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.xl.data_pure[i].price;

                const detail = data.xl.data_pure[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.xl.data_pure[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_31() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.add('active');
    category3.classList.remove('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.xl.hotrod_promo.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.xl.hotrod_promo[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.xl.hotrod_promo[i].price;

                const detail = data.xl.hotrod_promo[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.xl.hotrod_promo[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_32() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.add('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.xl.hotrod_mini.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.xl.hotrod_mini[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.xl.hotrod_mini[i].price;

                const detail = data.xl.hotrod_mini[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.xl.hotrod_mini[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_33() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.add('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.xl.combo_promo.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.xl.combo_promo[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.xl.combo_promo[i].price;

                const detail = data.xl.combo_promo[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.xl.combo_promo[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

// Telkomsel
function category_40() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.add('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.telkomsel.unlimited_max.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.telkomsel.unlimited_max[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.telkomsel.unlimited_max[i].price;

                const detail = data.telkomsel.unlimited_max[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.telkomsel.unlimited_max[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_41() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.add('active');
    category3.classList.remove('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.telkomsel.new_combo_sakti.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.telkomsel.new_combo_sakti[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.telkomsel.new_combo_sakti[i].price;

                const detail = data.telkomsel.new_combo_sakti[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.telkomsel.new_combo_sakti[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_42() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.add('active');
    category4.classList.remove('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.telkomsel.combo_sakti.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.telkomsel.combo_sakti[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.telkomsel.combo_sakti[i].price;

                const detail = data.telkomsel.combo_sakti[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.telkomsel.combo_sakti[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}

function category_43() {
    const listData = document.getElementById('list-data');
    const category1 = document.querySelector('.type0');
    const category2 = document.querySelector('.type1');
    const category3 = document.querySelector('.type2');
    const category4 = document.querySelector('.type3');
    listData.innerHTML = "";
    category1.classList.remove('active');
    category2.classList.remove('active');
    category3.classList.remove('active');
    category4.classList.add('active');

    var products = [];
    fetch('./data_kuota.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.telkomsel.data_flash.length; i++) {
                const card_item = document.createElement("div");
                const text1 = document.createElement("p");
                const text2 = document.createElement("p");
                const text3 = document.createElement("p");
                const text4 = document.createElement("p");
                const list_detail = document.createElement("ul");

                card_item.classList.add('card');
                card_item.classList.add('item' + i);
                const card_event = document.createAttribute("onclick");
                card_event.value = "pesan(" + i + ")";
                card_item.setAttributeNode(card_event);

                text1.textContent = data.telkomsel.data_flash[i].description;
                text2.textContent = "Detail";
                text3.textContent = "Harga";
                text4.textContent = data.telkomsel.data_flash[i].price;

                const detail = data.telkomsel.data_flash[i].detail;
                for (let i = 0; i < detail.length; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[i];
                    list_detail.appendChild(listItem);
                }

                card_item.appendChild(text1);
                card_item.appendChild(text2);
                card_item.appendChild(list_detail);
                card_item.appendChild(text3);
                card_item.appendChild(text4);
                document.getElementById('list-data').appendChild(card_item);

                products.push(data.telkomsel.data_flash[i].product);
            }
            localStorage.removeItem('product_code');
            localStorage.setItem('product_code', JSON.stringify(products));
        })
        .catch(err => console.error(err));

    // Hidden Footer
    if (onView == false) {
        document.querySelector('.footer').classList.add('hidden');
        setTimeout(function() { document.querySelector('.footer').classList.remove('hidden'); }, 100);
    }
}


// Hidden Footer
var onView = true;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            onView = true;
        } else {
            onView = false;
        }
    });
});

const hiddenElement = document.querySelectorAll('.footer');
hiddenElement.forEach((el) => observer.observe(el));