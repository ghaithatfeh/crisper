const list = document.querySelectorAll('.list');
list.forEach(li => {
    li.onclick = () => {
        showMenu(li.innerHTML);
        console.log(li.nextElementSibling.firstElementChild);
        li.nextElementSibling.firstElementChild.style.fill = '#be1f25';
    }
})

function showMenu(fileName) {
    const dataViewer = document.querySelector('.data-viewer');
    var xReq = new XMLHttpRequest();
    xReq.open('GET', 'js/' + fileName + '.json');
    xReq.onload = () => {
        xData = JSON.parse(xReq.responseText);
        dataViewer.innerHTML = '';
        for (let i = 0; i < xData.length; i++) {
            dataViewer.innerHTML += `
            <div class="sandwich col-6 col-lg-4 text-center mt-3">
            <img class="img-fluid" src="${xData[i].img}" alt="">
            <span class="d-block mt-3">${xData[i].name}</span>
            <button>
                <img src="images/menu/info-icon.svg" alt="">
                Details</button>
            </div>
            `
        }
    }
    xReq.send();
}

function showMenuExternal() {
    const dataViewer = document.querySelector('.data-viewer');
    fetch('https://jsonplaceholder.typicode.com/photos/')
        .then(response => response.json())
        .then(data => {
            console
            for (let i = 0; i < 6; i++)
                dataViewer.innerHTML += `
            <div class="sandwich col-6 col-lg-4 text-center mt-3">
            <img class="img-fluid" src="${data[0].thumbnailUrl}" alt="">
            <span class="d-block mt-3">${data[0].title}</span>
            <button>
                <img src="images/menu/info-icon.svg" alt="">
                Details</button>
            </div>
            `
        })
}