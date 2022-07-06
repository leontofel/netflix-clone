import React from 'react';
import './SelectUser.css';
import Logo from '../../assets/imgs/flix-logo.png'
import profile1 from '../../assets/imgs/profile1.jpeg'
import profile2 from '../../assets/imgs/profile2.png'
import profile3 from '../../assets/imgs/profile3.png'
import profile4 from '../../assets/imgs/profile4.jpeg'
import { Link } from 'react-router-dom';


export default () => {
    
    
    return (
        <>
            <header>
                <img src={Logo} className='img-logo' alt="Logo" />
            </header>

            <h1>Quem está assistindo?</h1>
            <ul className='profiles-list'>
                <Link to="/Home">
                    <li className="profile">
                        <img src={profile1} alt="" className="profile-img" />
                        <p>João Silva</p>
                    </li>
                </Link>
                <Link to="/Home">
                    <li className="profile">
                        <img src={profile2} alt="" className="profile-img" />
                        <p>Maria Silva</p>
                    </li>
                </Link>
                <Link to="/Home">
                    <li className="profile">
                        <img src={profile3} alt="" className="profile-img" />
                        <p>Júlio Silva</p>
                    </li>
                </Link>
                <Link to="/Home">
                    <li className="profile">
                        <img src={profile4} alt="" className="profile-img" />
                        <p>Infantil</p>
                    </li>
                </Link>
            </ul>

            <button className='button-profiles'>Gerenciar perfis</button>

        </>
    )
}