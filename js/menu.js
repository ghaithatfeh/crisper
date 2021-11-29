const list = document.querySelectorAll('.list');
const dataViewer = document.querySelector('.data-viewer');
list.forEach(li => {
    li.onclick = () => {
        dataViewer.innerHTML = '';
        document.querySelector('.loading-animation').style.display = 'flex';
        document.querySelectorAll('#path_yallow').forEach(e => e.setAttribute("transform", "translate(23 -401)"))
        document.querySelectorAll('#path_red').forEach(e => e.setAttribute("transform", "translate(197 -401)"))
        li.nextElementSibling.firstElementChild.setAttribute("transform", "translate(-150 -401)")
        li.nextElementSibling.lastElementChild.setAttribute("transform", "translate(23 -401)")
        showMenu(li.innerHTML.toLowerCase());
    }
})

function showMenu(fileName) {
    var xReq = new XMLHttpRequest();
    xReq.open('GET', 'js/'+ fileName +'.json');
    xReq.onload = () => {
        document.querySelector('.loading-animation').style.display = 'none';
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
            document.querySelector('.loading-animation').style.display = 'none';
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