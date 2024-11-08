export const stringToDate = (dateString: string): Date => {
    const data = dateString.split('/')
        .map((value: string): number => {
            return parseInt(value);
        });
    // year, month, day (month is 0 based)
    return new Date(data[2], data[1] - 1, data[0]);
};