import Header from './components/Header';
import Hero from './components/Hero';
import ImportRecipes from './sections/ImportRecipes';
import BrowseFeed from './sections/BrowseFeed';
import OrganizeFolders from './sections/OrganizeFolders';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background light">
      <Header />
      <Hero />
      <ImportRecipes />
      <BrowseFeed />
      <OrganizeFolders />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
