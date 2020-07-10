import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { GrHome } from 'react-icons/gr';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';

const HeaderContainer = styled.header`
  color: #000000;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 7rem;
  height: 4rem;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? 'rgb(70, 119, 255)' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(function Header({ location: { pathname } }) {
  return (
    <HeaderContainer>
      <List>
        <Item current={pathname === '/'}>
          <SLink to="/">
            <GrHome size={25} />
          </SLink>
        </Item>
        <Item current={pathname === '/search'}>
          <SLink>
            <AiOutlineSearch size={25} />
          </SLink>
        </Item>
        <Item current={pathname === '/add'}>
          <SLink to="/add">
            <AiOutlinePlusCircle size={25} />
          </SLink>
        </Item>
      </List>
    </HeaderContainer>
  );
});
