import './App.css'
import { CourseStaff } from './components/courseStaff.tsx'

function App() {
  return (
    <div>
      <h2>Welcome to my first React application</h2>
      <div>
        <CourseStaff name="Taymaz" title="Professor" rating={92} />
        <CourseStaff name="Jeffery" title="Teaching Assistant" rating={90} />
        <CourseStaff name="Sadiq" title="Course Assistant" rating={90} />
        <CourseStaff name="Ale" title="Course Assistant" rating={90} />
      </div>
    </div>
  )
}

export default App
