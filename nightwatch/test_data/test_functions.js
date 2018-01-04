module.exports = {
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },
    enterFields: (selectors, inputs, browser) => {
        let fields = Object.getOwnPropertyNames(selectors)
        for (let i = 0; i < fields.length; i++) {
            browser
                .clearValue(selectors[fields[i]])
                .setValue(selectors[fields[i]], inputs[fields[i]])
                .verify.value(selectors[fields[i]], inputs[fields[i]])
        }
    }
}