import { cookies } from 'next/headers'
 
export default function CookiesShow() {
  const cookieStore = cookies()
  console.log(cookieStore.getAll());
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <h3 className='w-[300px] h-[600px]'>Cookies!!!!</h3>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ))
}