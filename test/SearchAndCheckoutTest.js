import homePage from './pages/HomePage';
import { expect } from 'chai';

//enableLocalTests();
describe('Search and Checkout Tests', () => {
  beforeEach(() => {
    browser.url('/');
  });

  it('search returns the expected number of products', () => {
    const searchResultPage = homePage
        .search('shirt');
    const numberOfProducts = searchResultPage
        .getTotalNumberOfProducts();

    expect(numberOfProducts).to.equal('1');
    expect(searchResultPage.getProductName(1)).to.equal('Faded Short Sleeve T-shirts');
    expect(searchResultPage.getProductPrice(1)).to.equal('$16.51');
    expect(searchResultPage.getNumberOfSupportedColors(1)).to.equal(2);
  });

  it('search returns the expected number of products for dress', () => {
    const searchResultPage = homePage
        .search('dress');
    const numberOfProducts = searchResultPage
        .getTotalNumberOfProducts();

    expect(numberOfProducts).to.equal('7');
    expect(searchResultPage.getProductName(1)).to.equal('Printed Summer Dress');
    expect(searchResultPage.getProductPrice(1)).to.equal('$28.98');
    expect(searchResultPage.getNumberOfSupportedColors(1)).to.equal(4);
  });

  it('search and add to cart', () => {
    const searchResultPage = homePage
        .search('dress');
    const addedToCartPage = searchResultPage
        .addToCart(1);

    expect(addedToCartPage.getAddedToCartMessage()).to.equal('Product successfully added to your shopping cart');
    expect(addedToCartPage.getProductName(),'Printed Summer Dress');
  });

  it('proceed to checkout', () => {
    const searchResultPage = homePage
        .search('dress');

    const addedToCartPage = searchResultPage
        .addToCart(1);

    const shoppingCartSummaryPage = addedToCartPage
        .proceedToCheckout();

    expect(shoppingCartSummaryPage.isShippingLabelPresent()).to.be.true;
    expect(shoppingCartSummaryPage.getShippingRate()).to.equal('$2.00');
  });
});

