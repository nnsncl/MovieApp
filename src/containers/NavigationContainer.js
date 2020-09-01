import React from 'react'
import { Navbar, Button } from '../components'

import firebaseApp from '../firebase';

export default function NavigationContainer() {
    return (
        <Navbar>
            <Navbar.Frame>
                <Navbar.Logotype>MovieBoard</Navbar.Logotype>
                <Button onClick={() => firebaseApp.auth().signOut()} >
                Sign out
                </Button>
            </Navbar.Frame>
        </Navbar>
    )
}