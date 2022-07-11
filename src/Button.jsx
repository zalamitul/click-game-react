import "./App.css";

export default function Button({ incr, count }) {
  return (
    <div className="button">
      <button
        onClick={() => {
          incr(count);
        }}
      >
        click Me
      </button>
    </div>
  );
}
