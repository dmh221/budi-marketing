# Recipe Import Animation - Implementation Guide

## ✅ What's Been Completed

### 1. **RecipeImportAnimation Component** ([src/components/RecipeImportAnimation.tsx](src/components/RecipeImportAnimation.tsx))
- Full 3-state animation sequence (Import → Loading → Recipes)
- Pixel-perfect UI parity with main React app
- Real recipe data from your CSV
- Smooth transitions using Framer Motion
- Auto-playing loop sequence
- iPhone mockup with notch and status bar

### 2. **Integration with Marketing Site**
- Component integrated into ImportRecipes section
- Uses exact Heroicons from main app
- Matches all design tokens (colors, typography, spacing)

### 3. **Animation Sequence**
1. **Import Screen** (3s) - Shows populated recipe form
2. **Loading Screen** (2s) - Budi logo breathing animation
3. **Recipes Screen** (5s) - Recipe grid with "All" tab active
4. **Loading** (1.5s) - Transition animation
5. **Recipes Scrolled** (5s) - Simulates scrolling through recipes
6. **Loading** (1.5s) - Transition animation
7. **Recipes Scrolled More** (5s) - Continues scrolling
8. **Loop** - Repeats infinitely

## 🎨 Design Specs

### Colors (Matching Main App)
- **Primary**: `#AFBF41` (Budi Lime)
- **Background**: `#FAF8F1` (light cream)
- **Card**: `#FFFFFF` (white)
- **Card Secondary**: `#F3F2E0` (warm cream)
- **Text Primary**: `#000000`
- **Text Secondary**: `#757575`

### Typography
- **Import Header**: 11px, Budi Lime
- **Import Values**: 13px, Text Primary
- **Recipe Screen Title**: 20px, Semibold, Budi Lime
- **Tab Labels**: 14px
- **Recipe Card Name**: 15px, Semibold
- **Recipe Card Time**: 13px, Secondary

### Spacing
- All spacing follows Tailwind's 4px scale
- Exact padding/margins match main app

## 📋 Next Steps: Adding Real Images

### Option 1: Direct Supabase URLs (Recommended)
Update the `REAL_RECIPES` array in `RecipeImportAnimation.tsx` with actual Supabase storage URLs:

```typescript
const REAL_RECIPES = [
  {
    id: 1,
    name: 'Tossed Steak, Bean, and Corn Salad',
    cookTime: 25,
    imageUrl: 'https://[your-project].supabase.co/storage/v1/object/public/recipe-images/steak-salad-thumbnail.webp',
  },
  // ... etc
];
```

### Option 2: Query Supabase at Runtime
Create a hook to fetch recipes with images:

```typescript
// src/hooks/useRecipeImages.ts
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export function useRecipeImages() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const { data } = await supabase
        .from('recipes')
        .select('id, name, cook_time, photo')
        .limit(9)
        .order('created_at', { ascending: false });

      if (data) {
        setRecipes(data.map(r => ({
          id: r.id,
          name: r.name,
          cookTime: r.cook_time,
          imageUrl: r.photo?.thumbnail || r.photo?.small,
        })));
      }
    }
    fetchRecipes();
  }, []);

  return recipes;
}
```

### Option 3: Use Placeholder Images
For demo purposes, you can use food emoji placeholders (current implementation).

## 🔧 Configuration

### Props
```typescript
interface RecipeImportAnimationProps {
  autoPlay?: boolean;    // Default: true
  className?: string;    // Additional CSS classes
}
```

### Usage
```tsx
<RecipeImportAnimation autoPlay={true} />
```

## 📁 File Structure
```
src/
├── components/
│   └── RecipeImportAnimation.tsx  # Main animation component
└── sections/
    └── ImportRecipes.tsx          # Feature section using animation
```

## 🎯 Key Features

### ✅ Implemented
- [x] 3-state animation loop
- [x] Smooth Framer Motion transitions
- [x] Real recipe data from CSV
- [x] Pixel-perfect UI matching main app
- [x] Exact color scheme (#AFBF41 Budi Lime)
- [x] Heroicons matching main app
- [x] iPhone mockup with notch
- [x] Status bar simulation
- [x] Bottom navigation bar
- [x] Recipe cards with proper styling
- [x] Import form populated state
- [x] Loading screen with logo animation

### 🚧 Pending (Optional Enhancements)
- [ ] Real recipe images from Supabase
- [ ] Hover pause on animation
- [ ] Manual controls (play/pause)
- [ ] Click-to-advance states
- [ ] Different animation speeds
- [ ] Mobile responsive sizing

## 🚀 Running the Site

```bash
cd /Users/daniellehonan/Desktop/budi-marketing
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the animation in action.

## 📝 Notes

- The animation uses the exact same design tokens as the main budi-app
- All colors, fonts, and spacing match the React app pixel-perfectly
- The component is fully self-contained and reusable
- Real recipe data matches your CSV export
- Images are currently emoji placeholders until you add Supabase URLs

## 🔗 Related Files

- Main App Tailwind Config: `/Users/daniellehonan/Desktop/budi-app/tailwind.config.js`
- Main App Design Tokens: `/Users/daniellehonan/Desktop/budi-app/src/index.css`
- Supabase Schema: `/Users/daniellehonan/Desktop/budi-app/supabase/docs/SUPABASE_SCHEMA.md`
