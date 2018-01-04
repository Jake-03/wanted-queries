module.exports = {
    goodData: {
        input: {

            hdr: 'Wowzza339!',
            mke: 'Sr&*',
            oai: 'arrow1234',
            nam: 'Clark Kent',
            sex: 'M',
            rac: 'W',
            hgt: '510',
            wgt: '195',
            hai: 'brown',
            off: 'drivingWd',
            dow: '01012018',
            wrtID: '1234567890',
            rFC: 'Nolongervalid',
            dOC: '12242017'
        },
        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: "Wowzza339!.Sr&*.arrow1234.Clark Kent.M.W.510.195.brown.drivingWd.01012018......",
            badDataResult: 'No results generated due to error.',
            modWtdRes: '1234567890.Wowzza339!.Sr&*.arrow1234.Clark Kent.M.W.510.195.brown.drivingWd.01012018......',
            cclRes: '1234567890.Nolongervalid.12242017',
            cclBlankRes: 'Submit query for validation.'
        },

    },
    badData: {
        input: {
            wrtID: '012345',
            dOC: '333',
            rFC: '9999H',
            wrtID: '1235',
            hdr: '12345',
            mke: 'A',
            oai: 'HOW',
            nam: 'Ba',
            sex: '33',
            rac: '93',
            hgt: '37',
            wgt: '00',
            hai: '*#&',
            off: '12',
            dow: '02452018',
            oln: '',
            ols: '',
            old: '',
            lic: '',
            lis: '',
            lid: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: '',
        },
        errorList: {
            hdr: 'The "Header" field should be between 9 and 19 characters long.',
            mke: 'The "MKE" field should be between 2 and 4 characters long.',
            oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
            nam: 'The "Name" field should be between 3 and 30 characters long.',
            sex: 'The "Sex" field should be 1 character long.',
            rac: 'The "Race" field should be 1 character long.',
            hgt: 'The "Height" field should be 3 characters long.',
            wgt: 'The "Weight" field can only include numeric characters.',
            hai: 'The "Hair" field should be between 3 and 10 characters long',
            off: 'The "Offense" field should be between 5 and 15 characters long.',
            dow: 'The "Date of Warrant/Violation" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today\'s date.'
        },


        blankFieldMessage: {
            dOC: '',
            rFC: '',
            wrtID: '',
            hdr: '',
            mke: '',
            oai: '',
            nam: '',
            sex: '',
            rac: '',
            hgt: '',
            wgt: '',
            hai: ' ',
            off: '',
            dow: ''
        },


    }
}