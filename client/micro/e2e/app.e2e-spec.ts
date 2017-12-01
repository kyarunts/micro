import { MicroPage } from './app.po';

describe('micro App', () => {
  let page: MicroPage;

  beforeEach(() => {
    page = new MicroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
