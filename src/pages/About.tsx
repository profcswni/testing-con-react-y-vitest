import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About</h1>

            <p>
                This is a simple example of a Vite + React application.
            </p>

            <p>
                Estamos integrando React con Vite, vitest y react-testing-library.
            </p>

            <p>
                <Link to={'/'}>Back to home</Link>
            </p>
        </div>
    );
}

export default About;
