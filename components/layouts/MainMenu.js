import Link from 'next/link';
import MainMenuData from '../../data/MainMenu.json';

const MainMenu = () => {
    return (

        //custom
        <ul className="mainmenu" style={{marginRight:"80px"}}>
            {MainMenuData?.map((menu, menuIndex) => (
                <li
                    className={menu.hasChildren ? "has-dropdown" : ""}
                    key={`menu-item-${menuIndex}`}
                >
                   <a href={menu.url}>{menu.title}</a>
                    {menu.hasChildren && (
                        <ul className="axil-submenu">
                            {menu.clildrens?.map((submenuItem, submenuIndex) => (
                                <li key={`submenu-item-${submenuIndex}`}>
                                    <Link href={submenuItem.url}>{submenuItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
