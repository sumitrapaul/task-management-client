import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Benefit from "../../components/Benefit/Benefit";


const Home = () => {
    return (
        <div>
           <Helmet>
        <title>TaskMaster | Home</title>
      </Helmet> 
      <Banner></Banner>
      <Benefit></Benefit>
        </div>
    );
};

export default Home;