export default function Coffee(props) {
  return (
    <div>
      <div className="card-menu" key={props.id}>
        <h3>| {props.id} |</h3>
        <div className="data-container">
          <h2>{props.name}</h2>
          <h3>IDR {props.price.toLocaleString()} </h3>
        </div>
      </div>
    </div>
  );
}
