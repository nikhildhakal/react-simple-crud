const Datetime = () => {
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
    <span
      style={{
        color: "slategray",
        fontWeight: "bold",
      }}
    >
      {d}, {month} {yr} {hr}:{min}:{sec} {ampm}
    </span>
  );
};

export default Datetime;
