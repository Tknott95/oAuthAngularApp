import { OAuthAngularPage } from './app.po';

describe('o-auth-angular App', function() {
  let page: OAuthAngularPage;

  beforeEach(() => {
    page = new OAuthAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
