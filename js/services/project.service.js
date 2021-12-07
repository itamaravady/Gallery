
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
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'in-Picure',
        title: 'Harddest Quiz on the web',
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'Touch Nums',
        title: 'A Math Maze',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'Ball Board',
        title: 'For the Quick among us',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'Todos',
        title: 'orginizer',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: makeId(),
        name: 'guess Who',
        title: 'Akinator 2',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        imgUrl: 'img/portfolio/01-thumbnail.jpg',
        url: 'https://itamaravady.github.io/Mine-sweeper/',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    ];
    gProjs = projs;
}