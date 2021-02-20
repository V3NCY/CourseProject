import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Form,
  FormControl,
  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../mountain.svg';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

 return (
        <Navbar color="dark" dark expand="md" className="shadow p-1 bg-light">
<NavbarBrand tag={Link} to="/"><Logo width="50"/>Копривщица</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink tag={Link} to="/">Начало</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/culture">Култура</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/tourism">Туризъм</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/news">Новини</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/museums">Музеи</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/hotels">Хотели</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/prices">Цени</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/transport">Транспорт</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacts">Контакти</NavLink>
            </NavItem>
          </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Търси..." className="mr-sm-2" />
                <Button variant="primary">Търси</Button>
                </Form>

            </Collapse>
    </Navbar>
  );
}

export default Example;