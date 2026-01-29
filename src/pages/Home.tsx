import Hero from '../components/Hero';
import ImportRecipes from '../sections/ImportRecipes';
import BrowseFeed from '../sections/BrowseFeed';
import OrganizeFolders from '../sections/OrganizeFolders';
import FeatureGrid from '../components/FeatureGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <ImportRecipes />
      <BrowseFeed />
      <OrganizeFolders />
      <FeatureGrid />
    </>
  );
}
