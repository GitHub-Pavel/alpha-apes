import { useSpring } from "react-spring";

export const ANIMATED_DELAY = 800;
export const HERO_ANIMATED_VARIATIONS = {
  h2: (isLoading) => useSpring({
    delay: ANIMATED_DELAY,
    opacity: 0,
    from: { opacity: 1 },
    reverse: isLoading
  }),
  desc: (isLoading) => useSpring({
    delay: ANIMATED_DELAY+400,
    opacity: 0,
    from: { opacity: 1 },
    reverse: isLoading
  }),
  numberWrap: (isLoading) => useSpring({
    delay: ANIMATED_DELAY+800,
    opacity: 0,
    from: { opacity: 1 },
    reverse: isLoading
  }),
  btnWrap: (isLoading) => useSpring({
    delay: ANIMATED_DELAY+1200,
    opacity: 0,
    from: { opacity: 1 },
    reverse: isLoading
  }),
  lines: {
    one: (isLoading) => useSpring({
      delay: ANIMATED_DELAY+200,
      from: { x: 1 },
      x: 0,
      reverse: isLoading
    }),
    two: (isLoading) => useSpring({
      delay: ANIMATED_DELAY+600,
      from: { x: 1 },
      x: 0,
      reverse: isLoading
    }),
    three: (isLoading) => useSpring({
      delay: ANIMATED_DELAY+1000,
      from: { x: 1 },
      x: 0,
      reverse: isLoading,
      config: { duration: 300 }
    })
  }
};
export const ANIMATED_TITLE = (isLoading) => useSpring({
  from: { opacity: 1, translateY: 0 },
  opacity: 0,
  translateY: -100,
  reverse: isLoading
});
