import { AngularProjectSoccerPage } from './app.po';

describe('angular-project-soccer App', function() {
  let page: AngularProjectSoccerPage;

  beforeEach(() => {
    page = new AngularProjectSoccerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
