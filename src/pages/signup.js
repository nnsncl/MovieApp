import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseApp from '../firebase';
import { Grid, Typography, Input, Button, FormContainer } from '../components'

const SignUp = ({ history }) => {
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPaswword] = useState('')

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history])

    const formValidation = firstName === '' || emailAddress === '' || !emailAddress.includes('@') || password === '' || password.length < 6

    return (
        <Grid maxFreeze={'true'} >
        <Grid.Row>
            <Grid.Col size={'1'}>
                <FormContainer>
                    <Typography.TitleLarge>Sign Up</Typography.TitleLarge>
                    <FormContainer.Form onSubmit={handleSignUp} name='sign-up-form' >
                        <Input.LabelLarge htmlFor='name'>Name</Input.LabelLarge>
                        <Input.Wide
                            required
                            name='name'
                            type='text'
                            placeholder='Your name'
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Input.LabelLarge htmlFor='email'>Email</Input.LabelLarge>
                        <Input.Wide
                            required
                            name='email'
                            type='email'
                            placeholder='Your Email address'
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
                            <Button.Large type='submit' disabled={formValidation}  >Sign Up</Button.Large>
                            <Button.Link to='/signin'>Sign In</Button.Link>
                    </FormContainer.Form>
                </FormContainer>
            </Grid.Col>
        </Grid.Row>
    </Grid>
    );
};

export default withRouter(SignUp);