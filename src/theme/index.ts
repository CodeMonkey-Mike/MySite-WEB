const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  primary: '#3498db',
  primaryHover: 'transparent',
  secondary: '#DFA22C',
  secondaryHover: '#DFA22C',
  borderColor: '#cdcdcd',
  text: '#000',
};
export const theme = {
  breakpoints: {
    mobile: '375px',
    middleMobile: '500px',
    tablet: '700px',
    desktop: '1024px',
    desktopHd: '1280px',
  },
  space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamilies: {
    somebubbles: "'Somebubbles', sans-serif;",
    chewy: 'Chewy, sans-serif;',
    tahoma: 'tahoma, sans-serif;',
    fashion: 'FashionBlack, sans-serif;',
    raleway: 'Raleway,sans-serif;',
    r:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;',
    p: "'Open Sans', sans-serif;",
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  colors,
  colorStyles: {
    default: {
      color: colors.white,
    },
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: colors.secondary,
    },
  },
  buttonStyles: {
    default: {
      border: 0,
      backgroundColor: colors.transparent,
      textDecoration: 'none',
      height: 'auto',
      padding: 0,

      '&:hover': {
        backgroundColor: colors.transparent,
      },
    },
    primary: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.primary,
      borderRadius: '4px',
      backgroundColor: colors.primary,
      transition: 'all 0.35s ease',
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.primary,
      },
    },
    primaryOutlined: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.primary,
      borderRadius: '4px',
      backgroundColor: colors.primary,
      transition: 'all 0.35s ease',
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.transparent,
      },
    },
    secondary: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.secondary,
      borderRadius: '4px',
      backgroundColor: colors.secondary,
      transition: 'all 0.35s ease',
      outline: 'none',
      '&:hover': {
        backgroundColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
        opacity: 0.8,
      },
    },
    outlined: {
      borderRadius: '4px',
      backgroundColor: 'var(--color-transparent)',
      transition: 'all 0.35s ease',
      outline: 'none',
      border: '1px solid var(--color-white)',
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.primary,
        border: '1px solid var(--color-primary)',
      },
    },
    whiteOutlined: {
      borderRadius: '4px',
      backgroundColor: 'var(--color-white)',
      transition: 'all 0.35s ease',
      outline: 'none',
      border: '4px solid var(--color-white)',
      color: colors.primary,
      '&:hover': {
        backgroundColor: 'var(--color-transparent)',
        color: colors.white,
        border: '4px solid var(--color-white)',
      },
    },
    transparent: {
      borderRadius: '4px',
      backgroundColor: 'var(--color-transparent)',
      transition: 'all 0.35s ease',
      outline: 'none',
      border: '1px solid var(--color-transparent)',
      '&:hover': {
        backgroundColor: 'var(--color-grey-1)',
      },
    },
  },
  buttonSize: {
    small: {
      height: '38px',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontSize: '14px',
      borderRadius: '6px',
    },
    medium: {
      height: '36px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '14px',
    },
    large: {
      height: '44px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '14px',
    },
    xlarge: {
      height: '60px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '18px',
      paddingBottom: '18px',
      fontSize: '20px',
      fontWeight: '600',
    },
    xxlarge: {
      height: '70px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '18px',
      paddingBottom: '18px',
      fontSize: '26px',
      fontWeight: '600',
    },
  },
};
