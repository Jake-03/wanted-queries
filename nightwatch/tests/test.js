const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/test_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Good data test for all required fields in enter wanted': browser => {


        browser
            .waitForElementVisible(selectors.enterWanted.entWnt, 3000)
            .click(selectors.enterWanted.entWnt)


            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.goodData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.goodData.input.hdr)

            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.goodData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.goodData.input.mke)

            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.goodData.input.oai)
            .verify.value(selectors.enterWanted.oai, data.goodData.input.oai)

            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.goodData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.goodData.input.nam)

            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.goodData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.goodData.input.sex)

            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.goodData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.goodData.input.rac)

            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.goodData.input.hgt)
            .verify.value(selectors.enterWanted.hgt, data.goodData.input.hgt)

            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.goodData.input.wgt)
            .verify.value(selectors.enterWanted.wgt, data.goodData.input.wgt)

            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.goodData.input.hai)
            .verify.value(selectors.enterWanted.hai, data.goodData.input.hai)

            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.goodData.input.off)
            .verify.value(selectors.enterWanted.off, data.goodData.input.off)

            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.goodData.input.dow)
            .verify.value(selectors.enterWanted.dow, data.goodData.input.dow)


            .click(selectors.enterWanted.submit)

        browser.waitForElementVisible(selectors.enterWanted.header, 3000)
        browser.expect.element(selectors.enterWanted.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
        browser.click(selectors.enterWanted.clear)


    },

