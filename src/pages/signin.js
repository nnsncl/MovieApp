import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';
import { Grid, Typography, Input, Button, FormContainer } from '../components'

const SignIn = ({ history }) => {
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

    return (
        <Grid maxFreeze={'true'} >
            <Grid.Row>
                <Grid.Col size={'1'}>
                    <FormContainer>
                        <Typography.TitleLarge>Sign In</Typography.TitleLarge>
                        <FormContainer.Form onSubmit={handleSignIn} >
                            <Input.LabelLarge htmlFor='email'>Email</Input.LabelLarge>
                            <Input.Wide name='email' type='email' placeholder='Email address' />
                            <Input.LabelLarge htmlFor='password' >Password</Input.LabelLarge>
                            <Input.Wide name='password' type='password' placeholder='Password' />
                                <Button.Large type='submit' >Sign In</Button.Large>
                                <Button.Link to='/signup'>Sign Up</Button.Link>
                        </FormContainer.Form>
                    </FormContainer>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    )
}

export default withRouter(SignIn);