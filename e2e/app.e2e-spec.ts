import { MyStartProjectPage } from './app.po';

describe('my-start-project App', () => {
  let page: MyStartProjectPage;

  beforeEach(() => {
    page = new MyStartProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
