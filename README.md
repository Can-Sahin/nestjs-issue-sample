## Nestjs Issue Example

**Issue**: https://github.com/nestjs/nest/issues/2291

## Running

`npm install` & `npm start`

**Go to:** `localhost:3000/app`

## Issue

Middleware's `console.log()` is not getting hit with current the pathless controller

However, swtich to `@Controller('test')` in `app.controller` and this time middleware gets hit when you go to `localhost:3000/app/test`

> Hint: There is a global prefix `app` in `app.module`
