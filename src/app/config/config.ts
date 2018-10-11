const bundleArray = [
    {
        "bundleType": "Data",
        "results": [{
                "bundleSubType":"1 Month",
                "subresults": [{
                    "period": "1 Month",
                    "name": "MB",
                    "desc": "Valid for 1 day",
                    "value": "150",
                    "cost": "99",
                    "color": "yellow",
                    "special": true,
                    "check": false,
                    "lastclick": false
                }, {
                    "period": "1 Month",
                    "name": "MB",
                    "desc": "Valid for 1 day",
                    "value": "250",
                    "cost": "99",
                    "color": "yellow",
                    "special": false,
                    "check": false,
                    "lastclick": false
                }]
            },
            {
                "bundleSubType":"1 Week",
                "subresults": [{
                    "period": "1 Week",
                    "name": "MB",
                    "desc": "Valid for 1 day",
                    "value": "150",
                    "cost": "99",
                    "color": "yellow",
                    "special": true,
                    "check": false,
                    "lastclick": false
                }, {
                    "period": "1 Week",
                    "name": "MB",
                    "desc": "Valid for 1 day",
                    "value": "200",
                    "cost": "99",
                    "color": "yellow",
                    "special": true,
                    "check": false,
                    "lastclick": false
                }]
            }
        ]
    }, {
        "bundleType": "SMS",
        "results": [{
            "period": "1 Week",
            "name": "SMS's",
            "desc": "Valid for 1 day",
            "value": "200",
            "cost": "99",
            "color": "yellow",
            "special": true,
            "check": false,
            "lastclick": false
        }]
    }
];
const bunArr = {
    results : [
    {
        name : 'Data',
        icon : 'data',
        disable : false,
        click : false,
        desctext : 'What kind of bundle are you looking for?'
    },
    {
        name : 'Airtime',
        icon : 'airtime',
        disable : false,
        click : false,
        desctext : 'How much airtime would you like to buy?'
    },
    {
        name : 'SMS',
        icon : 'sms',
        disable : false,
        click : false,
        desctext : 'Which SMS bundle would you like?'
    },
    {
        name : 'Specials',
        icon : 'voice',
        disable : true,
        click : false,
        desctext : 'Which exclusive deal would you like?'
    },
    {
        name : 'Voice',
        icon : 'voice',
        disable : true,
        click : false,
        desctext : 'What kind of calling bundle are you looking for?'
    },
    {
        name : 'Social',
        icon : 'social',
        disable : true,
        click : false,
        desctext : 'What kind of social bundle are you looking for?'
    }
]
};
const helpbunArr = {
    results : [
    {
        name : 'Data',
        icon : 'data',
        disable : false,
        click : false,
        buttonname : 'Buy data',
        desctext : 'It’s always better to use an MTN data bundle to access the internet. If you don’t have a bundle, your data usage is taken from your airtime or charged to your contract.'
    },
    {
        name : 'Airtime',
        icon : 'airtime',
        disable : false,
        click : false,
        buttonname : 'Buy airtime',
        desctext : 'Looking to do the basics like making calls and sending SMS’s? Airtime will do the trick. However it might not be the cheapest way to keep in touch.'
    },
    {
        name : 'SMS',
        icon : 'sms',
        disable : false,
        click : false,
        buttonname : 'Buy sms',
        desctext : 'If you use SMS’s to keep in touch with your friends and family, it’s worth getting an SMS bundle rather than chowing through your airtime. Save cash in true Bozza fashion.'
    },
    {
        name : 'Specials',
        icon : 'voice',
        disable : true,
        click : false,
        buttonname : 'Coming Soon',
        desctext : 'Our Specials offer deals at a reduced cost to cater to your connection needs, but as great as they are they\'re only available in one place – here, at the online store. '
    },
    {
        name : 'Voice',
        icon : 'voice',
        disable : true,
        click : false,
        buttonname : 'Coming Soon',
        desctext : 'If you prefer chatting over the phone instead of texting, save cash by buying a calling bundle rather than using your airtime.'
    },
    {
        name : 'Social',
        icon : 'social',
        disable : true,
        click : false,
        buttonname : 'Coming Soon',
        desctext : 'If you’re addicted to social networks like Facebook, Twitter, and Instagram, a social bundle will make your money go a lot further. '
    }
]
};
const socialbunArr = {
    results : [
    {
        name: 'WhatsApp',
        icon : 'social',
        color : 'whatsapp',
        disable : false,
        click : false
    },
    {
        name: 'Twitter',
        icon : 'social',
        color : 'twitter',
        disable : false,
        click : false
    },
    {
        name: 'Facebook',
        icon : 'social',
        color : 'facebook',
        disable : false,
        click : false
    },
    {
        name: 'YouTube',
        icon : 'social',
        color : 'youtube',
        disable : false,
        click : false
    }
]
};
export const config = {
    ASSETS: 'app/appassets',
    MIN_MSISDN_LENGTH: 9,
    MSISDN_LENGTH: 11,
    COUNTRY_CODE: 27,
    SHOW_OTP: '',
    CURRENCY: 'R',
    MIN_AIRTIME_INPUT: 5,
    MAX_AIRTIME_INPUT: 1000,
    bunCon: bunArr,
    bunData: bundleArray,
    bunSocial: socialbunArr,
    bunHelp: helpbunArr
};

export const rechargeConfirmResponse_Array = {
    'statuscode' : '0',
    'reference': '5b7133b0ad482f74cdfcb1e1'
};
