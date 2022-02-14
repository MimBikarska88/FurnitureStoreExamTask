window.addEventListener('load', solve);

function solve() {
    let addButtonElement = document.querySelector('.store form #add');
    let furnitureList = document.querySelector('.store #furniture-list');
    let totalPrice = document.querySelector('.total-price');
    console.log(furnitureList);


    seeMore = (event) => {
        let prevRow = event.currentTarget.parentElement.parentElement;
        if (event.currentTarget.innerHTML === 'More info') {
            event.currentTarget.innerHTML = 'Less info'
            prevRow.nextSibling.style.display = 'contents';
        } else {
            event.currentTarget.innerHTML = 'More info';
            prevRow.nextSibling.style.display = 'none';
        }

        prevRow.nextSibling

    }
    buy = (event) => {
        let row = event.currentTarget.parentElement.parentElement;
        let totalPriceNumeric = Number(totalPrice.innerHTML);
        totalPriceNumeric += Number(row.querySelector('td:nth-child(2)').innerHTML);
        totalPrice.innerHTML = totalPriceNumeric.toFixed(2);
        row.nextSibling.remove();
        row.remove();



    }

    addFurniture = (event) => {

        event.preventDefault();
        let model = event.currentTarget.parentElement.querySelector('#model').value;
        event.currentTarget.parentElement.querySelector('#model').value = '';
        let year = Number(event.currentTarget.parentElement.querySelector('#year').value);
        event.currentTarget.parentElement.querySelector('#year').value = '';
        let description = event.currentTarget.parentElement.querySelector('#description').value;
        event.currentTarget.parentElement.querySelector('#description').value = '';
        let price = Number(event.currentTarget.parentElement.querySelector('#price').value)
        event.currentTarget.parentElement.querySelector('#price').value = '';

        if (description.trim() == '' || model.trim() == '' || year <= 0 || price <= 0) {
            return;
        }
        let row = document.createElement('tr');
        row.classList.add('info');
        let tdModel = document.createElement('td');
        let textModel = document.createTextNode(model);
        tdModel.appendChild(textModel);
        row.appendChild(tdModel);

        tdPrice = document.createElement('td');
        textPrice = document.createTextNode(`${price.toFixed(2)}`);
        tdPrice.appendChild(textPrice);
        row.appendChild(tdPrice);
        furnitureList.appendChild(row);

        let tdButtons = document.createElement('td');
        let moreButton = document.createElement('button');
        moreButton.classList.add('moreBtn');
        moreButton.innerHTML = 'More info';

        let buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.innerHTML = 'Buy it';

        moreButton.addEventListener('click', seeMore);
        tdButtons.appendChild(moreButton);
        buyButton.addEventListener('click', buy);
        tdButtons.appendChild(buyButton);

        row.appendChild(tdButtons);
        let tr = document.createElement('tr');
        tr.classList.add('hide');
        let tdYear = document.createElement('td');
        tdYear.append(document.createTextNode(`Year: ${year}`));
        tr.appendChild(tdYear);

        let tdColSpan = document.createElement('td');
        tdColSpan.colSpan = 3;
        tdColSpan.innerHTML = description;
        tr.appendChild(tdColSpan);
        furnitureList.appendChild(tr);

    }

    addButtonElement.addEventListener('click', addFurniture);

}