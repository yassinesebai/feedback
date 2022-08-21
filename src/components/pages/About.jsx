import Card from "../shared/Card";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          dignissimos rerum, eligendi hic explicabo obcaecati quis cupiditate
          minus ex. Ad ullam consectetur neque placeat tenetur asperiores
          dolores vitae rem excepturi.
        </p>
        <p style={{ color: "red" }}>Verion 1.0.0</p>
        <p>
          <Link to="/">
            <FaArrowLeft
              style={{ verticalAlign: "middle", marginRight: "6px" }}
            />
            Back to Home
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
