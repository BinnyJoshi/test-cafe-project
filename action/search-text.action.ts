import { t,Selector } from 'testcafe';


export async function searchOnAmazon(searchText: string){
    const searchElement = Selector('div')
                    .filter('.nav-search-field ');
    if(searchText !== '') {
        await t.typeText(searchElement,searchText);
    }
}

export async function clickSearch(){
    const clickSearch = Selector('div')
                       .filter('.nav-search-submit')
                       .find('input')
                       .filter('.nav-input');
    await t.click(clickSearch);
    }