/**
 * Created by apandian on 6/2/2017.
 */
import homePage from './pages/HomePage';

describe('Account creation Tests', () => {
  beforeEach(() => {
    browser.url('/');
  });

  it('search returns the expected number of products', () => {
    const authenticationPage = homePage
        .signIn();

    const createAccountPage = authenticationPage
        .emailAddressForNewAccount('abc@gg.com')
        .createAccount();

    createAccountPage
        .firstName('Apple')
        .lastName('Boat')
        .password('catcat')
        .addressFirstName('Apple')
        .addressLastName('Boat')
        .address1('123 Dog elephant')
        .city('fish')
        .zipCode('12345')
        .state('California')
        .mobile('1234567890')
        .register();

    //ToDo: Add assertions

  });
});