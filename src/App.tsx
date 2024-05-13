import './App.css';
import MyWeather from './MyWeather';
import Timer from './Timer';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <MyWeather weather='맑음'>일기예보</MyWeather>
      <Timer></Timer>
    </div>
  );
}

export default App;
