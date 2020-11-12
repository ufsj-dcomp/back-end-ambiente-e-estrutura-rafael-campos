import { JogadorWebPage } from './app.po';

describe('jogador-web App', function() {
  let page: JogadorWebPage;

  beforeEach(() => {
    page = new JogadorWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
