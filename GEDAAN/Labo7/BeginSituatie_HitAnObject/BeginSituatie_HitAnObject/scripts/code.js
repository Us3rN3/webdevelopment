const globalSettings = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0,
    currentPosition: { x: 0, y: 0 }
};

const object = document.getElementById('object');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

const setup = () => {
    startButton.addEventListener('click', startGame);
    object.addEventListener('click', handleObjectClick);
};

const startGame = () => {
    startButton.style.display = 'none';
    object.style.display = 'block';
    moveObject();
    clearInterval(globalSettings.timeoutId);
    globalSettings.timeoutId = setInterval(moveObject, globalSettings.MOVE_DELAY);
};

const handleObjectClick = () => {
    if (parseInt(object.src.split('/').pop().split('.')[0]) === 0) {
        gameOver();
    } else {
        globalSettings.score++;
        scoreDisplay.textContent = globalSettings.score;
        moveObject();
        clearInterval(globalSettings.timeoutId);
        globalSettings.timeoutId = setInterval(moveObject, globalSettings.MOVE_DELAY);
    }
};

const moveObject = () => {
    let randomX = Math.floor(Math.random() * (600 - globalSettings.IMAGE_SIZE));
    let randomY = Math.floor(Math.random() * (800 - globalSettings.IMAGE_SIZE));
    globalSettings.currentPosition.x = randomX;
    globalSettings.currentPosition.y = randomY;
    object.style.left = `${globalSettings.currentPosition.x}px`;
    object.style.top = `${globalSettings.currentPosition.y}px`;

    let randomImageIndex = Math.floor(Math.random() * globalSettings.IMAGE_COUNT);
    object.src = `${globalSettings.IMAGE_PATH_PREFIX}${randomImageIndex}${globalSettings.IMAGE_PATH_SUFFIX}`;
};

const gameOver = () => {
    clearInterval(globalSettings.timeoutId);
    alert(`GAME OVER, HITS: ${globalSettings.score}`);
    startButton.style.display = 'block';
    globalSettings.score = 0;
    scoreDisplay.textContent = 0;
};

window.addEventListener('load', setup);
