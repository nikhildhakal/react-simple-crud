import "./App.css";

function App() {
  const title = "Nick's Blog";
  const link = "https://nikhilportfolio.netlify.app/";
  const date = new Date();
  const yr = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const time = Date.now();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[m];
  const ampm = hr >= 12 && min >= 0 ? " pm" : " am";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <a href={link} target="_blank">
          Portfolio
        </a>
        <p>
          {d}, {month} {yr} {hr}:{min}:{sec} {ampm}
        </p>
      </div>
    </div>
  );
}

export default App;
