import { IroncharactersPage } from './app.po';

describe('ironcharacters App', () => {
  let page: IroncharactersPage;

  beforeEach(() => {
    page = new IroncharactersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
