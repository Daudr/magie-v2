import { MagieV2Page } from './app.po';

describe('magie-v2 App', function() {
  let page: MagieV2Page;

  beforeEach(() => {
    page = new MagieV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
