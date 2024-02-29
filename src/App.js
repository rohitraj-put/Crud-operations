import './App.css';
import { Routes, Route } from 'react-router-dom'
import UserInsert from './user/UserInsert'
import UserView from './user/UserView'
import UserUpdate from './user/UserUpdate'
import UserDelete from './user/UserDelete'
import Sign from './profile/Sign';
import Edit from './user/Edit';
import DeleteItem from './user/DeleteItem';




function App() {



  return (
    <>
      <Sign />
      <Routes>
        <Route path='/UserInsert' element={<UserInsert />} />
        <Route path='/UserView' element={<UserView />} />
        <Route path='/UserUpdate' element={<UserUpdate />} />
        <Route path='/UserUpdate/:id' element={<Edit />} />
        <Route path='/UserDelete' element={<UserDelete />} />
        <Route path='/UserDelete/:id' element={<DeleteItem />} />

      </Routes>
    </>
  );
}

export default App;
