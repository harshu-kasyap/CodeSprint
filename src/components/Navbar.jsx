import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 90px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 110px;
  padding: 10px;
  background-color: #da4ea2;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Navbar = () => {
  const handleButtonClick = () => {
    window.open("https://www.notion.so/JISU-CodeSprint-d808eae891854ab7a5657571cfc83858");
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/favicon.png" />
          <List>
            <ListItem onClick={() => scrollToSection('home')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('themes')}>Themes</ListItem>
            <ListItem onClick={() => scrollToSection('judges')}>Judges</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button onClick={handleButtonClick}>Learn More</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
