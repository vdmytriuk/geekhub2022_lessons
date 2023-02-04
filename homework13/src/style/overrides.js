export const components = {
    MuiToolbar: {
        styleOverrides: {
            root: ({ theme }) =>
                theme.unstable_sx({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }),
        }
    },

    MuiDivider: {
        styleOverrides: {
            root: ({ theme }) =>
                theme.unstable_sx({
                    mt: 2,
                    mb: 2
                }),
        }
    },

    MuiContainer: {
        variants: [
            {
                props: {variant: 'flex'},
                style: {
                    display: 'flex',
                }
            },
            {
                props: {align: 'center'},
                style: {
                    alignItems: 'center',
                }
            },
            {
                props: {justify: 'between'},
                style: {
                    justifyContent: 'space-between',
                }
            }
        ]
    }
}