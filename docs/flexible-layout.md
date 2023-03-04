# Резиновая верстка

Так как проект делается под компьютеры, то и от фронтенда требуется чтобы он поддерживал резиновую верстку, а не адаптивную например. Для этого существует специальный функционал позволяющий верстать по макетам в пикселях и преобразовывать это в специальный формат rem.

## Как правильно писать стили
1. Вы верстаете компонент по пикселям из фигма. Допустим у вас получается что-то такое:
```scss
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Brutal Type';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
}
```
2. После этого все размеры в пикселях необходимо обернуть в функцию `pxToRem`, вот так:
```scss
@import "src/shared/styles/pxToRem";

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Brutal Type';
    font-style: normal;
    font-weight: 500;
    font-size: pxToRem(14px);
    line-height: pxToRem(17px);
    color: #fff;
}
```
3. После этого желательно так же добавить масштаб для вашего компонента, чтобы в случае изменений его можно было легко изменить:
```scss
@import "src/shared/styles/pxToRem";

$scale: 2;

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Brutal Type';
  font-style: normal;
  font-weight: 500;
  font-size: pxToRem(14px, $scale);
  line-height: pxToRem(17px, $scale);
  color: #fff;
}
```
4. Теперь данный компонент легко изменяется, можно легко добавить ему разные размеры и при этом поддерживается резиновая верстка
