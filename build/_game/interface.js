// Этот файл содержит всё для взаимодействия с окружением

// В index.html - пример размещения приложения в контейнере на странице
// Приложение загружается в тег с id="root"
// класс game нужен для изолирования базовых стилей
// <div id="container" style="position: absolute;left:100px;top:100px;right: 100px; bottom: 100px;">
//   <div id="root" class="game" oninit="onAppReadyHandler"></div>
// </div>

// Установить название игры.
// Просто переменная - используется внутри этого файла для удобства,
// передается ниже в конфигурацию, сама на приложение не влияет
// window.gameId = "LIGHTUP"; //"VIBE"; //"SNOWBALL"; //"LIGHTUP";

// Указать, авторизован пользователь или нет
// Просто переменная - используется внутри этого файла для удобства,
// передается ниже в конфигурацию, сама на приложение не влияет
// window.userAuthorized = true; //true; false;

// Указать, закончилась ли акция или нет
// Просто переменная - используется внутри этого файла для удобства,
// передается ниже в конфигурацию, сама на приложение не влияет
window.activityIsOver = false; // true; false;

// Также функция для использования внутри этого файла, заглушка
// Имитирует закрытие попапа с игрой
// window.closeGamePopup = function () {
//   console.log("closeGamePopup");
// };

// // Также функция для использования внутри этого файла, заглушка
// // Имитирует переход к регистрации чека
// window.registerBill = function () {
//   console.log("registerBill");
// };

// // Также функция для использования внутри этого файла, заглушка
// // Имитирует переход к регистрации пользователя
// window.signUp = function () {
//   console.log("signUp");
// };

// Функция инициализации приложения. Вызывается из обработчика в Index.html,
// см. <div id="root" class="game" oninit="onAppReadyHandler">
function onAppReadyHandler(app) {
    // Функция обработки ресайза страницы.
    // Берется элемент-контейнер и передается его размер в приложение.
    // Это как пример, реализация может быть любой, главное, передать размеры для приложения
    function updateLayout() {
        var container = document.getElementById('container');
        app.resize(container.clientWidth, container.clientHeight);
    }
    updateLayout();

    // Инициализация веб-страницы
    // Обновление размеров приложения при готовности страницы
    function initHandler() {
        updateLayout();
    }

    // Ресайз веб-страницы
    // Обновление размеров приложения при ресайзе страницы
    function resizeHandler() {
        updateLayout();
    }

    // Подписываемся на события изменения, чтобы вызывать updateLayout
    // Обновление размеров приложения можно делать и иначе -
    // здесь просто пример использования
    window.addEventListener('load', initHandler);
    window.addEventListener('resize', resizeHandler);

    function removeGame() {
        window.removeEventListener('load', initHandler);
        window.removeEventListener('resize', resizeHandler);

        document.removeEventListener('removeGame', removeGame);
    }

    document.addEventListener('removeGame', removeGame);

    var data = {
        games: {
            1: {
                id: 'VIBE',
                request1: { url: '/api/TentGame1.json', method: 'GET' },
                request2: { url: '/api/TentGame2.json', method: 'GET' },
            },
            2: {
                id: 'SNOWBALL',
                request1: { url: '/api/TentGame1.json', method: 'GET' },
                request2: { url: '/api/TentGame2.json', method: 'GET' },
            },
            3: {
                id: 'LIGHTUP',
                request1: { url: '/api/TentGame1.json', method: 'GET' },
                request2: { url: '/api/TentGame2.json', method: 'GET' },
            },
            4: {
                id: 'LOSYANTA',
                request0: { url: '/api/SecretGame0.json', method: 'GET' },
                request1: { url: '/api/SecretGame1.json', method: 'GET' },
                request2: { url: '/api/SecretGame2.json', method: 'GET' },
            },
            index: { VIBE: 1, SNOWBALL: 2, LIGHTUP: 3, LOSYANTA: 4 },
        },
        closeHandler: window.closeGamePopup,
        registerHandler: window.registerBill,
        signUpHandler: window.signUp,
        switchToMobileWidth: 480,
        userNotAuthorized: !window.userAuthorized,
        activityIsOver: window.activityIsOver,
    };

    // Передается номер текущей игры (внутри приложения игры идентифицируются по номерам)
    data.gameIndex = data.games.index[window.gameId];
    // Передаются данные текущей игры
    data.gameData = data.games[data.gameIndex];

    app.setData(data);
}
