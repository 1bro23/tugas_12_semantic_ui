import 'semantic-ui-css/semantic.min.css';
import {
  Form,
  Checkbox,
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
  Input
} from 'semantic-ui-react';

function App() {
  return (
    <Grid textAlign='center'>
      <Grid.Row >
        <Grid.Column width={5}>
          <br/>
          <br/>
          <Header as='h2' color='teal'>
            <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png'/>
            Member Login
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment>
            <Form>
              <Form.Field>
                <Input icon={<Icon name='user'/>} type='email' placeholder='E-mail address' iconPosition='left'/>
              </Form.Field>
              <Form.Field>
                <Input icon={<Icon name='lock'/>} type='password' placeholder='Password' iconPosition='left'/>
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Condition'/>
              </Form.Field>
              <Button color='teal' fluid type='submit'>Login</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment secondary>
            <p>
              Tidak Punya Akun? Silahkan <a href='https://niomic.com/registration' target='blank'>Register</a>
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
