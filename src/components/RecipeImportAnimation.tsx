import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  HomeIcon,
  BookOpenIcon,
  PlusIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

// Real recipe data from CSV with actual Supabase storage URLs
const REAL_RECIPES = [
  {
    id: 1,
    name: 'Tossed Steak, Bean, and Corn Salad',
    cookTime: 25,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/02da3dab-436d-486c-ad20-fac88d07f421/c7cff13f-0752-4d6a-a379-a9fb6ad6aaf4-medium-webp.webp',
  },
  {
    id: 2,
    name: 'Thai Green Curry Cod',
    cookTime: 30,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/ae670c93-7912-4c86-9f74-db534ba7abf3/5b1d8c07-ec6d-4ce4-bb5f-4425f10132d1-medium-webp.webp',
  },
  {
    id: 3,
    name: 'Marry Me Butter Beans',
    cookTime: 20,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/47595825-b710-46a7-b776-2c09c418fb48/6bcd0701-94a9-4106-b934-921f0cd99e98-small-webp.webp',
  },
  {
    id: 4,
    name: 'Seared Miso-Salmon with Edamame',
    cookTime: 25,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/d48a7a59-3cc7-43e0-a914-ea99910da732/a0b436e0-bfe4-4f79-9814-b4f79a3e46b5-small-webp.webp',
  },
  {
    id: 5,
    name: 'White Chicken Chili',
    cookTime: 35,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/a04cee95-7e4c-481b-86f6-3151d53fcb4b/4fcedf56-8019-48c5-af97-5c51e488e62b-small-webp.webp',
  },
  {
    id: 6,
    name: 'Easy Rice Cooker Mexican Rice',
    cookTime: 15,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/4901da2c-38d8-4d82-81ab-4b0803136aa5/12041aef-ab36-4c3f-b710-018a5240c9cd-small-webp.webp',
  },
  {
    id: 7,
    name: 'Salsa Verde Chicken',
    cookTime: 20,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/66c5926e-a2f8-472d-a6f1-681e44b1b79b/feea7b97-697d-4c52-b167-71505d1e8bc3-small-webp.webp',
  },
  {
    id: 8,
    name: 'Spiced Rainbow Carrots with Chicken',
    cookTime: 40,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/be7c1461-63f7-40b2-835b-5cce2e29dd8e/a1ff9f7b-9075-49af-9fc0-5d498943c4f2-small-webp.webp',
  },
  {
    id: 9,
    name: 'Creamy Leek Butter Beans',
    cookTime: 15,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/5d930914-4aac-4c7f-8797-e6cc867ca518/5010ebda-571b-46af-8be4-7416757fb938-medium-webp.webp',
  },
];

interface RecipeImportAnimationProps {
  autoPlay?: boolean;
  className?: string;
}

type ImportState =
  | 'url-empty'
  | 'url-pasting'
  | 'url-filled'
  | 'image-upload'
  | 'text-empty'
  | 'text-pasting'
  | 'text-filled'
  | 'loading'
  | 'recipe-detail'
  | 'recipes';

