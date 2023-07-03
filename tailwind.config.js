/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ["./index.html"],
    mode: 'jit',
    theme: {
        screens: {
            'tablet': '768px',
            'desktop': '1728px',
            'ultra': '2560px'
        },
        fontSize: {
            'xs': '12px',
            'sm': '14px',
            'base': '16px',
            'lg': '20px',
            'xl': '22px',
            'btn-desktop': ['12px', {
                lineHeight: 'normal',
                fontWeight: '500',
            }],
            'card-desktop': ['13px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'post-desktop': ['14px', {
                lineHeight: 'normal',
                fontWeight: '900',
            }],
            'widget-desktop': ['14px', {
                lineHeight: 'normal',
                fontWeight: '700',
            }],
            'p-desktop': ['12px', {
                lineHeight: 'normal',
                fontWeight: '400',
            }],
            'tile-desktop': ['18px', {
                lineHeight: '150%',
                fontWeight: '900',
            }],
        },
        extend: {
            boxShadow: {
                'base': '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)'
            },
            fontFamily: {
                'primary': "IRANYekanX, serif"
            },
            colors: {
                'primary': {
                    500: '#F63326',
                    700: '#1A56DB',
                },
                'amber': {
                    200: '#FCE589',
                    700: '#B35309'
                },
                'blue': {
                    100: '#DAE9FD',
                    700: '#1D4ED7',
                },
                'gray': {
                    100: '#F3F4F6',
                    300: '#D1D5DB',
                    500: '#6B7280',
                    900: '#111928',
                },
                'green': {
                    100: '#DBFBE6',
                    600: '#16A24A'
                },
                'slate': {
                    50: '#F7F9FB',
                    100: '#F0F4F8',
                    200: '#E1E7EF',
                    300: '#CAD4E0',
                    400: '#93A2B7',
                    500: '#64748A',
                    600: '#475569',
                    700: '#334155',
                },
                'white': '#FFFFFF',                
            },
            spacing: {

            },
            maxWidth: {

            },
            backgroundImage: {
            },
            borderRadius: {
                'base': '0.5rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),

    ],
}