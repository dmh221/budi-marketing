import FeatureSection from '@/components/FeatureSection';
import VideoPhone from '@/components/VideoPhone';

export default function BrowseFeed() {
  const heading = "PEOPLE HAVE ALWAYS CONNECTED OVER FOOD. NOW, YOU CAN CONNECT OVER COOKING AT HOME.";
  const body = `Can't decide what to make for dinner? Browse your recipes or get inspiration from what your friends are cooking.

Share your recipes with friends. Save your friends' recipes and customize them for yourself.`;

  const visual = <VideoPhone videoSrc="/videos/browse-feed.mp4" alt="Browse feed demo" />;

  return <FeatureSection heading={heading} body={body} visual={visual} layout="text-left" />;
}
