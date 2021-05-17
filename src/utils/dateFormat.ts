export const dateFormat = (date_: Date , date__: Date) => {
    if(!(date_ && date__)) {
        return []
    }
    let hoursTwoDate = Math.ceil(Math.abs(new Date(date__).getTime() - new Date(date_).getTime()) / (1000 * 3600));
    let days = Math.floor(hoursTwoDate / 24);
    let hours = Math.ceil(+("0." + ("" + hoursTwoDate / 24).split('.')[1]) * 24)
    if(!days && !hours && !hoursTwoDate) {
        return []
    }
    return [days, hours, hoursTwoDate]
}

export const plusSevenDays = (date: Date) => {
    return new Date(date.valueOf() + (24 * 3600 * 1000) * 7)
}

export const diffDays = (date_: Date , date__: Date) => {
    let hoursTwoDate = Math.ceil(Math.abs(new Date(date__).getTime() - new Date(date_).getTime()) / (1000 * 3600));
    let days = Math.floor(hoursTwoDate / 24);
    return days
}