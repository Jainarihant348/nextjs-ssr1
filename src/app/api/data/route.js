// src/app/api/data/route.js

import { NextResponse } from 'next/server';
import { middleware } from '@/middleware';
export async function GET(req,res) {
    await middleware(req, res);
    console.log('Ok')
    const data = {
      message: 'This is server-side data fetched from the internal API.',
      preferredLanguage: req.cookies.get('preferredLanguage') || 'en',
    };
  
    return NextResponse.json(data);
}
