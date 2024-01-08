import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import SimpleSlider from "../components/SimpleSlider";
import Topmenu from "../components/TopMenu";
import RecommendEvent from "../components/RecommendEvent";

function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  },[]);

  return (
    <div>
      <Topmenu />
      {loading ? <h1>Loading...</h1> :
        <Container>
          <SimpleSlider />
          <RecommendEvent />
        </Container>
      }
    </div>
  );
}

export default Home;

