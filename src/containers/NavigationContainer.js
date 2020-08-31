import React from 'react'
import { Navbar } from '../components'

import firebaseApp from '../firebase';

export default function NavigationContainer() {
    return (
        <Navbar>
            <Navbar.Frame>
                <Navbar.Logotype>MovieBoard</Navbar.Logotype>
                <Navbar.Button onClick={() => firebaseApp.auth().signOut()} >
                    Sign out
            </Navbar.Button>
            </Navbar.Frame>
        </Navbar>
    )
}