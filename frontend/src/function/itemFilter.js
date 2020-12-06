const itemFilter = (data, comparisonValue) => {

    comparisonValue = comparisonValue.toLowerCase()

    return data.map((item) => {
        if (item.expiration.toString().match(comparisonValue)) return item
        if (item.quantity.toString().match(comparisonValue)) return item
        if (item.categoryName.toLowerCase().match(comparisonValue)) return item
        if (item.unitName.toLowerCase().match(comparisonValue)) return item
        if (item.title.toLowerCase().match(comparisonValue)) return item
    })
}


export default itemFilter;