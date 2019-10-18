export function formatDate(date: Date, separator?: string) {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    if (!separator) {
        separator = '.'
    }

    return '' 
        + year + separator 
        + (month < 10 ? '0' + month : month) + separator 
        + (day < 10 ? '0' + day : day);
}

export function toDate(dateString?: string, separator?: string) {
    if (!dateString) {
        return;
    }

    if (!separator) {
        separator = '.'
    }
    
    const date = dateString.split(separator)

    return new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]))
}

export function formatUserDate(date?: Date) {
    if (!date) {
        return;
    }

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const separator = '.'

    return '' 
        + (day < 10 ? '0' + day : day) + separator 
        + (month < 10 ? '0' + month : month) + separator 
        + year
}