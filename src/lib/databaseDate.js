import moment from 'moment'

export const databaseDate = (date, isFinal, type) => {
    if (!date) return undefined
    if (isFinal) return moment(date.setHours(23, 59, 59)).format('YYYY-MM-DD HH:mm:ss')
    if (type === 'date') return moment(date).format('YYYY-MM-DD')
    else return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
