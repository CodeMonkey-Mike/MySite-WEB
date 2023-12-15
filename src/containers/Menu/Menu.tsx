import React,  {useEffect,useState,useRef, forwardRef, useMemo}  from 'react';
import $ from 'jquery';
import { MenuButton } from 'theme-ui';
import { NavLink } from 'components';
import { MenuContainer, MenuContent, MainMenu, HamburgerContainer } from './Style';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import { useData } from 'hooks';

const scroller = Scroll.scroller;

const MENU_ITEMS:Array<{
  link: string,
  label: string,
  scroll: boolean,
}> = [
  {
    link: 'hero-slider',
    label: 'Top',
    scroll: true,
  },
  {
    link: 'about',
    label: 'About',
    scroll: true,
  },
  {
    link: 'skills',
    label: 'Skills',
    scroll: true,
  },
  {
    link: 'process',
    label: 'Process',
    scroll: true,
  },
  {
    link: 'work-experience',
    label: 'Work experience',
    scroll: true,
  },
  {
    link: 'services',
    label: 'Services',
    scroll: true,
  },
  {
    link: 'portfolio',
    label: 'Portfolio',
    scroll: true,
  },
  {
    link: 'video',
    label: 'Video',
    scroll: true,
  },
  {
    link: 'blog',
    label: 'Blog',
    scroll: true,
  },
  {
    link: 'contact',
    label: 'Contact',
    scroll: true,
  },
];

const MenuComp = forwardRef(
  (
    {
      testId,
      className,
      hideMenu,
      hideScroll,
    }: {
      testId?: string;
      className?: string;
      hideMenu: ()=>void;
      hideScroll?: boolean;
    },
    ref?: any
  ) => {
    const router = useRouter();
    const [path, setPath] = useState('/');
    const {_about} = useData();
    const onClick = async (link:string) => {
      setPath(link);
      if(typeof window !== undefined) {
        // @ts-ignore
        if($( window ).width() < 769) {
          hideMenu();
        }
      }
      if(hideScroll) {
        window.localStorage.setItem('needReload', 'true');
        await router.push(`/#${link}`);
        // window.location.reload();
      }
    };
    useEffect(() => {
      if (router.asPath.includes('newsletter')) {
        setTimeout(() => {
          scroller.scrollTo('newsletter', {});
        }, 6000);
      }
    }, []);

    const items = useMemo(() => {
      if(_about?.hide_experience) {
        return MENU_ITEMS.filter( mn => mn.link !== 'work-experience');
      }
      return MENU_ITEMS;
    },[_about]);

    return (
      <MainMenu className={className} data-testid={testId} ref={ref}>
        {items.map((nav, idx) => {
          return (
            <NavLink
              scroll={hideScroll ?? nav.scroll}
              to={nav.link}
              spy={true}
              smooth={true}
              key={`menu-${idx}`}
              className="menu-item"
              href={nav.scroll ? `/#${nav.link}` : `${hideScroll && '/#'}${nav.link}`}
              label={hideScroll && nav.label === 'Top' ? 'Home' : nav.label}
              iconClass="menu-icon"
              path={path}
              onClick={()=>onClick(nav.link)}
            />
          );
        })}
      </MainMenu>
    );
  }
);

export const Menu = ({hideScroll}:{hideScroll?: boolean;}) => {
  const menuRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const [height, setHeight] = useState('auto');
  const menu = menuRef.current as any;

  const toogleMenu = () => {
    if (menu) {
      $(menu).slideToggle(50);
    }
  }; 
  useEffect(() => {
    const menu = document.getElementById('menu-wrapper') as HTMLElement;
    const { height } = menu.getBoundingClientRect();
    const sticky = menu.offsetTop;
    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        setSticky(true);
        setHeight(`${height}px`);
      } else {
        setSticky(false);
        setHeight(`auto`);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      if (window.innerWidth < 768) {
        $(menu).hide();
      }
    }
  }, [menu]);
  return (
    <MenuContainer style={{height: height}}>
      <MenuContent id="menu-wrapper" className={isSticky ? 'sticky' : ''}>
          <HamburgerContainer onClick={()=> toogleMenu()}>
            <MenuButton aria-label="Toggle Menu" color="var(--color-white)" />
          </HamburgerContainer>
          <MenuComp ref={menuRef} hideMenu={()=>toogleMenu()} hideScroll={hideScroll}/>
      </MenuContent>
    </MenuContainer>
  );
};