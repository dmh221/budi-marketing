// Script to fetch real recipe data from Supabase for the animation
// Run with: node scripts/fetch-recipes.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables');
  console.error('Please create a .env file with these values from the main budi-app');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Recipe names from the CSV
const targetRecipes = [
  'Tossed Steak, Bean, and Corn Salad',
  'Thai Green Curry Cod',
  'Marry Me Butter Beans',
  'Seared Miso-Salmon with Edamame',
  'White Chicken Chili',
  'Easy Rice Cooker Mexican Rice',
  'Salsa Verde Chicken',
  'Spiced Rainbow Carrots',
  'Creamy Leek Butter Beans',
];

async function fetchRecipes() {
  console.log('Fetching recipes from Supabase...\n');

  const { data, error } = await supabase
    .from('recipes')
    .select('id, name, cook_time, photo')
    .limit(9)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching recipes:', error);
    return;
  }

  console.log('Found recipes:', data.length);
  console.log('\nRecipe data for animation:\n');

  const recipes = data.map((recipe, index) => ({
    id: index + 1,
    name: recipe.name,
    cookTime: recipe.cook_time || 20,
    imageUrl: recipe.photo?.thumbnail || recipe.photo?.small || null,
  }));

  console.log(JSON.stringify(recipes, null, 2));

  console.log('\n\nTo use this data:');
  console.log('1. Copy the JSON array above');
  console.log('2. Replace REAL_RECIPES array in src/components/RecipeImportAnimation.tsx');
}

fetchRecipes();