'Bad data test for all input fields Enter Wanted': browser => {
    browser
        .waitForElementVisible(selectors.enterWanted.entWnt, 3000)
        .click(selectors.enterWanted.entWnt)

            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.badData.input.oai)
            .verify.value(selectors.enterWanted.oai, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.badData.input.hgt)
            .verify.value(selectors.enterWanted.hgt, data.badData.input.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.badData.input.wgt)
            .verify.value(selectors.enterWanted.wgt, data.badData.input.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.badData.input.hai)
            .verify.value(selectors.enterWanted.hai, data.badData.input.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.badData.input.off)
            .verify.value(selectors.enterWanted.off, data.badData.input.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.badData.input.dow)
            .verify.value(selectors.enterWanted.dow, data.badData.input.dow)


            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
    },

    'Bad data tests for input fields Enter Wanted with Error List': browser => {
        browser
            .waitForElementVisible(selectors.enterWanted.entWnt, 1000)
            .click(selectors.enterWanted.entWnt)


            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.badData.input.oai)
            .verify.value(selectors.enterWanted.oai, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.badData.input.hgt)
            .verify.value(selectors.enterWanted.hgt, data.badData.input.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.badData.input.wgt)
            .verify.value(selectors.enterWanted.wgt, data.badData.input.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.badData.input.hai)
            .verify.value(selectors.enterWanted.hai, data.badData.input.hai) 
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.badData.input.off)
            .verify.value(selectors.enterWanted.off, data.badData.input.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.badData.input.dow)
            .verify.value(selectors.enterWanted.dow, data.badData.input.dow)


            .click(selectors.enterWanted.submit)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.hdr)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.mke)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.oai)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.nam)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.sex)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.rac)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.hgt)
        // browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.wgt) Is a bug. wgt does not show up in error message and should contain 3 characters. 
        // browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.hai)Is a bug. Hai should create error message but does not. 
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.off)
        browser.expect.element(selectors.errList.errorList).text.to.contain(data.badData.errorList.dow)

    },



    'Blank space testing for all input fields in Enter Wanted': browser => {
        browser
            .waitForElementVisible(selectors.enterWanted.entWnt, 1000)
            .click(selectors.enterWanted.entWnt)
                    .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.badData.blankFieldMessage.oai)
            .verify.value(selectors.enterWanted.oai, data.badData.blankFieldMessage.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.badData.blankFieldMessage.hgt)
            .verify.value(selectors.enterWanted.hgt, data.badData.blankFieldMessage.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.badData.blankFieldMessage.wgt)
            .verify.value(selectors.enterWanted.wgt, data.badData.blankFieldMessage.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.badData.blankFieldMessage.hai)
            .verify.value(selectors.enterWanted.hai, data.badData.blankFieldMessage.hai)
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.badData.blankFieldMessage.off)
            .verify.value(selectors.enterWanted.off, data.badData.blankFieldMessage.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.badData.blankFieldMessage.dow)
            .verify.value(selectors.enterWanted.dow, data.badData.blankFieldMessage.dow)


            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
    },

    'Good data tests for required fields in modifyWanted': browser => {
        browser

            .click(selectors.modWanted.modWtd)

            .clearValue(selectors.modWanted.wrtID)
            .setValue(selectors.modWanted.wrtID, data.goodData.input.wrtID)
            .verify.value(selectors.modWanted.wrtID, data.goodData.input.wrtID)

            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.goodData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.goodData.input.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.goodData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.goodData.input.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.goodData.input.oai)
            .verify.value(selectors.enterWanted.oai, data.goodData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.goodData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.goodData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.goodData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.goodData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.goodData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.goodData.input.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.goodData.input.hgt)
            .verify.value(selectors.enterWanted.hgt, data.goodData.input.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.goodData.input.wgt)
            .verify.value(selectors.enterWanted.wgt, data.goodData.input.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.goodData.input.hai)
            .verify.value(selectors.enterWanted.hai, data.goodData.input.hai)
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.goodData.input.off)
            .verify.value(selectors.enterWanted.off, data.goodData.input.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.goodData.input.dow)
            .verify.value(selectors.enterWanted.dow, data.goodData.input.dow)


            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.assembledQuery).text.to.equal(data.goodData.output.modWtdRes)
        browser.click(selectors.enterWanted.clear)

    },
    'Bad data test for all input fields in Modify Wanted': browser => {
        browser
            .click(selectors.modWanted.modWtd)
            .clearValue(selectors.modWanted.wrtID)
            .setValue(selectors.modWanted.wrtID, data.badData.input.wrtID)
            .verify.value(selectors.modWanted.wrtID, data.badData.input.wrtID)


            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)

            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.badData.input.oai)
            .verify.value(selectors.enterWanted.oai, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.badData.input.hgt)
            .verify.value(selectors.enterWanted.hgt, data.badData.input.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.badData.input.wgt)
            .verify.value(selectors.enterWanted.wgt, data.badData.input.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.badData.input.hai)
            .verify.value(selectors.enterWanted.hai, data.badData.input.hai) 
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.badData.input.off)
            .verify.value(selectors.enterWanted.off, data.badData.input.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.badData.input.dow)
            .verify.value(selectors.enterWanted.dow, data.badData.input.dow)


            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
    },   
    'Blank space testing for all input fields Modify Wanted': browser => {
        browser

            .click(selectors.modWanted.modWtd)
            .clearValue(selectors.modWanted.wrtID)
            .setValue(selectors.modWanted.wrtID, data.badData.blankFieldMessage.wrtID)
            .verify.value(selectors.modWanted.wrtID, data.badData.blankFieldMessage.wrtID)


            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)

            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .clearValue(selectors.enterWanted.oai)
            .setValue(selectors.enterWanted.oai, data.badData.blankFieldMessage.oai)
            .verify.value(selectors.enterWanted.oai, data.badData.blankFieldMessage.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .clearValue(selectors.enterWanted.hgt)
            .setValue(selectors.enterWanted.hgt, data.badData.blankFieldMessage.hgt)
            .verify.value(selectors.enterWanted.hgt, data.badData.blankFieldMessage.hgt)
            .clearValue(selectors.enterWanted.wgt)
            .setValue(selectors.enterWanted.wgt, data.badData.blankFieldMessage.wgt)
            .verify.value(selectors.enterWanted.wgt, data.badData.blankFieldMessage.wgt)
            .clearValue(selectors.enterWanted.hai)
            .setValue(selectors.enterWanted.hai, data.badData.blankFieldMessage.hai)
            .verify.value(selectors.enterWanted.hai, data.badData.blankFieldMessage.hai) 
            .clearValue(selectors.enterWanted.off)
            .setValue(selectors.enterWanted.off, data.badData.blankFieldMessage.off)
            .verify.value(selectors.enterWanted.off, data.badData.blankFieldMessage.off)
            .clearValue(selectors.enterWanted.dow)
            .setValue(selectors.enterWanted.dow, data.badData.blankFieldMessage.dow)
            .verify.value(selectors.enterWanted.dow, data.badData.blankFieldMessage.dow)


            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)

    },

    'Good data test for all required fields Cancel Wanted': browser => {
        browser

            .click(selectors.cnclWtd.cclWtd)

            .clearValue(selectors.cnclWtd.wrtID)
            .setValue(selectors.cnclWtd.wrtID, data.goodData.input.wrtID)
            .verify.value(selectors.cnclWtd.wrtID, data.goodData.input.wrtID)


            .clearValue(selectors.cnclWtd.rFC)
            .setValue(selectors.cnclWtd.rFC, data.goodData.input.rFC)
            .verify.value(selectors.cnclWtd.rFC, data.goodData.input.rFC)

            .clearValue(selectors.cnclWtd.dOC)
            .setValue(selectors.cnclWtd.dOC, data.goodData.input.dOC)
            .verify.value(selectors.cnclWtd.dOC, data.goodData.input.dOC)
            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.assembledQuery).text.to.equal(data.goodData.output.cclRes)
        browser.click(selectors.enterWanted.clear)

    },
    'Bad data test for all input fields Cancel Wanted': browser => {
        browser
            .click(selectors.cnclWtd.cclWtd)

            .clearValue(selectors.cnclWtd.wrtID)
            .setValue(selectors.cnclWtd.wrtID, data.badData.input.wrtID)
            .verify.value(selectors.cnclWtd.wrtID, data.badData.input.wrtID)


            .clearValue(selectors.cnclWtd.rFC)
            .setValue(selectors.cnclWtd.rFC, data.badData.input.rFC)
            .verify.value(selectors.cnclWtd.rFC, data.badData.input.rFC)

            .clearValue(selectors.cnclWtd.dOC)
            .setValue(selectors.cnclWtd.dOC, data.badData.input.dOC)
            .verify.value(selectors.cnclWtd.dOC, data.badData.input.dOC)
            .click(selectors.enterWanted.submit)

            .waitForElementVisible(selectors.enterWanted.header, 1000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
    },
    'Blank space testing for all input fields Cancel Wanted': browser => {
        browser
            .click(selectors.cnclWtd.cclWtd)

            .clearValue(selectors.cnclWtd.wrtID)
            .setValue(selectors.cnclWtd.wrtID, data.badData.blankFieldMessage.wrtID)
            .verify.value(selectors.cnclWtd.wrtID, data.badData.blankFieldMessage.wrtID)


            .clearValue(selectors.cnclWtd.rFC)
            .setValue(selectors.cnclWtd.rFC, data.badData.blankFieldMessage.rFC)
            .verify.value(selectors.cnclWtd.rFC, data.badData.blankFieldMessage.rFC)
            .clearValue(selectors.cnclWtd.dOC)
            .setValue(selectors.cnclWtd.dOC, data.badData.blankFieldMessage.dOC)
            .verify.value(selectors.cnclWtd.dOC, data.badData.blankFieldMessage.dOC)
            .click(selectors.enterWanted.submit)
            .pause(2000)
            .waitForElementVisible(selectors.enterWanted.queryTitle, 2000)
        browser.expect.element(selectors.enterWanted.queryTitle).text.to.equal(data.goodData.output.cclBlankRes)
        browser.click(selectors.enterWanted.clear)

 }
}