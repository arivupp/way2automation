/**
 * Created by apandian on 6/2/2017.
 */

const firstName='#customer_firstname';
const lastName='#customer_lastname';
const password='#passwd';
const addressFirstName='#firstname';
const addressLastName='#lastname';
const address1='#address1';
const city='#city';
const state='#id_state';
const zipCode='#postcode';
const mobile='#phone_mobile';
const register='span*=Register';

class createAccountPage{

  firstName(value){
    browser.setValue(firstName, value);
    return this;
  }

  lastName(value){
    browser.setValue(lastName, value);
    return this;
  }

  password(value){
    browser.setValue(password, value);
    return this;
  }

  addressFirstName(value){
    browser.setValue(addressFirstName, value);
    return this;
  }

  addressLastName(value){
    browser.setValue(addressLastName, value);
    return this;
  }

  address1(value){
    browser.setValue(address1, value);
    return this;
  }

  city(value){
    browser.setValue(city, value);
    return this;
  }

  state(value){
    browser.selectByValue(state, value);
    return this;
  }

  zipCode(value){
    browser.setValue(zipCode, value);
    return this;
  }

  mobile(value){
    browser.setValue(mobile, value);
    return this;
  }

  register(value){
    browser.click(register);
    return this;
  }
}

module.exports = new createAccountPage();
