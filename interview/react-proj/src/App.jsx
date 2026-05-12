import React, {useState} from "react";

function App() {
  const listItems = [
    {
      name: "React Hooks",
      description:
        "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and have become the standard way to write React components.",
    },
    {
      name: "useState",
      description:
        "The useState Hook allows you to add state to functional components. It returns an array with the current state value and a function to update it.",
    },
  ];


  return (<>
    App
    <Items listItems={listItems}/>
  </>);
}

export default App;


function Items({listItems}) {
    // console.log(listItems)
    return (
        <div>
        {/* <SingleItem />
            {listItems[0].name}
            {listItems[0].description} */}
            <ul>
            {
                listItems.map((item, id) => <li key={id}><SingleItem name={item.name} description={item.description} /></li>)
            }
            </ul>

        </div>
    )
}

function SingleItem ({name, description}) {
    // console.log(name, description)
    const [show, setShow] = useState(false);
    return (
        <div style={{'border': '2px solid black'}}>
            <p>{name}</p>
            {show && <p>{description}</p>}
            <button onClick={() => setShow(!show)} >X</button>
        </div>
    )
}