export default function RecipeImportAnimation({
  autoPlay = true,
  className = '',
}: RecipeImportAnimationProps) {
  const [currentState, setCurrentState] = useState<ImportState>('url-empty');
  const [recipesStage, setRecipesStage] = useState(0);
  const [currentRecipeDetail, setCurrentRecipeDetail] = useState<number>(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    if (!autoPlay) return;

    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const sequence = async () => {
      if (!isMountedRef.current) return;

      // --- URL Import → BUTTER BEANS
      setCurrentState('url-empty');
      await wait(1500);
      if (!isMountedRef.current) return;

      setCurrentState('url-pasting');
      await wait(800);
      if (!isMountedRef.current) return;

      setCurrentState('loading');
      await wait(2500);
      if (!isMountedRef.current) return;

      // Show Butter Beans recipe detail
      setCurrentRecipeDetail(0); // 0 = beans
      setCurrentState('recipe-detail');
      await wait(3500);
      if (!isMountedRef.current) return;

      // Show recipe list with beans on top
      setCurrentState('recipes');
      setRecipesStage(0); // stage 0 = beans on top
      await wait(2500);
      if (!isMountedRef.current) return;

      // --- Image Import → THAI GREEN CURRY
      setCurrentState('image-upload');
      await wait(2000);
      if (!isMountedRef.current) return;

      setCurrentState('loading');
      await wait(2500);
      if (!isMountedRef.current) return;

      // Show Thai Green Curry recipe detail
      setCurrentRecipeDetail(1); // 1 = curry
      setCurrentState('recipe-detail');
      await wait(3500);
      if (!isMountedRef.current) return;

      // Show recipe list with curry on top
      setCurrentState('recipes');
      setRecipesStage(1); // stage 1 = curry on top, beans below
      await wait(2500);
      if (!isMountedRef.current) return;

      // --- Text Import → STEAK SALAD
      setCurrentState('text-empty');
      await wait(1500);
      if (!isMountedRef.current) return;

      setCurrentState('text-pasting');
      await wait(800);
      if (!isMountedRef.current) return;

      setCurrentState('loading');
      await wait(2500);
      if (!isMountedRef.current) return;

      // Show Steak Salad recipe detail
      setCurrentRecipeDetail(2); // 2 = steak
      setCurrentState('recipe-detail');
      await wait(3500);
      if (!isMountedRef.current) return;

      // Show recipe list with steak on top
      setCurrentState('recipes');
      setRecipesStage(2); // stage 2 = steak on top, curry+beans below
      await wait(2500);
    };

    const runSequence = async () => {
      while (isMountedRef.current) {
        await sequence();
      }
    };

    runSequence();

    return () => {
      isMountedRef.current = false;
    };
  }, [autoPlay]);

  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      {/* iPhone 17 Frame - Using Exact Figma Asset */}
      <div className="relative aspect-[393/852] transform scale-90 origin-center">
        {/* Screen Content - positioned to fit within the frame */}
        <div className="absolute inset-0" style={{ padding: '12px' }}>
          <div className="relative h-full bg-background rounded-[40px] overflow-hidden" style={{ paddingTop: '35px', paddingBottom: '8px' }}>
            <AnimatePresence mode="wait">
            {(currentState === 'url-empty' || currentState === 'url-pasting' || currentState === 'url-filled') && (
              <motion.div
                key="url"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <URLImportScreen state={currentState as 'url-empty' | 'url-pasting' | 'url-filled'} />
              </motion.div>
            )}

            {currentState === 'image-upload' && (
              <motion.div
                key="image"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <ImageImportScreen />
              </motion.div>
            )}

            {(currentState === 'text-empty' || currentState === 'text-pasting' || currentState === 'text-filled') && (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <TextImportScreen state={currentState as 'text-empty' | 'text-pasting' | 'text-filled'} />
              </motion.div>
            )}

            {currentState === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <LoadingScreen />
              </motion.div>
            )}

            {currentState === 'recipe-detail' && (
              <motion.div
                key="recipe-detail"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <RecipeDetailScreen recipeIndex={currentRecipeDetail} />
              </motion.div>
            )}

            {currentState === 'recipes' && (
              <motion.div
                key="recipes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <RecipesScreen recipesStage={recipesStage} />
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>

        {/* Figma iPhone 17 Frame Overlay */}
        <img
          src="/assets/iPhone 17.png"
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// SCREEN COMPONENTS
// ============================================================================

interface URLImportScreenProps {
  state: 'url-empty' | 'url-pasting' | 'url-filled';
}

const PASTED_URL = 'https://www.liveeatlearn.com/marry-me-butter-beans/';

function URLImportScreen({ state }: URLImportScreenProps) {
  const urlText = state === 'url-empty' ? '' : PASTED_URL;

  return (
    <div className="w-full h-full bg-background px-5 pt-3 pb-5 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-4 flex-shrink-0">
        <div className="text-xs text-text-secondary mb-1 font-normal">POST</div>
        <div className="text-sm text-budi-lime font-semibold">RECIPE</div>
      </div>

      <div className="space-y-6 flex-1">
        {/* Import from Image box */}
        <div className="border-2 border-dashed border-border-color/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-3xl mb-2">📤</div>
          <div className="font-semibold text-text-primary">Import from Image</div>
          <div className="text-xs text-text-secondary">Upload a screenshot, photo, or PDF</div>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* URL Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2">
            {!urlText ? (
              <span className="text-text-secondary/70">Paste a recipe link to auto-fill...</span>
            ) : (
              <span className="text-text-primary">
                {urlText}
              </span>
            )}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs">
            Import
          </button>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Text Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2 text-text-secondary/70">
            Paste recipe text to auto-fill...
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-[60%] px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs opacity-50">
            Import
          </button>
        </div>

        {/* OR, ENTER MANUALLY Divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold pt-6">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4 uppercase">Or, Enter Manually</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Manual fields */}
        <div className="space-y-4">
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">Recipe Name</div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., Summer heirloom tomato caprese salad
            </div>
          </div>
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">
              Cook Time <span className="text-budi-lime/70 normal-case">(minutes)</span>
            </div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageImportScreen() {
  return (
    <div className="w-full h-full bg-background px-5 pt-3 pb-5 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-4 flex-shrink-0">
        <div className="text-xs text-text-secondary mb-1 font-normal">POST</div>
        <div className="text-sm text-budi-lime font-semibold">RECIPE</div>
      </div>

      <div className="space-y-6 flex-1">
        {/* Import from Image box - Active state */}
        <div className="border-2 border-dashed border-budi-lime/50 bg-budi-lime/5 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-3xl mb-2 animate-pulse">📤</div>
          <div className="text-sm font-semibold text-text-primary">Analyzing...</div>
          <div className="text-xs text-text-secondary">Upload a screenshot, photo, or PDF</div>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* URL Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2 text-text-secondary/70">
            Paste a recipe link to auto-fill...
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs opacity-50">
            Import
          </button>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Text Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2 text-text-secondary/70">
            Paste recipe text to auto-fill...
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-[60%] px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs opacity-50">
            Import
          </button>
        </div>

        {/* OR, ENTER MANUALLY Divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold pt-6">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4 uppercase">Or, Enter Manually</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Manual fields */}
        <div className="space-y-4">
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">Recipe Name</div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., Summer heirloom tomato caprese salad
            </div>
          </div>
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">
              Cook Time <span className="text-budi-lime/70 normal-case">(minutes)</span>
            </div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TextImportScreenProps {
  state: 'text-empty' | 'text-pasting' | 'text-filled';
}

const PASTED_TEXT = `Tossed Steak, Bean, and Corn Salad with Cilantro

Ingredients
steak
cannellini beans, rinsed and drained
corn
cherry tomatoes, halved
cucumber, diced
red bell pepper, diced
yellow or orange bell pepper, diced
red onion, finely chopped
fresh mozzarella
cilantro

Instructions
Season steak generously. Sear in a hot skillet with olive oil, 3–5 minutes per side for medium-rare (or to preference). Rest 5 minutes, then dice into bite-size pieces.
In a large bowl, combine cannellini beans, corn, tomatoes, cucumber, bell peppers, red onion, mozzarella, and parsley.
Add diced steak to the bowl. Drizzle with olive oil and fresh lime juice (start light, add more as needed). Toss gently to combine. Serve immediately.`;

function TextImportScreen({ state }: TextImportScreenProps) {
  const textContent = state === 'text-empty' ? '' : PASTED_TEXT;

  return (
    <div className="w-full h-full bg-background px-5 pt-3 pb-5 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-4 flex-shrink-0">
        <div className="text-xs text-text-secondary mb-1 font-normal">POST</div>
        <div className="text-sm text-budi-lime font-semibold">RECIPE</div>
      </div>

      <div className="space-y-6 flex-1">
        {/* Import from Image box */}
        <div className="border-2 border-dashed border-border-color/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-3xl mb-2">📤</div>
          <div className="font-semibold text-text-primary">Import from Image</div>
          <div className="text-xs text-text-secondary">Upload a screenshot, photo, or PDF</div>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* URL Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2 text-text-secondary/70">
            Paste a recipe link to auto-fill...
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs opacity-50">
            Import
          </button>
        </div>

        {/* OR divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4">OR</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Text Input */}
        <div className="relative">
          <div className="w-full bg-transparent p-0 pr-20 text-sm border-0 border-b border-border-color/30 py-2 min-h-[24px]">
            {textContent ? (
              <div className="text-text-primary text-xs leading-relaxed whitespace-pre-line">
                {textContent}
              </div>
            ) : (
              <div className="text-text-secondary/70">Paste recipe text to auto-fill...</div>
            )}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-[60%] px-4 py-1.5 bg-card border border-border-color/20 text-text-secondary rounded-md font-semibold text-xs">
            Import
          </button>
        </div>

        {/* OR, ENTER MANUALLY Divider */}
        <div className="flex items-center text-sm text-text-secondary font-semibold pt-6">
          <div className="flex-grow h-px bg-border-color/20" />
          <span className="px-4 uppercase">Or, Enter Manually</span>
          <div className="flex-grow h-px bg-border-color/20" />
        </div>

        {/* Manual fields */}
        <div className="space-y-4">
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">Recipe Name</div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., Summer heirloom tomato caprese salad
            </div>
          </div>
          <div>
            <div className="text-[11px] text-budi-lime mb-2 font-normal uppercase tracking-wide">
              Cook Time <span className="text-budi-lime/70 normal-case">(minutes)</span>
            </div>
            <div className="w-full bg-transparent p-0 text-sm border-0 border-b border-border-color/30 pb-2 text-text-secondary/70">
              e.g., 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center">
      {/* Budi Logo */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-[120px] h-[120px]"
      >
        <img
          src="/assets/logo_budi-lime_icon_transparent.svg"
          alt="Budi Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}

interface RecipeDetailScreenProps {
  recipeIndex: number;
}

// Recipe detail data matching the video frames
const RECIPE_DETAILS = [
  // Butter Beans
  {
    id: 3,
    name: 'Marry Me Butter Beans (with Creamy Tuscan Sauce)',
    cookTime: 20,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/47595825-b710-46a7-b776-2c09c418fb48/6bcd0701-94a9-4106-b934-921f0cd99e98-small-webp.webp',
    ingredients: [
      '3 tbsp butter',
      '3 tsp minced garlic',
      '½ tsp salt',
      '½ tsp oregano',
      '½ tsp crushed red pepper flake',
      '½ tsp sun-dried tomatoes',
      '½ cup sun-dried tomato',
      '½ cup vegetable broth',
      '1 cup spinach',
      '1 cup heavy cream',
      '½ cup parmesan',
      '2 tbsp basil',
    ],
    instructions: 'Heat butter in a skillet. Add minced garlic, salt, oregano, crushed red pepper flake, and sun-dried tomatoes. Cook until fragrant. Add butter beans, vegetable broth, spinach, heavy cream, and parmesan. Stir to combine. Crack uncovered for 5 minutes. Top with basil, stir. Serve over pasta, rice or garlic bread. Stir in spinach, cream, and parmesan. Cook until thickened and beans are tender. Stir in parmesan and basil.',
  },
  // Thai Green Curry
  {
    id: 2,
    name: 'Thai Green Curry Cod',
    cookTime: 30,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/ae670c93-7912-4c86-9f74-db534ba7abf3/5b1d8c07-ec6d-4ce4-bb5f-4425f10132d1-medium-webp.webp',
    ingredients: [
      '400 g cod halves',
      '1 tbsp oil',
      '2 shallots',
      'Handful Thai basil leaves',
      '400 ml coconut milk',
      '25 g Thai green curry paste',
      '1 tbsp fish sauce',
      '1 tbsp lime juice',
      '1 tsp sugar',
      'Chicken bone broth',
      'Spinach',
      'Chilies or 2 limes',
    ],
    instructions: 'Slice shallots and half chillies. Pick most Thai basil leaves. Heat oil in a skillet with oil and cook until fragrant. Blend Thai coconut milk with spinach and coriander stalks. Heat oil in a large deep pan. If needed to help it blend. Stir in coconut milk. Bring to a simmer, add cod pieces. Cover pan and gently cook for 10 minutes until caramelized, then deglaze with lime fish sauce. When curry begins to thicken, add basil and lime juice. Stir in mixture. Add cod and cook 3-5 minutes until it flakes apart. Season with lime juice and...',
  },
  // Steak Salad
  {
    id: 1,
    name: 'Tossed Steak, Bean, and Corn Salad with Cilantro',
    cookTime: 25,
    imageUrl: 'https://cizybuhcdzsocylcfdur.supabase.co/storage/v1/object/public/recipe-images/dc3fd584-5aad-48fe-b3bc-8ee5ea1a9c64/02da3dab-436d-486c-ad20-fac88d07f421/c7cff13f-0752-4d6a-a379-a9fb6ad6aaf4-medium-webp.webp',
    ingredients: [
      'Steak',
      'Cannellini beans',
      'Corn',
      'Cherry tomatoes',
      'Cucumber',
      'Red bell pepper',
      'Yellow or orange bell pepper',
      'Red onion',
      'Fresh mozzarella',
      'Cilantro',
    ],
    instructions: 'Season steak generously. Sear in a hot skillet with olive oil, 3-5 minutes per side for medium-rare (or to preference). Rest 5 minutes, then dice into bite-size pieces. In a large bowl, combine cannellini beans, corn, tomatoes, cucumber, bell peppers, red onion, mozzarella, and parsley. Add diced steak to the bowl. Drizzle with olive oil and fresh lime juice (start light, add more as needed). Toss gently to combine. Serve immediately.',
  },
];

function RecipeDetailScreen({ recipeIndex }: RecipeDetailScreenProps) {
  const recipe = RECIPE_DETAILS[recipeIndex];

  return (
    <div className="w-full h-full bg-background flex flex-col overflow-y-auto">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <button className="w-8 h-8 flex items-center justify-center text-text-secondary" aria-label="Go back">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Three dots menu */}
      <div className="absolute top-4 right-4 z-10">
        <button className="w-8 h-8 flex items-center justify-center text-text-secondary" aria-label="More options">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>

      {/* Recipe Image */}
      <div className="px-4 pt-6">
        <div className="rounded-md overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-[33vh] object-cover"
            style={{ objectPosition: 'center 70%' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 pb-6 px-4 pt-4">
        {/* Header section */}
        <div className="space-y-2 -mb-2">
          <h2 className="text-base sm:text-lg font-bold text-text-secondary uppercase">{recipe.name}</h2>
        </div>

        {/* Divider */}
        <div className="border-b border-border-color/10 -mt-4"></div>

        {/* Ingredients and Instructions - Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Ingredients Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-bold text-budi-lime">Ingredients</h3>
              <button
                className="p-1 text-budi-lime transition-transform hover:scale-110 active:scale-95"
                aria-label="Add ingredients to your list"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <ul className="divide-y divide-border-color/10">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="py-1.5 text-sm text-text-secondary">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-budi-lime">Instructions</h3>
            <div className="text-sm text-text-secondary leading-relaxed space-y-1.5">
              {recipe.instructions.split('\n').map((step, i) => (
                <p key={i}>{step}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RecipesScreenProps {
  recipesStage: number;
}

function RecipesScreen({ recipesStage }: RecipesScreenProps) {
  const stage = recipesStage;

  const beans = REAL_RECIPES.find(r => r.id === 3)!; // Marry Me Butter Beans
  const curry = REAL_RECIPES.find(r => r.id === 2)!; // Thai Green Curry Cod
  const steak = REAL_RECIPES.find(r => r.id === 1)!; // Tossed Steak...

  const baseRest = REAL_RECIPES.filter(r => ![1, 2, 3].includes(r.id));

  const stagedTop =
    stage === 0 ? [beans] :
    stage === 1 ? [curry, beans] :
    [steak, curry, beans];

  const stagedRecipes = [...stagedTop, ...baseRest];

  return (
    <div className="w-full h-full bg-background flex flex-col">
      {/* Header - EXACT match to React app */}
      <div className="px-5 py-4 border-b border-border-color/10 bg-background flex-shrink-0">
        <div className="text-xl font-semibold text-budi-lime mb-3">My Recipes</div>
        <div className="flex gap-5 text-sm">
          <span className="text-budi-lime font-semibold border-b-2 border-budi-lime pb-1">
            All
          </span>
          <span className="text-text-secondary font-normal">My Favorites</span>
          <span className="text-text-secondary font-normal">Want to Try</span>
        </div>
      </div>

      {/* Scrollable Recipe Grid */}
      <motion.div className="flex-1 overflow-hidden px-4 py-3">
        <div className="grid grid-cols-1 gap-2">
          {stagedRecipes.map((recipe) => {
            const isNewTopCard =
              (stage === 0 && recipe.id === 3) ||
              (stage === 1 && recipe.id === 2) ||
              (stage === 2 && recipe.id === 1);

            return (
              <motion.div
                key={recipe.id}
                layout
                initial={isNewTopCard ? { opacity: 0, y: 14, scale: 0.985 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Nav - Exact Heroicons from React app */}
      <div className="border-t border-border-color/10 py-3 flex justify-around items-center bg-background h-16 flex-shrink-0">
        <div className="w-7 h-7 text-text-secondary">
          <HomeIcon />
        </div>
        <div className="w-7 h-7 text-budi-lime">
          <StarIcon />
        </div>
        <div className="w-10 h-10 text-text-secondary">
          <PlusIcon style={{ strokeWidth: 1.25 }} />
        </div>
        <div className="w-7 h-7 text-text-secondary">
          <BookOpenIcon />
        </div>
        <div className="w-7 h-7 text-text-secondary">
          <UserIcon />
        </div>
      </div>
    </div>
  );
}

interface RecipeCardProps {
  recipe: {
    id: number;
    name: string;
    cookTime: number;
    imageUrl: string | null;
  };
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-card rounded-md overflow-hidden w-full relative h-[126px] pointer-events-none">
      {/* Recipe Image */}
      {recipe.imageUrl ? (
        <>
          <div
            className="absolute inset-0 w-full h-full bg-cover"
            style={{
              backgroundImage: `url(${recipe.imageUrl})`,
              backgroundPosition: 'center 70%',
            }}
          />
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent rounded-md" />
        </>
      ) : (
        <div className="absolute inset-0 bg-budi-lime flex flex-col items-start justify-center p-4 text-white">
          <h3 className="font-semibold text-left text-xs">{recipe.name}</h3>
        </div>
      )}
    </div>
  );
}
