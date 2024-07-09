import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  // console.log(req)
    const cookies= await req.cookies.get('preferredLanguage');
    // console.log("cookies",cookies);
    const response = NextResponse.next();
    console.log(typeof(cookies));
    response.cookies.set('preferredLanguage',cookies);
    // console.log('Res: ' ,response.cookies);
  return response;
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }