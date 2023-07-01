/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ["./index.html"],
    mode: 'jit',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1440px',
            '4k': '2560px',
        },
        fontSize: {
            sm: '15px',
            base: ['16px', '22px'],
            'xl': ['18px', '24px'],
            '2xl': ['22px', '24px'],
            'co-button': ['24px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'co-button-mo': ['18px', {
                lineHeight: '24px',
                fontWeight: '700',
            }],
            'co-h1': ['80px', {
                lineHeight: '90px',
                fontWeight: '700',
            }],
            'co-h2': ['80px', {
                lineHeight: '72px',
                fontWeight: '700',
            }],
            'co-h3': ['60px', {
                lineHeight: '72px',
                fontWeight: '700',
            }],
            'co-h3-bold': ['30px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'co-h4': ['50px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'co-h5': ['30px', {
                lineHeight: '40px',
                fontWeight: '400',
            }],
            'co-h5-sbold': ['30px', {
                lineHeight: 'normal',
                fontWeight: '600',
            }],
            'co-h5-capital': ['30px', {
                lineHeight: 'normal',
                fontWeight: '700',
                textTransform: 'uppercase'
            }],
            'co-h6': ['20px', {
                lineHeight: 'normal',
                fontWeight: '600',
            }],
            'co-p1': ['20px', {
                lineHeight: 'normal',
                fontWeight: '400',
            }],
            'co-p1_underline': ['20px', {
                lineHeight: '34px',
                fontWeight: '600',
                textDecoration: 'underline'
            }],
            'co-p2': ['18px', {
                lineHeight: 'normal',
                fontWeight: '350',
            }],
            'co-mo-h1': ['36px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'co-mo-h2': ['24px', {
                lineHeight: 'normal',
                fontWeight: '600',
            }],
            'co-mo-h2-bold': ['24px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'co-mo-h5-capital': ['24px', {
                lineHeight: 'normal',
                fontWeight: '700',
                textTransform: 'uppercase'
            }],
        },
        extend: {
            fontFamily: {
                'primary': "Noto, Sans-serif"
            },
            colors: {
                'co-white': '#FFFFFF',
                'co-white2': '#FFFAEB',
                'co-white-12': 'rgba(255, 255, 255, .12)',
                'co-yellow': '#F9B800',
                'co-blue': '#0052B4',
                'co-purple': '#9747FF',
                'co-red': '#D80027',
                'co-dark': '#262626',
                'co-dark-80': 'rgba(19, 19, 19, 0.8)',
                'co-dark-12': 'rgba(250,144,144,0.12)',
                'co-grey': '#787878',
                'co-light0': '#FFF1C9',
                'co-light1': '#FEEDBC',
                'co-light2': '#FFE18B',
                'co-light3': '#D3B970',
                'co-light4': '#FFBB45',
                'co-bg': '#FEEDBC',
                'co-bg2': '#FFFAEB',
                'co-shade': '#FFF6DA',
            },
            spacing: {
                '1p': '1px',
                '3p': '3px',
                '7p': '7px',
                '9p': '9px',
                '10p': '10px',
                '13p': '13px',
                '22p': '1.375rem',
                '17p': '17px',
                '18p': '18px',
                '30p': '1.875rem',
                '34p': '34px',
                '38p': '38px',
                '40p': '40px',
                '42p': '42px',
                '44p': '44px',
                '46p': '46px',
                '47p': '47px',
                '49p': '49px',
                '50p': '3.125rem',
                '52p': '3.25rem',
                '58p': '58px',
                '60p': '60px',
                '66p': '66px',
                '70p': '70px',
                '72p': '72px',
                '78p': '78px',
                '90p': '90px',
                '100p': '100px',
                '118p': '118px',
                '120p': '120px',
                '135p': '135px',
                '150p': '150px',
                '229p': '229px',
                '148p': '148px',
                '170p': '170px',
                '172p': '172px',
                '180p': '180px',
                '272p': '272px',
                '350p': '350px',
                '472p': '472px',
            },
            maxWidth: {
                '9': '90%',
                '95': '95%',
                '2/3': '70%',
            },
            backgroundImage: {
                'leaf-mo': "url('../assets/img/leaf-mo.svg')",
                'leaf': "url(../'assets/img/leaf.svg')",
            },
            borderRadius: {
                'mobile': '50px',
                'desktop': '100px',
                'box': '55px',
                'box-desktop': '60px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),

    ],
}