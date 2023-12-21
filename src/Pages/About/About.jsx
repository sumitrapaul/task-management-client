import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className="my-5 space-y-6 p-5 max-w-7xl mx-auto bg-cyan-200">
            <Helmet>
          <title>TaskMaster | About</title>
        </Helmet>
        <h2 className="text-2xl md:text-3xl font-bold my-2 text-center text-cyan-600">
          About Task Management
        </h2>
       <div className="bg-base-100 rounded-xl p-4 space-y-2">
       <h4 className="text-2xl">Key Features</h4>
        
            <li>Task creation and management</li>
            <li>Priority setting</li>
            <li>Deadline tracking</li>
        
       </div>
        <div className="bg-base-100 rounded-xl p-4 space-y-2">
        <h3 className="text-2xl">Mission Statement</h3>
        <li>Our mission is to provide a user-friendly platform for efficient task management</li>
        <li>Empower users to organize and prioritize their tasks effortlessly</li>
        <li>Facilitate collaboration and teamwork in achieving common goals</li>
        </div>
        <div className="bg-base-100 rounded-xl p-4 space-y-2">
        <h3 className="text-2xl">Our Values</h3>
        
            <li>User satisfaction comes first</li>
            <li>Continuous improvement and innovation</li>
            <li>Transparency and open communication</li>
        
        </div>
        </div>
    );
};

export default About;