import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';

type CustomPalette = {
    [index: string]: string;
};

declare module '@mui/material/styles' {
    interface Theme {
        custom: CustomPalette;
    }
    interface ThemeOptions {
        custom: CustomPalette;
    }
    interface TypographyVariants {
        poster: React.CSSProperties;
        poster2: React.CSSProperties;
        subtitle3: React.CSSProperties;
        subtitle4: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        poster?: React.CSSProperties;
        poster2?: React.CSSProperties;
        subtitle3?: React.CSSProperties;
        subtitle4?: React.CSSProperties;
    }
    interface BreakpointOverrides {
        elg: true;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        poster: true;
        poster2: true;
        subtitle3: true;
        subtitle4: true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        actions: true;
        approved: true;
    }
    interface ButtonPropsColorOverrides {
        custom: true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        actions: true;
        approved: true;
    }

    interface ButtonPropsColorOverrides {
        custom: true;
    }
}

export const theme = () =>
    createTheme(
        {
            palette: {
                primary: { main: '#333153', light: '#DADADA', contrastText: '#A1A1AA' },
                error: { main: '#DA2C55', contrastText: '#C7CBE066' },
                secondary: { main: '#6B759F', dark: '#202124', light: '#CECAF90A', contrastText: '#8E8FA733' },
                info: { main: '#68686D', light: '#BDBAC5', dark: '#373642', contrastText: '#A1A1AA' },
                text: { primary: '#C7CBE099', secondary: '#38414D', disabled: '#C7CBE066' },
                success: { main: '#35C075' },
                background: {
                    default: '#F4F4F4',
                    paper: '#FDFDFD',
                },
            },

            custom: {
                c1: '#F10909FF',
                c2: '#9C9C9C',
                c3: '#BDBDCDFF',
                c4: '#595959',
                c5: '#161616',
                c6: '#DADADA',
                c7: '#C6F4C6'

            },
            typography: {
                htmlFontSize: 16,
                fontSize: 16,
                fontFamily: ['Manrope'].join(','),
                h1: {
                    fontSize: '2.62rem',
                },
                h2: {
                    fontSize: '2.62rem',
                },
                h4: {
                    fontSize: '2rem',
                    fontWeight: '600',
                },
                h5: {
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#161616'
                },
                h6: {
                    fontSize: '16px',
                    fontWeight: '600',
                },
                body1: {
                    fontSize: '14px',
                    fontWeight: '500',
                },
                body2: {
                    fontSize: '20px',
                    fontWeight: '600',
                },
                subtitle1: {
                    fontSize: '24px',
                    fontWeight: '400',
                    lineHeight: '1.3',
                },
                subtitle2: {
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                },
                subtitle3: {
                    fontSize: '16px',
                    fontWeight: 500,
                },
                subtitle4: {
                    fontSize: '24px',
                    fontWeight: '600',
                },
                poster: {
                    fontSize: '3rem',
                    lineHeight: '1.125',
                },
                poster2: {
                    fontSize: '3.5rem',
                    fontWeight: '600',
                    lineHeight: '1.3',
                },
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 900,
                    md: 1200,
                    lg: 1367,
                    elg: 1680,
                    xl: 1920,
                },
            },
            components: {
                MuiCssBaseline: {
                    defaultProps: {
                        enableColorScheme: true,
                    },
                    styleOverrides: {
                        '@font-face': {
                            fontFamily: 'Roboto Flex Static',
                            src: `url('/fonts/roboto/RobotoFlex-Static.woff2') format('woff2')`,
                            fontDisplay: 'block',
                        },
                        html: { height: '100%', body: { minHeight: '100%' } },
                    },
                },
                MuiTypography: {
                    defaultProps: {
                        tabIndex: -1,
                        color: 'primary',
                    },
                    styleOverrides: {
                        root: ({ theme, ownerState: { variant } }) => ({
                            outline: 'none',
                            textDecoration: 'none',
                            [theme.breakpoints.down('lg')]: {
                                ...(variant === 'h1' && {
                                    fontSize: '2.25rem',
                                }),
                                ...(variant === 'subtitle3' && {
                                    fontSize: '1rem',
                                }),
                                ...(variant === 'poster' && {
                                    fontSize: '2.25rem',
                                }),
                            },
                        }),
                    },
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            fontSize: '1rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            width: 'max-content',
                            display: 'inline-block',
                        },
                    },
                },
                MuiModal: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            overflowY: 'scroll',
                            scrollbarWidth: 'none',
                            '::-webkit-scrollbar': {
                                width: '0',
                                height: '0',
                            },
                        }),
                    },
                },
                MuiInput: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            background: theme.palette.secondary.light,
                            color: theme.palette.primary.main,
                            '& :-Webkit-autofill': {
                                WebkitBoxShadow: 'inset 0 0 0 50px #1b1a21',
                                WebkitTextFillColor: theme.palette.primary.main,
                            },
                        }),
                    },
                    defaultProps: {
                        disableUnderline: true,
                    },
                },
                MuiSnackbar: {
                    styleOverrides: {
                        root: {
                            width: '360px',
                        },
                    },
                },
                MuiAlert: {
                    styleOverrides: {
                        message: {
                            width: '100%',
                            textAlign: 'center',
                        },
                    },
                },
                MuiCheckbox: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.secondary.contrastText}`,
                            borderRadius: '50px',
                            padding: '10px',
                            '&.Mui-checked': {
                                color: theme.palette.success.main,
                                borderRadius: '50px',
                            },
                        }),
                    },
                    defaultProps: {
                        disableRipple: true,
                    },
                },
                MuiCollapse: {
                    styleOverrides: {
                        wrapperInner: ({ theme }) => ({
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }),
                    },
                },
                MuiFormControl: {
                    styleOverrides: {
                        root: () => ({
                            maxWidth: '360px',
                            '&.MuiFormControl-fullWidth': {
                                maxWidth: 'none',
                            },
                        }),
                    },
                    defaultProps: {
                        fullWidth: true,
                    },
                },
                MuiButtonBase: {
                    defaultProps: {
                        disableRipple: true,
                        disableTouchRipple: true,
                    },
                },
                MuiInputLabel: {
                    styleOverrides: {
                        root: {
                            position: 'static',
                            transform: 'none',
                            marginTop: '15px',
                            marginBottom: '5px',
                            fontSize: '0.8rem',
                        },
                    },
                },
                MuiFormHelperText: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: theme.palette.error.contrastText,
                            margin: '7px 0 0 0',
                            padding: '0 5px',
                            height: 'auto',
                            fontSize: '0.88rem',
                            lineHeight: '1.4',
                        }),
                    },
                },
                MuiDivider: {
                    styleOverrides: {
                        root: {
                            border: '1px solid #cecaf90a',
                            margin: '16px 0',
                        },
                    },
                },
                MuiSlider: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: theme.palette.secondary.main,
                            maxWidth: '115px',
                        }),
                        thumbColorPrimary: {
                            boxShadow: 'none',
                            ':hover': {
                                boxShadow: 'none',
                            },
                        },
                    },
                },
                MuiPaper: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            background: theme.custom.c24,
                        }),
                    },
                },
                MuiIconButton: {
                    defaultProps: {
                        disableRipple: true,
                    },
                },
                MuiSvgIcon: {
                    defaultProps: {
                        fontSize: 'small',
                    },
                },
                MuiBackdrop: {
                    styleOverrides: {
                        root: {
                            zIndex: 4000,
                        },
                    },
                },
            },
        },
        ruRU,
    );