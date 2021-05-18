export const prepareDate = (date: Date):string => {
    const date_ = new Date(date.toUTCString());
    let format:string = ''
    format +=('0'+date_.getDate()).slice(-2) + '.';
    format +=('0'+(date_.getMonth() + 1)).slice(-2) + '.'
    format +=date_.getFullYear() + ' '
    format +=('0'+date_.getHours()).slice(-2) + ":"
    format +=('0'+date_.getMinutes()).slice(-2)
    return format
}
