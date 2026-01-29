import FeatureSection from '@/components/FeatureSection';
import VideoPhone from '@/components/VideoPhone';

export default function OrganizeFolders() {
  const heading = "YOUR PERSONAL, DYNAMIC RECIPE BOOK.";
  const body = `All your recipes in one place. Designed to evolve with you.

Create folders, search across recipes or by ingredients, and see photos from each time you've cooked a recipe.`;

  const visual = <VideoPhone videoSrc="/videos/recipe-book.mp4" alt="Recipe book demo" />;

  return <FeatureSection heading={heading} body={body} visual={visual} layout="text-right" />;
}
