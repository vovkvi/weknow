document$.subscribe(() => {
    enableTablesort();
    setColors();
});

function enableTablesort() {
    let tbls = document.querySelectorAll('article table:not([class])');
    tbls.forEach(t => {
        new Tablesort(t);
    });
}

function setColors() {
    let divs = document.querySelectorAll('div._color');
    divs.forEach(div => {
        let clr = div.getAttribute('data-clr');
        div.setAttribute('style', `background:${clr};`);
    });
}