module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  important: true,
  theme: {
    colors: {
      shade: {
        BG: '#F9F9F9',
        FG: '#FFFFFF',
        BD: '#E0E0E0',
        40: '#999999',
        70: '#4D4D4D',
        100: '#000000',
      },
      gray: {
        50: '#F7F8F9',
        100: '#EFF1F3',
        200: '#DFE2E7',
        300: '#CFD4DC',
        400: '#BFC5D0',
        500: '#AFB7C4',
        600: '#8C929D',
        700: '#696E76',
        800: '#46494E',
        900: '#232527',
      },
      primary: {
        50: '#E8E9EF',
        100: '#D2D3DF',
        200: '#A4A8BF',
        300: '#777CA0',
        400: '#495180',
        500: '#1C2560',
        600: '#161E4D',
        700: '#11163A',
        800: '#0B0F26',
        900: '#060713',
      },
      success: {
        50: '#E5F8EB',
        100: '#CCF1D6',
        200: '#99E3AE',
        300: '#66D685',
        400: '#33C85D',
        500: '#00BA34',
        600: '#00952A',
        700: '#00701F',
        800: '#004A15',
        900: '#00250A',
      },
      danger: {
        50: '#FDEAEA',
        100: '#FBD5D5',
        200: '#F6ABAB',
        300: '#F28080',
        400: '#ED5656',
        500: '#E92C2C',
        600: '#BA2323',
        700: '#8C1A1A',
        800: '#5D1212',
        900: '#2F0909',
      },
      warning: {
        50: '#FFF8E5',
        100: '#FFF1CC',
        200: '#FFE399',
        300: '#FFD466',
        400: '#FFC633',
        500: '#FFB800',
        600: '#CC9300',
        700: '#996E00',
        800: '#664A00',
        900: '#332500',
      },
      info: {
        50: '#E5F3FF',
        100: '#CCE6FF',
        200: '#99CEFF',
        300: '#66B5FF',
        400: '#339DFF',
        500: '#0084FF',
        600: '#006ACC',
        700: '#004F99',
        800: '#003566',
        900: '#001A33',
      },
    },
    fontSize: {
      'sm-1': '4px',
      'sm-2': '6px',
      'sm-3': '8px',
      'sm-4': '10px',
      'md-1': '12px',
      'md-2': '14px',
      'md-3': '16px',
      'md-4': '18px',
      'lg-1': '20px',
      'lg-2': '22px',
      'lg-3': '24px',
      'lg-4': '28px',
      'xl-1': '32px',
      'xxl-1': '48px',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    borderRadius: {
      0: 2,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      full: 100,
      circle: 1000,
    },
    screens: {
      xs: '320px',
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      '2xl': '1600px',
    },
    extend: {
      spacing: {
        nav: '76px',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(318px, 1fr))',
        'time-chip': 'repeat(2, minmax(343px, 343px))',
      },
      gridAutoRows: {
        'auto-fill': 'minmax(142px,1fr)',
        'time-chip': 'minmax(31px,1fr)',
      },
      gridAutoColumns: {
        test: 'minmax(31px,1fr)',
      },
      width: {
        dropdown: '225px',
        'large-chip': '276px',
        'normal-chip': '160px',
      },
      maxWidth: {
        dropdown: '225px',
        pagination: '446px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
