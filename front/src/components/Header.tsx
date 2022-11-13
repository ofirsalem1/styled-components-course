import { Container } from './styles/Container.styled';
import { StyledHeader } from './styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader textColor={'red'}>
      <Container>
        <h1>Header</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;
