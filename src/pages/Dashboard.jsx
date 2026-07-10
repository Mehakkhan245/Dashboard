import { Link } from "react-router-dom";
import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>React Dashboard</h1>

      <div className="buttons">

        <Link to="/github" className="btn github">
          GitHub User Finder
        </Link>

        <Link to="/weather" className="btn weather">
          Weather App
        </Link>

        <Link to="/todo" className="btn todo">
          Todo App
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;