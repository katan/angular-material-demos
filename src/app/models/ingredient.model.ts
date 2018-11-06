export interface Ingredient {
    name: string,
    provider: string,
    unit: string,
    base: number,
    nutritionFacts: NutritionFacts,
    calories: number,
    ig: number,
    image?: IngredientImage
}

export interface NutritionFacts {
    water: string,
    carbohydrates: Carbohydrates,
    fat: Fats,
    protein: number
}

export interface Carbohydrates {
    total: number;
    sugars?: number;
    fiber?: number,
}

export interface Fats {
    total: number,
    saturated?: number,
    monounsaturated?: number,
    polyunsaturated?: number
}

export interface IngredientImage {
    source: string,
    mimeType: string,
    author: string,
    copyright?: any
}
