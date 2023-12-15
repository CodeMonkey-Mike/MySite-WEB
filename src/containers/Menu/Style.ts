import styled from 'styled-components';

export const MenuContainer = styled.div``;
export const MenuContent = styled.div`
  background: var(--color-blue);
  position: relative;
  &.sticky {
    position: fixed;
    z-index: 1000000;
    top: 0;
    left: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid var(--color-black);
  }
`;

export const HamburgerContainer = styled.div`
  display: inline-block;
  border-radius: var(--border-4);
  border: 1px solid var(--color-white);
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MainMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1380px;
  overflow: auto;
  background: var(--color-blue);
  margin-left: auto;
  margin-right: auto;
  .menu-item {
    padding: 1.1rem 0.9rem;
    text-transform: uppercase;
    color: var(--color-white);
    transition: all 0.3s ease-in-out;
    border: 6px solid transparent;
    font-size: var(--text-sm);
    font-weight: 600;
    &:hover, &.active {
      border-color: #fff transparent transparent;
      border-style: solid;
      border-width: 6px;
      color: #fff;
    }
  }
  @media (min-width: 1600px) {
    .menu-item {
      font-size: var(--text-xl);
    }
  }
  @media (max-width: 1024px) {
    .menu-item {
      padding: 1.1rem 0.2rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: 54px;
    left: 0;
    flex-direction: column;
    justify-items: center;
    z-index: 1000;
    .menu-item {
      padding: 1rem 1.5rem;
    }
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    .menu-item {
      font-size: 28px;
    }
  }
`;
