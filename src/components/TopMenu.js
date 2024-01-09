import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Topmenu() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <button onClick={goBack}>
            <ArrowBackIcon />
          </button>
          <Link className="font-semibold text-xl" to="/schedule-seoul">
            스케줄서울
          </Link>
          <Link to="/list" className="">
            <ManageSearchIcon />
          </Link>

        </div>
      </div>
    </div>
  )

}

export default Topmenu;