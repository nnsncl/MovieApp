import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseApp from '../firebase';
import { Grid, Typography, Input, Button, FormContainer } from '../components'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        // useCallback is used to memoize callbacks
        event.preventDefault();
        // Avoid page reload on sumbit
        const { email, password } = event.target.elements;

        try {
            await firebaseApp
                // Call createUserWithEmailAndPassword function from Firebase API and pass in email and password values
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            // redirect to the Home private route
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history])

    return (
        <Grid maxFreeze={'true'} >
        <Grid.Row>
            <Grid.Col size={'1'}>
                <FormContainer>
                    <Typography.TitleLarge>Sign Up</Typography.TitleLarge>
                    <FormContainer.Form onSubmit={handleSignUp} >
                        <Input.LabelLarge htmlFor='name'>Name</Input.LabelLarge>
                        <Input.Wide name='name' type='text' placeholder='name' />
                        <Input.LabelLarge htmlFor='email'>Email</Input.LabelLarge>
                        <Input.Wide name='email' type='email' placeholder='Email address' />
                        <Input.LabelLarge htmlFor='password' >Password</Input.LabelLarge>
                        <Input.Wide name='password' type='password' placeholder='Password' />
                            <Button.Large type='submit' >Sign Up</Button.Large>
                            <Button.Link to='/signin'>Sign In</Button.Link>
                    </FormContainer.Form>
                </FormContainer>
            </Grid.Col>
        </Grid.Row>
    </Grid>
    );
};

export default withRouter(SignUp);