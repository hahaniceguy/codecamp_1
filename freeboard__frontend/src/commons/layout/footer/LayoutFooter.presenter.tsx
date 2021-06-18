import {Body, Footer, Wrapper} from './LayoutFooter.styles';

const LayoutUI = ({children}) => {
  return (
    <Wrapper>
      <Body>{children}</Body>
      <Footer></Footer>
    </Wrapper>
  );
};

export default LayoutUI;
