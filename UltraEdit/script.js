document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.getElementById('upArrow');

    function checkScrollPosition() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        if (scrollPosition === 0) {
            upArrow.style.display = 'none';
        } else if (scrollPosition + windowHeight >= bodyHeight) {
            upArrow.style.display = 'block';
        } else {
            upArrow.style.display = 'block';
        }
    }

    checkScrollPosition();

    window.addEventListener('scroll', checkScrollPosition);
});



let click = document.querySelector('.click');

click.addEventListener('click', runEvent);

function runEvent() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');

    newDiv.innerHTML = '<p>This is my first div</p>';

    document.body.appendChild(newDiv);
}


let navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', function () {
    let nav = document.querySelector('nav');
    nav.classList.toggle('active-nav');
});

document.addEventListener('DOMContentLoaded', (event) => {
    let product = document.querySelector('#product')
    const productContainer = document.querySelector('#mianProductContainer')

    product.addEventListener('mouseover', () => {

        productContainer.classList = ("activeproduct")

    })
    product.addEventListener('mouseout', () => {
        setTimeout(() => {

            productContainer.classList = ""
        }, 3000);

    })
})




document.addEventListener('DOMContentLoaded', (event) => {
    let product = document.querySelector('#pricing')
    const mianPricingContainer = document.querySelector('#mianPricingContainer')

    product.addEventListener('mouseover', () => {

        mianPricingContainer.classList = ("activeproduct")

    })
    product.addEventListener('mouseout', () => {
        setTimeout(() => {
            mianPricingContainer.classList = ""

        }, 3000);

    })
})



// const toggleSvg = document.querySelector('#toggle-svg')
const toggleSvg = document.querySelector('.nav-button svg')
toggleSvg.addEventListener('click', onclick)
function ToggleEvent(e) {
    const nav = document.querySelector('#toggle-nav')
    nav.classList = ('active-nav')
    if (nav.classList.contains('active-nav')) {
        toggleSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
        <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
    }
    // } else {
    //     toggleSvg.innerHTML = `
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
    //         <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //     </svg>`
    // }
}