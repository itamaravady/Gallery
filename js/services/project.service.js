
var gProjs = []

init()

function init() {
    createProjs();
}


function getProjs() {
    return gProjs;
}

function getProjByIdx(projId) {
    return gProjs.find((proj) => proj.id === projId);
}

// function createProj() {

// }

function createProjs() {
    const projs = [{
        id: makeId(),
        name: 'Minesweeper',
        title: 'An extreme game',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/minesweeper.png',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'Safe-content',
        title: 'Hard to hack',
        imgUrl: 'img/portfolio/signIn.png',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },

    {
        id: makeId(),
        name: 'guess Who',
        title: 'Akinator 2',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/guessWho.PNG',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    ];
    gProjs = projs;
}