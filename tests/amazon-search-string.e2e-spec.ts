import * as AmazonAction from '../../action/search-text.action';
import * as AmazonValidation from '../../assertion/amazon.validate';


fixture `Getting Started with Amazon`
    .page `https://www.amazon.com/`;

test('My Amazon First test', async t => {
    await AmazonAction.searchOnAmazon('shoes');
    await AmazonAction.clickSearch();
    await AmazonValidation.assertSearchTextExists('"shoes"');
});