export default "Help me Obi-Wan Kenobi"




   



    

    

    

    // },
    // 'testing blank space for all input fields Wanted Queries Modify Wanted': browser => {
    //     browser

    //         .click(selectors.modifyWanted.modifyWanted1)
    //         .clearValue(selectors.modifyWanted.warrantID)
    //         .setValue(selectors.modifyWanted.warrantID, data.badData.blankFieldMessage.warrantID)
    //         .verify.value(selectors.modifyWanted.warrantID, data.badData.blankFieldMessage.warrantID)


    //         .clearValue(selectors.enterWanted.hdr)
    //         .setValue(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
    //         .verify.value(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)

    //         .clearValue(selectors.enterWanted.mke)
    //         .setValue(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
    //         .verify.value(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
    //         .clearValue(selectors.enterWanted.ori)
    //         .setValue(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
    //         .verify.value(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
    //         .clearValue(selectors.enterWanted.nam)
    //         .setValue(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
    //         .verify.value(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
    //         .clearValue(selectors.enterWanted.sex)
    //         .setValue(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
    //         .verify.value(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
    //         .clearValue(selectors.enterWanted.rac)
    //         .setValue(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
    //         .verify.value(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
    //         .clearValue(selectors.enterWanted.heig)
    //         .setValue(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
    //         .verify.value(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
    //         .clearValue(selectors.enterWanted.wiig)
    //         .setValue(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
    //         .verify.value(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
    //         .clearValue(selectors.enterWanted.hair)
    //         .setValue(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai)
    //         .verify.value(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
    //         .clearValue(selectors.enterWanted.offns)
    //         .setValue(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
    //         .verify.value(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
    //         .clearValue(selectors.enterWanted.dowv)
    //         .setValue(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)
    //         .verify.value(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)


    //         .click(selectors.enterWanted.submit)

    //         .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
    //     browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
    //     browser.click(selectors.enterWanted.clear)

    // },

    // 'Testing valid good data for all required fields Cancel Wanted': browser => {
    //     browser

    //         .click(selectors.cancelWanted.cancelWanted1)

    //         .clearValue(selectors.cancelWanted.warrantID)
    //         .setValue(selectors.cancelWanted.warrantID, data.goodData.input.warrantID)
    //         .verify.value(selectors.cancelWanted.warrantID, data.goodData.input.warrantID)


    //         .clearValue(selectors.cancelWanted.reasonForCancel)
    //         .setValue(selectors.cancelWanted.reasonForCancel, data.goodData.input.reasonforCancellation)
    //         .verify.value(selectors.cancelWanted.reasonForCancel, data.goodData.input.reasonforCancellation)

    //         .clearValue(selectors.cancelWanted.dateOfCancel)
    //         .setValue(selectors.cancelWanted.dateOfCancel, data.goodData.input.dateofcancellation)
    //         .verify.value(selectors.cancelWanted.dateOfCancel, data.goodData.input.dateofcancellation)
    //         .click(selectors.enterWanted.submit)

    //         .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
    //     browser.expect.element(selectors.enterWanted.textBlobText).text.to.equal(data.goodData.output.canceWantedTextBlob)
    //     browser.click(selectors.enterWanted.clear)

    // },
    // 'testing bad data for all input fields Wanted Queries Cancel Wanted': browser => {
    //     browser
    //         .click(selectors.cancelWanted.cancelWanted1)

    //         .clearValue(selectors.cancelWanted.warrantID)
    //         .setValue(selectors.cancelWanted.warrantID, data.badData.input.warrantID)
    //         .verify.value(selectors.cancelWanted.warrantID, data.badData.input.warrantID)


    //         .clearValue(selectors.cancelWanted.reasonForCancel)
    //         .setValue(selectors.cancelWanted.reasonForCancel, data.badData.input.reasonforCancellation)
    //         .verify.value(selectors.cancelWanted.reasonForCancel, data.badData.input.reasonforCancellation)

    //         .clearValue(selectors.cancelWanted.dateOfCancel)
    //         .setValue(selectors.cancelWanted.dateOfCancel, data.badData.input.dateofcancellation)
    //         .verify.value(selectors.cancelWanted.dateOfCancel, data.badData.input.dateofcancellation)
    //         .click(selectors.enterWanted.submit)

    //         .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
    //     browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
    //     browser.click(selectors.enterWanted.clear)
    // },
    // 'testing blank space for all input fields Wanted Queries Cancel Wanted': browser => {
    //     browser
    //         .click(selectors.cancelWanted.cancelWanted1)

    //         .clearValue(selectors.cancelWanted.warrantID)
    //         .setValue(selectors.cancelWanted.warrantID, data.badData.blankFieldMessage.warrantID)
    //         .verify.value(selectors.cancelWanted.warrantID, data.badData.blankFieldMessage.warrantID)


    //         .clearValue(selectors.cancelWanted.reasonForCancel)
    //         .setValue(selectors.cancelWanted.reasonForCancel, data.badData.blankFieldMessage.reasonforCancellation)
    //         .verify.value(selectors.cancelWanted.reasonForCancel, data.badData.blankFieldMessage.reasonforCancellation)
    //         .clearValue(selectors.cancelWanted.dateOfCancel)
    //         .setValue(selectors.cancelWanted.dateOfCancel, data.badData.blankFieldMessage.dateofcancellation)
    //         .verify.value(selectors.cancelWanted.dateOfCancel, data.badData.blankFieldMessage.dateofcancellation)
    //         .click(selectors.enterWanted.submit)
    //         .pause(2000)
    //         .waitForElementVisible(selectors.enterWanted.textBlobTitle, 2000)
    //     browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.cancelWantedBlankResult)
    //     browser.click(selectors.enterWanted.clear)

// },