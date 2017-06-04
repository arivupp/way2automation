/**
 * Created by apandian on 6/2/2017.
 */

const totalShippingLabel = '.cart_total_delivery .text-right';
const totalShippingRate = '.cart_total_delivery .price';

class ShoppingCartSummaryPage{

  isShippingLabelPresent(){
    browser.waitForVisible(totalShippingLabel);
    return true;
  }
  getShippingRate(){
    return browser.getText(totalShippingRate);
  }
}

module.exports = new ShoppingCartSummaryPage();
