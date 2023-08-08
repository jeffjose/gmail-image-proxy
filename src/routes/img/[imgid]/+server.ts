import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ request }) => {

  console.log(request.headers.get('host'))


  const image = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAaADAAQAAAABAAAAAQAAAAD5Ip3+AAAAC0lEQVQIHWNgAAIAAAUAAY27m/MAAAAASUVORK5CYII=', 'base64');

  console.log(Request)



  return new Response(image,
    {
      status: 200,
      headers: new Headers({ 'Content-Type': 'image/png' })
    })

}
