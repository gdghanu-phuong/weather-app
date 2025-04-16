import { calculateLocalTime } from '../utils/calculate-local-time';

export default function Location({timezone,name}:{timezone:number;name:string}) {
const localTime = calculateLocalTime(timezone);
  return (
    <div className='flex justify-between w-xl my-10'>
        <h1 className='text-start text-2xl font-bold'>{name}</h1>
        <p className='text-center text-2xl'>{localTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</p>
    </div>
  )
}
