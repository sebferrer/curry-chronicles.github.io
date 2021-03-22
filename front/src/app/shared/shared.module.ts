import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent, InfiniteScrollComponent } from './components';
import { AutofocusOnShowDirective, FileValueAccessorDirective } from './directives';
import { RecipeResolver, RecipesPageResolver } from './resolvers';
import { AuthenticationService, ImgurService, RecipesService } from './services';

@NgModule({
	providers: [
		AuthenticationService,
		ImgurService,
		RecipesService,
		RecipesPageResolver,
		RecipeResolver
	],
	declarations: [
		AutofocusOnShowDirective,
		ConfirmationDialogComponent,
		FileValueAccessorDirective,
		InfiniteScrollComponent
	],
	exports: [
		InfiniteScrollComponent,
		AutofocusOnShowDirective
	],
	imports: [
		HttpClientModule,
		CommonModule,
		MatDialogModule,
		MatButtonModule
	]
})
export class SharedModule { }
