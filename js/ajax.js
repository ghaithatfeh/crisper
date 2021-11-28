const list = document.querySelectorAll('.list');
list.forEach(li => {
    li.onclick = () => showMenu(li.innerHTML)
})

showMenu('sandwich')

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