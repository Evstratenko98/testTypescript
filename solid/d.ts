// Dependency inversion principle
// Принцип инверсии зависимостей

// Модули высокого уровня не должны зависеть от модулей более низкого уровня
// Все они должны зависеть от абстракций, а абстракции не должны зависеть от деталей
// Сами детали как раз должны зависеть от абстракций

// Зависимости должны строиться ана абстракциях

interface MusicApi {
    getTracks(): void
}

//  Создание абстракции
class MusicClient implements MusicApi {
    client: MusicApi

    constructor(client: MusicApi) {
        this.client = client
    }

    getTracks(): void {
        this.client.getTracks()
    }
}

class YandexMusicApi implements MusicApi {
    getTracks(): void {}
}

class SpotifyApi implements MusicApi {
    getTracks(): void {}
}

class VKMusicApi implements MusicApi {
    getTracks(): void {}
}


// Мы работаем только с нашей асбтакцией, не завтрагивая основные модули
const MusicApp = () => {
    const API = new MusicClient(new SpotifyApi())

    API.getTracks()
}

