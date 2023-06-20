import { useState } from "react";
import Coffee from "./components/Coffee";
import Header from "./components/Header";
import { BsFillTrash3Fill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function App() {
  const [coffies, setCoffies] = useState([
    {
      id: 1,
      name: "Americano",
      price: 15000,
    },
    {
      id: 2,
      name: "Capucino",
      price: 18000,
    },
    {
      id: 3,
      name: "Avogato",
      price: 17500,
    },
  ]);

  const [newCoffee, setNewCoffee] = useState({
    id: coffies.length + 1,
    name: "",
    price: 0,
  });

  const [editCoffee, setEditCoffee] = useState({
    id: null,
    name: "",
    price: 0,
  });

  return (
    <>
      <Header />
      <main>
        <div className="card-read">
          {coffies.map((n) => (
            <Coffee key={n.id} id={n.id} name={n.name} price={n.price} />
          ))}
        </div>
        <div className="card-cud">
          <div className="card-add">
            <h2>Add New Menu</h2>
            <form className="add">
              <label>
                Id:
                <input type="text" value={newCoffee.id} disabled />
              </label>
              <label>
                Name:
                <input
                  type="text"
                  value={newCoffee.name}
                  onChange={(e) => {
                    setNewCoffee({
                      ...newCoffee,
                      name: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={newCoffee.price}
                  onChange={(e) => {
                    setNewCoffee({
                      ...newCoffee,
                      price: parseInt(e.target.value),
                    });
                  }}
                />
              </label>
              <div className="add-button">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCoffies([newCoffee, ...coffies]);
                    setNewCoffee({
                      id: newCoffee.id + 1,
                      name: "",
                      price: 0,
                    });
                  }}
                >
                  <MdAddCircleOutline /> Front
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCoffies([...coffies, newCoffee]);
                    setNewCoffee({
                      id: newCoffee.id + 1,
                      name: "",
                      price: 0,
                    });
                  }}
                >
                  <MdAddCircleOutline /> Rear
                </button>
              </div>
            </form>
          </div>
          <div className="card-del">
            <h2>Delete </h2>
            <div className="del-button">
              <div className="row-del">
                <button
                  onClick={() => {
                    setCoffies(coffies.slice(1, coffies.length));
                  }}
                >
                  <BsFillTrash3Fill /> Front
                </button>
                <button
                  onClick={() => {
                    setCoffies(coffies.slice(0, -1));
                  }}
                >
                  <BsFillTrash3Fill /> Rear
                </button>
              </div>
              <button
                onClick={() => {
                  setCoffies(coffies.slice(0, 0));
                }}
              >
                <BsFillTrash3Fill /> All
              </button>
            </div>
          </div>
          <div className="card-edit-del">
            <h2>Edit or Delete by ID</h2>
            <form>
              <label>
                Id:
                <input
                  type="number"
                  onChange={(e) => {
                    setEditCoffee({
                      ...editCoffee,
                      name: "",
                    });
                    coffies.map((n) => {
                      if (parseInt(e.target.value) === n.id) {
                        setEditCoffee({
                          ...editCoffee,
                          id: parseInt(e.target.value),
                          name: n.name,
                        });
                      }
                    });
                  }}
                />
              </label>
              <label>
                Name:
                <input
                  className="name-input"
                  type="text"
                  value={editCoffee.name}
                  onChange={(e) => {
                    coffies.map((n) => {
                      if (editCoffee.id === n.id) {
                        n.name = e.target.value;
                        setEditCoffee({
                          ...editCoffee,
                          name: n.name,
                        });
                      }
                    });
                  }}
                />
              </label>
              <div className="edit-price">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    coffies.map((n) => {
                      if (editCoffee.id === n.id) {
                        n.price += 1;
                        setEditCoffee({
                          ...editCoffee,
                          price: n.price,
                        });
                      }
                    });
                  }}
                >
                  <MdAddCircleOutline /> Increase Price
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    coffies.map((n) => {
                      if (editCoffee.id === n.id) {
                        n.price -= 1;
                        setEditCoffee({
                          ...editCoffee,
                          price: n.price,
                        });
                      }
                    });
                  }}
                >
                  <AiOutlineMinusCircle /> Decrease Price
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCoffies(coffies.filter((n) => editCoffee.id !== n.id));
                  setEditCoffee({
                    ...editCoffee,
                    name: "",
                  });
                }}
              >
                <BsFillTrash3Fill /> Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
