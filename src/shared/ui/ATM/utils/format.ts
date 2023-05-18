export const formatPhoneNumber = (phoneNumber:string) => {
    console.log(phoneNumber)
    const digitsOnly = phoneNumber.replace(/\D/g, ''); // Фильтрация только цифр
    const areaCode = digitsOnly.slice(0, 3).padEnd(3, '_');
    const firstPart = digitsOnly.slice(3, 6).padEnd(3, '_');
    const secondPart = digitsOnly.slice(6, 8).padEnd(2, '_');
    const thirdPart = digitsOnly.slice(8, 10).padEnd(2, '_');
    const formattedNumber = `(${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    return formattedNumber;
  };

 export const formatRecipientNumber = (recipient: string) => {
    const formattedRecipientNumber = recipient.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')
    return formattedRecipientNumber.trim()
}

