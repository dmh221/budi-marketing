import FeatureSection from '@/components/FeatureSection';
import AnimatedPhone from '@/components/AnimatedPhone';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function PublishProfile() {
  const heading = "Share Your Recipe Collection";
  const body = `Build a beautiful profile showcasing your favorite recipes. Share your culinary journey with friends, grow your following, and inspire others with what you love to cook.

Your recipes, your story. Make it yours.`;

  const visual = (
    <AnimatedPhone>
      <div className="h-full overflow-y-auto hide-scrollbar">
        {/* Profile Header - pixel perfect match to ProfileHeader.tsx */}
        <div className="px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-budi-lime/10 flex items-center justify-center flex-shrink-0">
              <UserCircleIcon className="w-12 h-12 text-budi-lime" />
            </div>
            <div>
              <div className="text-lg font-bold text-text-primary">Jamie Martinez</div>
              <div className="text-xs text-text-secondary mt-1">Home cook & food lover</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-center pt-2">
            <div>
              <div className="text-base font-bold text-text-primary">42</div>
              <div className="text-xs text-text-secondary">Recipes</div>
            </div>
            <div>
              <div className="text-base font-bold text-text-primary">234</div>
              <div className="text-xs text-text-secondary">Followers</div>
            </div>
            <div>
              <div className="text-base font-bold text-text-primary">156</div>
              <div className="text-xs text-text-secondary">Following</div>
            </div>
          </div>
        </div>

        {/* Recipe Grid - 3 columns matching RecipeCard.tsx */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {/* Recipe cards matching RecipeCard.tsx h-[126px] aspect */}
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-orange/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-lime/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-pink/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-lime/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-orange/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-pink/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-lime/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
            <button className="bg-card relative rounded-md overflow-hidden w-full h-[84px] transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none group">
              <div className="absolute inset-0 bg-budi-orange/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent group-hover:from-black/55 group-hover:to-black/55 transition-all rounded-md" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all rounded-md pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedPhone>
  );

  return <FeatureSection heading={heading} body={body} visual={visual} layout="text-right" />;
}
