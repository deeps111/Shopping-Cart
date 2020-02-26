
const variant = {
    colors: {
      text: 'black',
      background: 'white',
      primary: 'tomato',
    },
    shadows: {
      card: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
    variants: {
      card: {
        p: 2,
        bg: 'background',
        boxShadow: 'card',
        borderRadius: 2,
      },
      badge: {
        display: 'inline-block',
        p: 1,
        color: 'white',
        bg: 'primary',
        borderRadius: 2,
      }
    },
  }

  export default variant;