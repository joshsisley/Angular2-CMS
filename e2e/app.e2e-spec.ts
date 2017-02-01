import { AngularCMSPage } from './app.po';

describe('angular-cms App', function() {
  let page: AngularCMSPage;

  beforeEach(() => {
    page = new AngularCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
