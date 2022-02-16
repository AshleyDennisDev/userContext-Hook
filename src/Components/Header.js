import React, {useContext} from "react";
import {UserContext} from '../App'


function Header() {
    const {user, setUser} = useContext(UserContext);
    return(
        <header>
            <nav>
                {user 
                ? <button onClick={() => setUser(null)}>Logout</button>
                :<button onClick ={() => setUser('Ashley')}>Login</button>
                }
            </nav>
        </header>
    )
}

export default Header