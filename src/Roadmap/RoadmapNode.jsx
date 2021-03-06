import Tippy from '@tippyjs/react/headless';
import short from 'short-uuid';
import { useSpring, animated } from 'react-spring';
import circle from '../assets/img/circle.png';

const style = {
  position: 'absolute',
  top: 'calc(50% - 25px)',
  left: 'calc(50% - 25px)',
  zIndex: 99,
};

const tooltipStyle = {
  backgroundColor: 'black',
  color: 'white',
  opacity: 0.8,
  zIndex: 100,
  width: 300,
  padding: '1rem',
  margin: 3,
  borderRadius: 10,
};

const RoadmapNode = ({ gridNode }) => {
  const config = { tension: 300, friction: 15 };
  const initialStyles = { opacity: 0 };

  const [props, setSpring] = useSpring(() => initialStyles);

  const onMount = () => {
    setSpring({
      opacity: 1,
      onRest: () => {},
      config,
    });
  };

  const onHide = ({ unmount }) => {
    setSpring({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Tippy
      interactive
      animation
      onMount={onMount}
      onHide={onHide}
      placement="right"
      render={(attrs) => (
        <animated.div style={{ ...props, ...tooltipStyle }} {...attrs}>
          <h4>{gridNode.name}</h4>
          <p>{gridNode.description}</p>
          <h6>Resources</h6>
          <ul>
            {gridNode.resources.map((resource) => (
              <li key={short.generate()}>
                <a href={resource}>{resource}</a>
              </li>
            ))}
          </ul>
          <h6>Problems</h6>
          <ul>
            {gridNode.problems.map((problem) => (
              <li key={short.generate()}>
                <a href={problem}>{problem}</a>
              </li>
            ))}
          </ul>
        </animated.div>
      )}
    >
      <img src={circle} alt="level" style={style} />
    </Tippy>
  );
};

export default RoadmapNode;
