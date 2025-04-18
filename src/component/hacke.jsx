import { useProgress } from '@react-three/drei';
import CanvasLoader from './canvasloader';
import HackerRoom from './hackerRoom';

const HackerRoomWithLoader = (props) => {
  const { progress, loaded } = useProgress();

  return loaded ? <HackerRoom {...props} /> : <CanvasLoader />;
};
export default HackerRoomWithLoader;