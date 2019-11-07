import { t,Selector } from 'testcafe';

export async function assertSearchTextExists(serachText: string){
    const searchText = Selector('span')
                   .filter('.a-color-state');
    const searchValue = await searchText.innerText;
    await t.expect(searchValue).eql(serachText,'Search strings are not matching');
    }