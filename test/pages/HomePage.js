/**
 * Created by apandian on 5/31/2017.
 */
import searchResultPage from './SearchResultPage';
import authenticationPage from './AuthenticationPage';

const searchTextBox='.search_query';
const searchButton='[name="submit_search"]';
const signIn='.login';

class HomePage{

  search(value){
    browser.setValue(searchTextBox, value);
    browser.click(searchButton);
    return searchResultPage;
  }

  signIn(){
    browser.click(signIn);
    return authenticationPage;
  }
}

module.exports = new HomePage();
