// steps.js
import { spec as _spec } from 'pactum';
import { Given, When, Then, Before } from '@cucumber/cucumber';

let spec = _spec();

Before(() => { spec = _spec(); });

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});