const btns = document.querySelectorAll('.btn__primary');

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const btnId = event.target.getAttribute('id');
        window.location.assign('../pages/workingOn.html');
        })
    })