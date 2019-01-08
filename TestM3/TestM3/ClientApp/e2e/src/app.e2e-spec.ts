// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { AppPage } from './app.po';

describe('TestM3 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: TestM3', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('TestM3');
  });
});
