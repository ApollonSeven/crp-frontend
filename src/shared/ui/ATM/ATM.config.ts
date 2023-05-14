export enum Screen { Main, AddMoney, GetCash, PaymentsAndTransfers, Balance, Confirmation, PinCode, Transfer }
export const ATM_TITLES = {
    [Screen.Main]: 'Главное меню',
    [Screen.AddMoney]: 'Положить на счет',
    [Screen.GetCash]: 'Снятие наличных',
    [Screen.PaymentsAndTransfers]: 'Платежи и переводы',
    [Screen.Balance]: 'Баланс',
    [Screen.Confirmation]: '',
    [Screen.PinCode]: 'Введите PIN код',
    [Screen.Transfer]: 'Переводы'
}
