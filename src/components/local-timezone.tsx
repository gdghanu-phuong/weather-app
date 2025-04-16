import { calculateLocalTime } from '../utils/calculate-local-time';

export default function LocalTimezone({ timezone }: {timezone:number})  {
const localTime = calculateLocalTime(timezone);
  return (
    <div className='my-auto'>
      Local Time: {`
      ${localTime.toLocaleDateString(undefined, {day: '2-digit',month: 'short'})},
      ${localTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`}
    </div>
  )
}
