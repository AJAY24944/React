import './App.css'
import DarkLight from './components/DarkLight'
import StudentProfile from './components/Student'

function App() {
  return(
    // <DarkLight/>
    <div>
      <StudentProfile name = "John" age = {25} city = "Hyd" isStudent = {false}/>
      <StudentProfile name = "Ajay" age = {23} city = "Hyd" isStudent = {true}/>
    </div>
  )
}

export default App
