import { HandsonPage } from './app.po';

describe('handson App', function() {
  let page: HandsonPage;

  beforeEach(() => {
    page = new HandsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works! hoge');
  });
});
