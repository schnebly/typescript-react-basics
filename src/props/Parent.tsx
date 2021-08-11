import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="blue" onClick={() => alert('clicked')}>text</ChildAsFC>;

};

export default Parent;