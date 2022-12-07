const addBtns = document.querySelectorAll('.btn__primary');

addBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const btnId = event.target.getAttribute('id');
        product = available.find(parameter => parameter.id === btnId);
        stockCheck();
        if (ready == true) {
            cartAdd();
            notif();
            renderingProducts()
            optionBtns.style.display = 'flex';
        }
        if(btn.parentElement.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        btn.parentElement.appendChild(legend);
        legendTimer();
        })
    })