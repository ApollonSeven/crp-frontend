export enum Screen { Main, AddMoney, GetCash, History, Balance }
export const ATM_TITLES = {
    [Screen.Main]: 'Главное меню',
    [Screen.AddMoney]: 'Положить на счет',
    [Screen.GetCash]: 'Снятие наличных',
    [Screen.History]: 'Операции',
    [Screen.Balance]: 'Баланс',
}
