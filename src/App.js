import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureOne from './components/FeatureOne';
import DailyStats from './components/DailyStats';
import { Card } from './components/Card';
import budget from "./assets/budget.png";
import computer from "./assets/computer.png";
import cyber from "./assets/cyber.png";
import connection from "./assets/connection.png";
import brainstorming from "./assets/brainstorming.png";
import trade from "./assets/trade.png";
import bank from "./assets/bank.png";
import SocialMediaPromotion from './components/SocialMediaPromotion';
import DevSection from './components/DevSection';
import Footer from './components/Footer';
import PDF from './components/PDF';
import video from './assets/africa.mp4';

function App() {
  const features = [
    {
      src: computer,
      title: "Design",
      description:
        "We Design Software Systems",
    },
    {
      src: bank,
      title: "Support",
      description:
        "Supporting Fintechs and Banks",
    },
    {
      src: budget,
      title: "Digital",
      description: "To Enable Digital Payments",
    },
    {
      src: cyber,
      title: "Insurance",
      description: "With Built-In Security Layers Rather Than Bolted-On",
    },
    {
      src: connection,
      title: "Insurance",
      description: "Enabling More Efficient Trade and Transactions",
    },{
      src: brainstorming,
      title: "Insurance",
      description: "Using Cutting Edge Technology",
    },
  
  ];
  return (
    <div className="home">
       <video className="hero-video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
  </video>
      <Header />
      <HeroSection />
      <FeatureOne />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index}  >
  <img style={{ width: '150px', height: '150px' }} src={feature.src} alt={feature.title} />
  <p>{feature.description}</p>
</Card>

            )
          })
        }
      </div>
      <DevSection />
      <SocialMediaPromotion />
        <PDF />
      <Footer />
    </div>
  );
}

export default App;
