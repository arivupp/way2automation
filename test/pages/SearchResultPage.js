/**
 * Created by apandian on 5/31/2017.
 */
import { expect } from 'chai';
import addedToCartPage from './AddedToCartPage';

const productCount='.product-count';
const productBlock='.ajax_block_product';
const productName='.product-name';
const productPrice='.right-block .price';
const productAddToCart='span=Add to cart';
const supportedColors='.color_to_pick_list li';

class SearchResult{

  addToCart(productNumber){
    $$(productBlock)[productNumber - 1].$(productAddToCart).click();
    return addedToCartPage;
  }

  getTotalNumberOfProducts(){
    const productCountText = browser.elements(productCount).value[0].getText();
    return productCountText.split(' ')[5];
  }

  getProductName(productNumber){
    return $$(productBlock)[productNumber - 1].$(productName).getText().trim();
  }

  getProductPrice(productNumber){
    return $$(productBlock)[productNumber - 1].$(productPrice).getText().trim();
  }

  getNumberOfSupportedColors(productNumber){
    return $$(productBlock)[productNumber - 1].$$(supportedColors).length;
  }
}

module.exports = new SearchResult();
