
export function calculateLocalTime(timezone: number){
    const now = new Date();
    const currentTime = now.getTime() + now.getTimezoneOffset() * 60000;
    var localTime = new Date(currentTime + timezone * 1000);
    return localTime;
}