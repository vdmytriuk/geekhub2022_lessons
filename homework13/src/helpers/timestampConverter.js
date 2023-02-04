export const timestampConverter = (ts) => {
    const date = new Date(ts * 1000);
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${date.toLocaleDateString()}  ${hours}:${minutes}`;
}