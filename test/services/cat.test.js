const app = require('../../src/app');

describe('\'cat\' service', () => {
  it('registered the service', () => {
    const service = app.service('cat');
    expect(service).toBeTruthy();
  });
});
