import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
// import { Button } from './components/Button';
// import { Container } from './components/Container';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Input } from './components/Input';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // const personName = {
  //   first: "Lucifer",
  //   last:"Morningstar",
  // }

  // const nameList = [
  //   {
  //     first : 'Ram',
  //     last : 'ji',
  //     age: 10,
  //   },
  //   {
  //     first : 'Sam',
  //     last : 'ji',
  //     age: 11,
  //   },
  //   {
  //     first : 'kam',
  //     last : 'ji',
  //     age: 12,
  //   },
  // ]
  return (
    <div className="App">
      {/* <Greet name="Lucifer" Islogin={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='success' /> */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Lucifer</Heading>
      </Oscar> */}
      {/* <Button 
        handleclick={(event, id) => {
          console.log("Button Clicked", event, id)
        }}
      /> */}
      {/* <Input value='' handlechange={(event) => console.log(event)} /> */}
      {/* <Container styles={{border: "1px solid black", padding: "1rem"}} /> */}
      <LoggedIn />
    </div>
  );
}

export default App;
