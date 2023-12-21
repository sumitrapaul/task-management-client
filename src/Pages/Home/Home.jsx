import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    return (
        <div>
           <Helmet>
        <title>TaskMaster | Home</title>
      </Helmet> 
      <Banner></Banner>
        </div>
    );
};

export default Home;