const customStyles = {
    dropdownIndicator: (styles: any) => {
        return {
            ...styles,
            display: 'none',

        }
    },
    option: (styles: any, { isSelected }: any) => {
        return {
            ...styles,
            backgroundColor: 'white',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '16px',
            color: 'var(--main-black)',
            ':hover': {
                color: 'var(--main-color)',
                backgroundColor: 'none',
                cursor: 'pointer'
            },
            ':active': {
                backgroundColor: 'none'
            }
        }
    },
    control: (styles: any) => {
        return {
            ...styles,
            border: 'none',
            boxShadow: 'none',
            minHeight: '0',
            maxHeight: '16px'
        }
    },
    valueContainer: (styles: any) => {
        return {
            ...styles,
            maxHeight: '16px',
            padding: '4px 8px',
            // overflow: 'none'
        }
    },
    placeholder: (styles: any) => {
        return {
            ...styles,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '16px',
            top: '0%',
            // position: 'none',
            transform: 'none'
            // marginTop: '20px',
        }
    },
    singleValue: (styles: any) => {
        return {
            ...styles,
            backgroundColor: 'white',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '16px',
            padding: '4px 0px',
            color: 'var(--main-black)',
            top: '100%',
        }
    },
    menu: (styles: any) => {
        return {
            ...styles,
            borderRadius: '0px',
            zIndex: '999'
        }
    },
    indicatorsContainer: (styles: any) => {
        return {
            ...styles,
            position: 'absolute',
            right: '22px',
            top: 0,
            maxWidth: '12px',
            maxHeight: '12px',
            padding: '0',
            ':hover': {
                cursor: 'pointer'
            }
        }
    },
    indicatorContainer: (styles: any) => {
        return {
            ...styles,
        
        }
    }
}

export default customStyles;