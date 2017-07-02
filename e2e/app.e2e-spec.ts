import { AngularPolartalksExamplePage } from './app.po';

describe('angular-polartalks-example App', () => {
  let page: AngularPolartalksExamplePage;

  beforeEach(() => {
    page = new AngularPolartalksExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
