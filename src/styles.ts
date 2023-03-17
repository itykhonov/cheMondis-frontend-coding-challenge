import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'none'
    },
    body: {
      margin: 0,
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '18px',
      color: '#000',
      background: '#fff',
      minWidth: 320
    },
    p: {
      marginBottom: 10
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    h1: {
      fontSize: 18,
      lineHeight: '24px',
      marginBottom: 10,
      '@media (min-width: 600px)': {
        fontSize: 24,
        lineHeight: '28px',
        marginBottom: 20
      },
      '@media (min-width: 1000px)': {
        fontSize: 32,
        lineHeight: '32px',
        marginBottom: 30
      }
    },
    h2: {
      fontSize: 22,
      lineHeight: '20px',
      marginBottom: 25
    },
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  modal: {
    minWidth: 320,
    textAlign: 'right',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: '#fff',
    zIndex: 2,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: '#000'
    }
  },
  modalImageHolder: {
    '@media (min-width: 600px)': {
      width: '50%'
    }
  },
  modalHolder: {
    textAlign: 'left',
    flex: 1,
    overflow: 'auto',
    '@media (min-width: 600px)': {
      display: 'flex'
    },
    '& img': {
      width: '100%',
      height: 'auto'
    },
    '& dl': {
      padding: 20,
      overflow: 'hidden',
      '@media (min-width: 600px)': {
        width: '50%'
      },
      '& dt': {
        float: 'left',
        margin: [0, 10, 10, 0]
      },
      '& dd': {
        textAlign: 'right',
        overflow: 'hidden',
        margin: [0, 0, 10, 10]
      }
    }
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  header: {
    padding: 20,
    marginBottom: 20,
    '& h1': {
      textAlign: 'center'
    },
    '& a': {
      color: '#000',
      display: 'inline-block',
      verticalAlign: 'top',
      marginBottom: 10
    }
  },
  countHolder: {
    maxWidth: '50%',
    margin: [0, 'auto'],
    '& label': {
      display: 'inline-block',
      verticalAlign: 'top',
      marginBottom: 10
    }
  },
  main: {
    padding: [0, 20],
    display: 'flex',
    position: 'relative',
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'auto'
  },
  resultsContainer: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  resultsHolder: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  resultItem: {
    width: '50%',
    lineHeight: '26px',
    marginBottom: 14,
    padding: [0, 10],
    '@media (min-width: 600px)': {
      width: '25%'
    },
    '@media (min-width: 1000px)': {
      width: '20%'
    },
    '& img': {
      width: '100%',
      height: 'auto',
      marginBottom: 10
    },
    '& a': {
      display: 'block',
      color: '#000',
      '&:hover': {
        textDecoration: 'none',
        opacity: 0.8
      }
    },
    '& dl': {
      overflow: 'hidden',
      '& dt': {
        float: 'left',
        margin: [0, 10, 10, 0]
      },
      '& dd': {
        overflow: 'hidden',
        margin: [0, 0, 10, 10],
        wordBreak: 'break-word'
      }
    }
  },
  paginationHolder: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    '&.loading': {
      opacity: '0.5',
      pointerEvents: 'none',
      cursor: 'default'
    },
    '& .pagination': {
      display: 'flex',
      '& li': {
        marginRight: 14,
        width: 34,
        height: 34,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        cursor: 'pointer',
        '&.disabled': {
          pointerEvents: 'none',
          opacity: 0.7
        },
        '&.active': {
          pointerEvents: 'none',
          background: '#000',
          color: '#fff'
        },
        '&:hover': {
          background: '#000',
          color: '#fff'
        },
        '& a': {
          flex: 1,
          textAlign: 'center',
          padding: [10, 2],
          '&:hover': {
            textDecoration: 'none'
          }
        }
      }
    }
  },
  noResults: {
    padding: 20,
    fontSize: 20,
    lineHeight: '24px',
    textAlign: 'center'
  },
  loading: {
    padding: 20,
    fontSize: 20,
    lineHeight: '24px',
    textAlign: 'center'
  }
});
