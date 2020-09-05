import React, { useState, useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';
import { Grid, Typography, Input, Button, FormContainer } from '../components'

const SignIn = ({ history }) => {
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPaswword] = useState('')

    const handleSignIn = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;

            try {
                await firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }, [history]

    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    const formValidation = emailAddress === '' || !emailAddress.includes('@') || password === '' || password.length < 6

    return (
        <Grid maxFreeze={'true'} >
            <Grid.Row>
                <Grid.Col size={'1'}>
                    <FormContainer>
                        <Typography.TitleLarge>Sign In</Typography.TitleLarge>
                        <FormContainer.Form onSubmit={handleSignIn} >
                            <Input.LabelLarge htmlFor='email'>Email</Input.LabelLarge>
                            <Input.Wide
                                required
                                name='email'
                                type='email'
                                placeholder='Email address'
                                value={emailAddress}
                                onChange={({ target }) => setemailAddress(target.value)}
                                />
                            <Input.LabelLarge htmlFor='password' >Password</Input.LabelLarge>
                            <Input.Wide
                                required
                                name='password'
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={({ target }) => setPaswword(target.value)}
                            />
                                <Button.Large type='submit' disabled={formValidation} >Sign In</Button.Large>
                                <Button.Link to='/signup'>Sign Up</Button.Link>
                        </FormContainer.Form>
                    </FormContainer>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    )
}

export default withRouter(SignIn);