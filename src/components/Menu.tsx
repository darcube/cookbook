
import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      justify
      className="menu"
    >
      <Nav.Item>
        <Nav.Link href="/home">Śniadania</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Obiady</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Kolacje</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Desery</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;