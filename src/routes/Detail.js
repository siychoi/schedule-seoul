import { useEffect, useState} from "react";
import Container from '@mui/material/Container';
import EventDetail from "../components/EventDetail";
import OtherEvents from "../components/OtherEvents";
import Topmenu from "../components/TopMenu";

function Detail() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <Topmenu />
      {loading ? <h1>Loading...</h1> :
        <Container>
          <EventDetail />
          <OtherEvents />
        </Container>
        
      }
    </div>
  );
}

export default Detail;