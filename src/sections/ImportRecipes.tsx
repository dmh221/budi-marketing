import FeatureSection from '@/components/FeatureSection';
import VideoPhone from '@/components/VideoPhone';

export default function ImportRecipes() {
  const heading = "IMPORT RECIPES FROM IMAGES, URLS, TEXT, OR MANUALLY.";
  const body = "Budi uses advanced parsing technology and generates a beautiful, recipe-book style image for every recipe.";

  const visual = <VideoPhone videoSrc="/videos/recipe-import.mp4" alt="Import recipes demo" />;

  return <FeatureSection heading={heading} body={body} visual={visual} layout="text-right" />;
}
