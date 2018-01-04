module.exports = {
    //the 'key' for the fields should match the key of the fields' values in your test_data
    enterWanted: {
        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        nam: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        rac: 'input[name="racInput"]',
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hai: 'input[name="haiInput"]',
        off: 'input[name="offInput"]',
        dow: 'input[name="dowInput"]',
        oln: 'input[name="olnInput"]',
        ols: 'input[name="olsInput"]',
        old: 'input[name="oldInput"]',
        lic: 'input[name="licInput"]',
        lis: 'input[name="lisInput"]',
        lid: 'input[name="lidInput"]',
        entWnt: 'a[href="#/enter"]',
        submit: 'button[id="saveBtn"]',
        clear: 'button[id="clearBtn"]',
        header: 'h4[id="validHeader"]',
        queryTitle: 'span[name="queryTitle"]',
        assembledQuery: 'span[name="queryBody"]'
    },
    errList: {
        errorList: 'ul[id="errorList"]',
    },
    modWanted: {
        modWtd: 'a[href="#/modify"]',
        wrtID: 'input[name="widInput"]'
    }, 
    cnclWtd: {
        cclWtd: 'a[href="#/cancel"]',
        wrtID: 'input[name="widInput"]',
        rFC: 'input[name="resInput"]',
        dOC: 'input[name="datInput"]'
    }
}