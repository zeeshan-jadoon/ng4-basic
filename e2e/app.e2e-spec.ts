import { BasicPage } from './app.po';

describe('basic App', () => {
  let page: BasicPage;

  beforeEach(() => {
    page = new BasicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
