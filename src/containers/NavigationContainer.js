import React from 'react'
import { Navbar, Button } from '../components'

import firebaseApp from '../firebase';

export default function NavigationContainer() {
    return (
        <Navbar>
            <Navbar.Frame>
                <Navbar.Logotype to='/' >MovieBoard</Navbar.Logotype>

                <Navbar.Group>
                <Button.Link to='/' >My list</Button.Link>
                <Button.Link to='/add' >Search</Button.Link>
                <Button onClick={() => firebaseApp.auth().signOut()} >Sign out</Button>
                </Navbar.Group>

            </Navbar.Frame>
        </Navbar>
    )
}