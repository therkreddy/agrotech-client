import { AgrotechClientPage } from './app.po';

describe('agrotech-client App', () => {
  let page: AgrotechClientPage;

  beforeEach(() => {
    page = new AgrotechClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
