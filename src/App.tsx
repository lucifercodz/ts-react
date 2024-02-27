import './App.css';
import { MenuBar } from './components/MenuBar';
import { LoggedIn } from './components/state/LoggedIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UsercontextProvider } from './components/context/Usercontext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { ClassCounter } from './components/class/ClassCounter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';

function App() {
  const personName = {
    first: "Lucifer",
    last:"Morningstar",
  }

  const nameList = [
    {
      first : 'Ram',
      last : 'ji',
      age: 10,
    },
    {
      first : 'Sam',
      last : 'ji',
      age: 11,
    },
    {
      first : 'kam',
      last : 'ji',
      age: 12,
    },
  ]
  return (
    <div className="App">
      <Router>
        <MenuBar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route 
              caseSensitive
              path="/greet" 
              element={<Greet name="Lucifer" Islogin={true} />}>
            </Route>

            <Route 
              caseSensitive 
              path="/person" 
              element={<Person name={personName} />}>
            </Route>

            <Route 
              caseSensitive
              path="/personllist" 
              element={<PersonList names={nameList} />}>
            </Route>

            <Route 
              caseSensitive
              path="/status" 
              element={<Status status='success' />}>
            </Route>

            <Route 
              caseSensitive
              path="/heading" 
              element={<Heading>Placeholder Text</Heading>}>
            </Route>

            <Route 
              caseSensitive
              path="/oscar" 
              element={
                <Oscar>
                  <Heading>Oscar goes to Lucifer</Heading>
                </Oscar>
              }
            >
            </Route>

            <Route 
              caseSensitive
              path="/button" 
              element={
                <Button 
                  handleclick={(event, id) => {
                    console.log("Button Clicked", event, id)
                  }} 
                />
              }
            >
            </Route>

            <Route 
              caseSensitive
              path="/input" 
              element={<Input value='' handlechange={(event) => console.log(event)} />}>
            </Route>

            <Route 
              caseSensitive
              path="/container" 
              element={<Container styles={{border: "1px solid black", padding: "1rem"}} />}>
            </Route>

            <Route 
              caseSensitive
              path="/logInOut" 
              element={<LoggedIn/>}>
            </Route>

            <Route 
              caseSensitive
              path="/user" 
              element={<User />}>
            </Route>

            <Route 
              caseSensitive
              path="/counter" 
              element={<Counter />}>
            </Route>

            <Route 
              caseSensitive
              path="/t-box" 
              element={
                <ThemeContextProvider>
                  <Box />
                </ThemeContextProvider>
              }>
            </Route>

            <Route 
              caseSensitive
              path="/text-user" 
              element={
                <UsercontextProvider>
                  <User />
                </UsercontextProvider>
              }>
            </Route>

            <Route 
              caseSensitive
              path="/dom-ref" 
              element={<DomRef />}>
            </Route>

            <Route 
              caseSensitive
              path="/mutable-ref" 
              element={<MutableRef />}>
            </Route>

            <Route 
              caseSensitive
              path="/class-counter" 
              element={<ClassCounter message='This is Counter' />}>
            </Route>

            <Route 
              caseSensitive
              path="/auth-profile" 
              element={<Private isLoggedin={true} component={Profile} />}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
