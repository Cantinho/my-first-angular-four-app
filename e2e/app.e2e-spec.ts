import { MyFirstAngularFourAppPage } from './app.po';

describe('my-first-angular-four-app App', () => {
  let page: MyFirstAngularFourAppPage;

  beforeEach(() => {
    page = new MyFirstAngularFourAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
