function App() {
  const WeeklyOverview = weatherData.map(item => <WeeklyView key={item.id} item={item}/>)


  return (
    <div>Hello World!
    <WeeklyOverview />
    </div>
  );
}

export default App;
