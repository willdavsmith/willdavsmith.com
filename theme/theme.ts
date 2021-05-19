export const pageVariants = {
  initial: {
    opacity: 0,
    y: '20vh',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
  },
}

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
}
