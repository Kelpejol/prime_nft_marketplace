import dayjs from 'dayjs';


interface DateType {
  $d: Date;
}


export const TimeHelper = {
  secondsToMonths: (seconds: bigint | number | undefined | null): number | undefined => {
    // Return undefined if seconds is undefined or null
    if (seconds == null) return undefined;
    
    // Convert BigInt to number if necessary
    const secondsNum = typeof seconds === 'bigint' ? Number(seconds) : seconds;
    
    // Convert seconds to days first
    const days = secondsNum / (24 * 60 * 60);
    // Convert days to months (using 30.44 days per month average)
    return Math.round(days / 30.44);
  },

  formatDuration: (months: number | undefined | null): string => {
    // Handle undefined, null, or invalid input
    if (months == null) return 'Duration not available';
    if (months <= 0) return 'Invalid duration';
    
    // Format the duration
    return months === 1 ? '1 month' : `${months} months`;
  }
};


export const formattedTimeStamp = (time: DateType, date: DateType) => {
  const year = dayjs(date?.$d).year();
  const month = dayjs(date?.$d).month();
  const day = dayjs(date?.$d).date();
  const hour = dayjs(time?.$d).hour();
   const minute = dayjs(time?.$d).minute();
   const seconds = dayjs(time?.$d).second();
  const formattedTime = `${year}-${month + 1}-${day} ${hour}:${minute}:${seconds}`;  
  const timeStamp = dayjs(formattedTime).unix();
  return timeStamp;
  
};
