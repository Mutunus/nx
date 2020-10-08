import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('my-angular-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).eq(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).eq(3));
  })

});
