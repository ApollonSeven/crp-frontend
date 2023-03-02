# Frontend California RP

## Конвенция по разработке

1. Все компоненты рекомендуется разрабатывать в Storybook. Добавлять их в App и работать с целым React-приложением нет необходимости
2. Весь код должен проходить проверку linter, prettier и type-check. Код не проходящий проверку не будет принят
3. Разработка должна вестись в отдельной ветке по номеру задачи, после чего вы создаете pull request и ветка вливается в `develop`. Код сделанный в главных ветках (`main`, `develop`) будет удален без возможности восстановления. Подробнее про [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
4. Рекомендуется избегать использования внешних модулей, если в них нет реальной необходимости (логику красивого компонента из npm лучше написать самому, чем делать зависимым проект от чужого кода)

## Архитектура

Проект придерживается [Feature Sliced Design](https://feature-sliced.design/docs/get-started/overview) архитектуры в измененном виде:

-   Система слоев остается такой же, как и в оригинальной дизайн-системе
-   Структура отдельных файлов видоизменена и описана ниже

1. `shared` - многоразовый функционал, оторванная от специфики проекта (утилиты, шрифты, иконки, картинки, кнопки и т.д.)
2. `entities` - конкретные компоненты, которые пока что не представляют никакой бизнес-ценности (карточка пользователя, заказ, продукт)
3. `features` - взаимодействие с пользователем которое имеет какую-то бизнес-ценность (SendComment, AddToCart, UsersSearch)
4. `widgets` - композиционный слой для объединения сущностей и признаков в значимые блоки (список пользователей, профиль пользователя)
5. `pages` - слой для создания полных страниц из сущностей, функций и виджетов
6. `proccesses` - межстраничные сценарии (аутентификация)
7. `app` - общие настройки для приложения

Каждый слой может использовать только те слои, что находятся выше, и не может использовать слои ниже (например слой features может использовать entities и shared, но не может widgets или pages)

### Шпаргалка

![CheatSheet](https://feature-sliced.design/assets/images/criteria-916371355761a5dc865d81ed527c5db6.png)

### Примеры

![Examples](https://feature-sliced.design/assets/images/decompose-twitter-7b9a50f879d763c49305b3bf0751ee35.png)

![Examples 2](https://feature-sliced.design/assets/images/decompose-github-a0eeb839a4b5ef5c480a73726a4451b0.jpg)

## Структура файлов

-   `components/Button/Button.tsx` - файл компонента
-   `__mocks__/preview.ts` - моки для показа в сторибуке, в папку можно добавлять доп моки
-   `assets` - статичные фалы, картинки, шрифты и т.д.
-   `utils` - утилиты для компонента
-   `hooks` - хуки компонента (функции использующие хуки состояния или жизненного цикла)
-   `Button.typings.ts` - файл типов компонента
-   `Button.stories.tsx` - стори компонента
-   `Button.modules.scss` - стили компонента

Общий код переносится в директорию `shared`

## Конвенция по коммитам

Сообщения к коммитам следует делать согласно [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/),
в описании коммита требуется указывать номер задачи в виде `[CRP-123]`

Тип может быть одним из

-   **build**: Изменения билда, npm скрипты, обновление зависимостей
-   **ci**: Изменения в файлах CI (gitlab-ci, k8s)
-   **docs**: Если изменилась только документация
-   **feat**: Новая фича
-   **fix**: Исправление бага
-   **perf**: Изменения, которые улучшают производительность
-   **refactor**: Если ваши изменения это не баг и не фича
-   **style**: Изменения, которые не влияют на код (форматирование, пробелы, точки с запятой, и тд)
-   **test**: Добавление или правки тестов

Оригинал: [Angular Commit Notification Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

## Иконки

Иконки хранятся в [figma](https://www.figma.com/file/ueN2AgZCDhkGEGxyjB1qXu/UI-%D0%BA%D0%B8%D1%82?node-id=281%3A121&t=4jDIjhyoHetH5l90-0)

Чтобы добавить иконки необходимо

1. Попросить дизайнера добавить их в макет Figma
2. Скопировать файл `.env.sample` в `.env`
3. Заменить там figma_token на свой токен в фигма
4. Запустить скрипт `figma:export`
5. После этого иконки должны автоматически подгрузиться в `src/shared/icons`
