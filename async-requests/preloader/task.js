const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const textJson = JSON.parse(xhr.responseText);
        const usdData = textJson.response.Valute;
        const itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML = ''; 

        for (let curKey in usdData) {
            let CharCode = usdData[curKey]["CharCode"];
            let previous = usdData[curKey]["Previous"];
            

            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <div class="item__code">
                    ${CharCode}
                </div>
                <div class="item__value">
                    ${previous}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            `;

            itemsContainer.appendChild(item);
        }


        loader.style.display = 'none';
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
