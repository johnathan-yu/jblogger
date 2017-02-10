import { JbloggerPage } from './app.po';

describe('jblogger App', function() {
  let page: JbloggerPage;

  beforeEach(() => {
    page = new JbloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
