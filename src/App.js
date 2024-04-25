//le composant
function MyButton() {
  return <button>Click me</button>;
}

//Matriochka
export default function MyApp() {
  return (
    <div>
      <h1>Hello world!</h1>
      <MyButton />
    </div>
  );
}
