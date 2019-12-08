import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRecipe, IRecipeOverview } from '../models';
import * as RECIPES_JSON from './static-recipes.json';

const IMG_SERVER = "sebferrer.fr/curry-chronicles/recipe/img/";

const RECIPES: IRecipe[] = (RECIPES_JSON as any).default;
const DEFAULT_RECIPE: IRecipe = {
	id: 'default',
	name: 'Default',
	mainPicture: 'https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/69316854_509717162933918_2113320626994813678_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=102&oh=fed08636a6b4e2d543e79bc5611e2477&oe=5E8C34D4',
	headLine: '',
	servesHowManyPeople: 0,
	preparationTime: '00:00:00',
	cookingTime: '00:00:00',
	description: 'Un délicieux DEFAULT',
	ingredients: [
		{ name: 'Rien', amount: 1 }
	],
	directions: [
		{ description: 'Contemplez l\'existence.' }
	]
};

@Injectable()
export class RecipesService {

	constructor(private http: HttpClient) { }

	public getRecipesOverviews(): Observable<IRecipeOverview[]> {
		return of(this.getRecipes()).pipe(
			// delay(2000)
		);
	}

	public getRecipe(id: string): Observable<IRecipe> {
		const recipes = this.getRecipes();
		return of(recipes.find(recipe => recipe.id === id) || DEFAULT_RECIPE);
	}

	private getRecipes(): IRecipe[] {
		const recipes = [...RECIPES];
		recipes.forEach(recipe => recipe.mainPicture = `http://${IMG_SERVER}${recipe.mainPicture}`);
		return recipes;
	}
}
