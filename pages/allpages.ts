import { Page } from "@playwright/test";
import { LoginPage } from "./signin";



export class AllPages {
  readonly loginpage:LoginPage;
  

  constructor(page: Page) {
    this.page = page;
    this.loginpage= new LoginPage(page);
  
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
