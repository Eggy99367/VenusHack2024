import './App.css'
import { Card } from './components/Card'

function App() {
  return <div className='App'>
    <Card 
    imgSrc={"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"}
    title={"Card Title"}
    description={"Description Here"}
    link={"https://image.shutterstock.com/image-photo/all-fast-food-collection-set-260nw-2353214487.jpg"}
    />
  </div>
}

export default App
