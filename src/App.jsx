import "./App.css";

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    console.log({ name, email });

    


  };

  return (
    <>
      <h1>Client site user information</h1>

      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
