// src/app/ssr/page.js

import ClientComponent from './clientComponent';
import { cookies } from 'next/headers';
const SSRPage = async () => {
  // Server-side API call
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const res = await fetch('http://localhost:3000/api/data');
const serverData = await res.json();
// Access cookies on the server side
const cookieStore = cookies();
const preferredLanguage = cookieStore.get('preferredLanguage')?.value || 'en';
console.log("Lang: ", cookieStore.get('preferredLanguage')?.value)
// console.log("Preferred Language:", preferredLanguage);


  return <ClientComponent serverData={serverData} />;
};

export default SSRPage;
