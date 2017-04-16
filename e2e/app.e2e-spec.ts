import { SwaggerToolsPage } from './app.po';

describe('swagger-tools App', () => {
  let page: SwaggerToolsPage;

  beforeEach(() => {
    page = new SwaggerToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
