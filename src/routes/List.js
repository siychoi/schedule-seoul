import { useEffect, useState } from "react";
import SearchRequirement from "../components/SearchRequirement";
import Topmenu from "../components/TopMenu";

function List() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <Topmenu />

      {loading ? <h1>Loading...</h1> :

        <SearchRequirement />

      }
    </div>
  );
}

export default List;