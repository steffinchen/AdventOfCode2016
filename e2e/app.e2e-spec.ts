import { AdventOfCode2016Page } from './app.po';

describe('advent-of-code-2016 App', function() {
  let page: AdventOfCode2016Page;

  beforeEach(() => {
    page = new AdventOfCode2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
