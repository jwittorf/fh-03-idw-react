const productDB = {
    0: {
        name: 'Intel Core i7-9700K',
            img_src: 'https://placehold.it/250',
            img_alt: 'Placeholder 250x250px',
            price: 414,
            category: 'CPU',
    },
    1: {
        name: 'Some other CPU',
            img_src: 'https://placehold.it/500',
            img_alt: 'Placeholder 500x500px',
            price: 500.99,
            category: 'GFX',
    },
    2: {
        name: 'Some other CfahaflasdsaPU',
            img_src: 'https://placehold.it/500',
            img_alt: 'Placeholder 500x500px',
            price: 500.99,
            category: 'GFX',
    }
};

export function searchDB(search){
    let results = {};
    for (let key of Object.keys(productDB)) {
        let item = productDB[key];
        if (item.name.toUpperCase().includes(search.toUpperCase())) {
            //results.push({key: item});
            results[key] = item;
        }
    }
    return results;
};


export {productDB};