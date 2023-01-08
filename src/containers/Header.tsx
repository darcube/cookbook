import Menu from "../components/Menu"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Figure from "react-bootstrap/Figure";

import { RiSearchLine } from 'react-icons/ri';
import { useEffect, useState } from "react";

function Header() {
  
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
    
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isTopHeader = scrollPosition > 290;
  
    return (
      <Container fluid className={isTopHeader ? "header--top" : "header"}>
        <Row>
          {!isTopHeader && (
            <Col>
              <Figure className="header__logo">
                <Figure.Image
                  width={280}
                  height={280}
                  alt="Byle smacznie"
                  src={(scrollPosition > 290) ? "assets/logo_small.png" : "assets/logo.png"}
                />
              </Figure>
            </Col>
          )}
          <Col xs={9} className={isTopHeader ? "header__area--top" : "header__area"}>
            {!isTopHeader && (
              <Row>
                <Figure className="header__figure">
                  <Figure.Image
                    className="header__img"
                    alt="Byle smacznie"
                    src={"assets/header-img.png"}
                  />
                </Figure>
              </Row>
            )}
            <Row className={isTopHeader ? "header__menu--top" : "header__menu"}>
              {isTopHeader && (
                <Col xs={4} lg={6}>
                  <Figure className="header__logo--top">
                    <Figure.Image
                      width={150}
                      alt="Byle smacznie"
                      src={"assets/logo_small.png"}
                    />
                  </Figure>
                </Col>
              )}
              <Col>
                <Menu />
              </Col>
              {!isTopHeader && (
                <Col xs="auto" className="header__search justify-content-end align-self-center pl-2">
                  <InputGroup size="sm" className="search" hasValidation={false}>
                    <InputGroup.Text className="search__icon">
                      <RiSearchLine />
                    </InputGroup.Text>
                    <Form.Control className="search__input" placeholder="Szukaj" />
                  </InputGroup>
                </Col>
              )}
            </Row>
          </Col>
        </Row>       
        
    </Container>
    )
  }
  
  export default Header