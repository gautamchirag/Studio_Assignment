import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import "./nav.css"
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbar = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        {
            name: 'Our Products', id: 'product', child: [
                { name: 'Product 1', id: 'p1' },
                { name: 'Product 2', id: 'p2' },
                { name: 'Product 3', id: 'p3' },
                { name: 'Product 4', id: 'p4' },
            ]
        },
        { name: 'Contact Us', id: 'contact' },
    ];

    return (
        <nav>
            <div className={`${scrollPosition > 0 ? 'nav-fixed' : ''}`}>
                <div className={`nav__bar `}>
                    <div className="nav__info">
                        <div className="nav__logo">ShopeKart</div>
                        <div className="cart__info">
                            <span>WishList(0)</span>
                            <span>Bag(0)</span>
                        </div>
                        <div className={`menu_${menu ? 'open' : 'close'}`} onClick={() => setMenu(!menu)}>
                            {menu ? <GiHamburgerMenu /> : <CgClose />}
                        </div>
                    </div>
                    <div className={`nav__links ${!menu ? 'expanded' : ''}`}>
                        <ul>
                            {navbar?.map((item) => (
                                <li key={item.id} className='nav__link'>
                                    <a href={`#${item.id}`}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
