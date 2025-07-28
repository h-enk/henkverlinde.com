export const prerender = false;

import css from '../../styles/giscus.css?raw';

export async function ALL() {
  const res = new Response(css);

  res.headers.set('Content-Type', 'text/css');
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, User-Agent');
  res.headers.set('Access-Control-Max-Age', '86400');
  res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return res;
}

export async function OPTIONS() {
  const res = new Response(null, { status: 204 });
  
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, User-Agent');
  res.headers.set('Access-Control-Max-Age', '86400');
  
  return res;
}