import { DadsNotesPage } from './app.po';

describe('dads-notes App', () => {
  let page: DadsNotesPage;

  beforeEach(() => {
    page = new DadsNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
