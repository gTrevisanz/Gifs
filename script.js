const gifsPerPage = 4;
let currentPage = 1;

const gifs = [
    "https://thumbs.jusbr.com/480x320/imgs.jusbr.com/publications/images/5b91b136e0010e898e64e3d03bee311e",
    "https://media.tenor.com/MhpcPDesURYAAAAM/neymar-neymar-jr.gif",
    "https://i.pinimg.com/originals/ed/12/16/ed1216a5f0f062da0cb32c5c9cc68540.gif",
    "https://64.media.tumblr.com/4299534a73fde2bc411b3124d45d89eb/tumblr_p5omh9euJr1qfvbbio3_400.gif",
    "https://media0.giphy.com/media/l3UcicwEsOOan1Q2c/giphy.gif?cid=6c09b952uezw7k4u0li82kfpf5s0xw3e91k9qa4decx26ljn&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.tenor.com/YU7xce8F7goAAAAM/r9-ronaldo-nazario.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXQ5ZjViM2R5bndyNXY0bnVoZDl1NndtMDh1Z21vZW50a2hrMTA3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qOgVMGcxrCwOOx3jwc/giphy.webp",
    "https://i.makeagif.com/media/6-16-2018/1YQLZR.gif",
   
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);