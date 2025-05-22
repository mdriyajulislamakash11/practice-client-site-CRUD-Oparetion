import "./App.css";

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    console.log({ name, email });
    const users = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("successfully users added...")
        }
      });
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
