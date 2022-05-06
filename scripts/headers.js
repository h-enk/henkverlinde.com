import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const buildDir = path.join(__dirname, 'build');

function main() {
  const headers = `/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'self'; manifest-src 'self'; connect-src 'self' https://analytics.ventizo.com/api/event; font-src 'self'; frame-src https://app.netlify.com https://platform.twitter.com; frame-ancestors https://feeder.co; img-src 'self'; script-src 'self' https://netlify-cdp-loader.netlify.app/netlify.js https://platform.twitter.com/js/ https://platform.twitter.com/widgets.js https://analytics.ventizo.com/js/plausible.js; style-src 'self' 'unsafe-inline' https://github.githubassets.com/assets/
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin
  Feature-Policy: geolocation 'self'
  Cache-Control: public, max-age=31536000
  Permissions-Policy: accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()
`;

  const headersFile = path.join(buildDir, '_headers');
  fs.writeFileSync(headersFile, headers);
}

main();