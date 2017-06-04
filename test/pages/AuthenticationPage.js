/**
 * Created by apandian on 6/2/2017.
 */
import createAccountPage from './CreateAccountPage';

const createAccountEmailAddress='#create-account_form .is_required'
const createAccountButton='span*=Create an account';

class AuthenticationPage{

  emailAddressForNewAccount(email){
    browser.setValue(createAccountEmailAddress,'abc@gw.com');
    return this;
  }

  createAccount(){
    browser.click(createAccountButton);
    return createAccountPage;
  }
}

module.exports = new AuthenticationPage();
