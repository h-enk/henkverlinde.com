export const prerender = false;

import css from '../../styles/giscus.css?raw';

export async function ALL() {
  const res = new Response(css);

  res.headers.set('Content-Type', 'text/css');
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return res;
}

export async function OPTIONS() {
  const res = new Response(null, { status: 204 });
  
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return res;
}