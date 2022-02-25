
import  express, { Express, Request, Response } from 'express';
import { QuoteHandlerInjector } from '.././lib/handlers/quote/injector';
import { QuoteHandler } from '.././lib/handlers/quote/quote';

const port = 5050;

const app: Express = express();

const quoteInjectorPromise = new QuoteHandlerInjector('quoteInjector').build()
const quoteHandler = new QuoteHandler('quote', quoteInjectorPromise)


app.get('/', (request: Request, response: Response) => {
  console.log(request.cookies);
  
  quoteHandler: quoteHandler.handler;

  response.type('text/plain');
  response.send('Homepage');
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)}
);
