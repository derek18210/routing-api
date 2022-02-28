
import  express, { Express, Request, Response } from 'express';
import { QuoteHandlerInjector } from '.././lib/handlers/quote/injector';
import { QuoteHandler } from '.././lib/handlers/quote/quote';

import { QuoteToRatioHandlerInjector } from '.././lib/handlers/quote-to-ratio/injector';
import { QuoteToRatioHandler } from '.././lib/handlers/quote-to-ratio/quote-to-ratio';

const port = 5050;

const app: Express = express();

const quoteInjectorPromise = new QuoteHandlerInjector('quoteInjector').build()
const quoteHandler = new QuoteHandler('quote', quoteInjectorPromise)

const quoteToRatioInjectorPromise = new QuoteToRatioHandlerInjector('quoteToRatioInjector').build()
const quoteToRatioHandler = new QuoteToRatioHandler('quote', quoteToRatioInjectorPromise)

app.get('/quote', (request: Request, response: Response) => {
  console.log(request.cookies);
  
  quoteHandler: quoteHandler.handler;

  response.type('text/plain');
  response.send('/quote');
})


app.get('/quoteToRatio', (request: Request, response: Response) => {
  console.log(request.cookies);
  
  quoteToRatioHandler: quoteToRatioHandler.handler;

  response.type('text/plain');
  response.send('/quoteToRatio');
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)}
);
