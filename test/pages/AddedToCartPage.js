/**
 * Created by apandian on 6/2/2017.
 */
import shoppingCartSummaryPage from './ShoppingCartSummaryPage';

const addedToCartPopupBlock='#layer_cart';
const addedToCartMessage='.layer_cart_product h2';
const productName='.product-name';
const proceedToCheckout='span*=Proceed to checkout'

class AddedToCartPage{

  proceedToCheckout(){
    $(addedToCartPopupBlock).$(proceedToCheckout).click();
    return shoppingCartSummaryPage;
  }

  getAddedToCartMessage(){
    return $(addedToCartPopupBlock).$(addedToCartMessage).getText().trim();
  }

  getProductName(){
    return $(addedToCartPopupBlock).$(productName).getText().trim();
  }
}

module.exports = new AddedToCartPage();