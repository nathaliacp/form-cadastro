import { Link, useParams } from "react-router-dom";

import { Button, Card } from "@mui/material";

import cat from "../.././assets/img/pusheen-cat.png"
import "./home.css"

function Home() {
    
    const params = useParams();

    return(
        <main>
            <Card>
                <h1>Seja bem vindo/a, {params.name}</h1>

                <img src={cat} alt="bla" />

                <Button variant="outlined">
                    <Link className="homeBtn" to={"/"}>Voltar</Link>
                </Button>

            </Card>
           
        </main>
    )
}

export default Home;