import Numbers from "./Numbers";
import Square from "./Square";
function HomePage() {
  return (
    <div>
      <h1>Home Sweet Home</h1>

      <Numbers min={15} max={50}></Numbers>
      <Numbers min={30} max={80}></Numbers>
      <Numbers min={100} max={120}></Numbers>
      <Square width={400} height={300} bg="blue"></Square>
      <Square width={600} height={200} bg="green"></Square>
      <Square width={800} height={500} bg="yellow"></Square>
    </div>
  );
}
export default HomePage;
