import keybaseTxt from './txt/keybase.txt';
import securityTxt from './txt/security.txt';

async function handleRequest(request) {
  const { url } = request
  if (url.includes('/.well-known/keybase.txt')) {
    return new Response(keybaseTxt, {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }
  if (url.includes('/.well-known/security.txt')) {
    return new Response(securityTxt, {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }
  return new Response('', {
    status: 404,
  })

}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})