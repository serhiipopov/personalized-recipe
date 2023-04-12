import BaseLayout from '../components/BaseLayout/BaseLayout';
import RecipeDetails from '../components/Recipes/RecipeDetails';
import { RecipeDetailsScreenRouteProp } from '../types/route';

interface RecipeDetailScreenProps {
  route: RecipeDetailsScreenRouteProp;
}

const RecipeDetailScreen = ({ route }: RecipeDetailScreenProps) => {
  return (
    <BaseLayout>
      <RecipeDetails route={route} />
    </BaseLayout>
  )
}

export default RecipeDetailScreen;
