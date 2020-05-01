# Changelog

## Hometask 4
### Added:
* 'currency' pipe to format product price in 'product.component.html'
* 'uppercase' pipe to 'Product Category' in 'product.component.html'
* 'async' pipe to manage observable of products in 'product-list.component.html'
* 'async' pipe to manage observable of cart items in 'cart-list.component.html
* Custom 'order-by.pipe.ts' pipe to sort cart items in 'cart-list.component.html'
* 'orderByOptionEnum' and 'SortDirectionEnum'
* 'CommonModule' export from SharedModule.

## Hometask 7
### Added:
* Ngrx state for 'Product' entity;
* Actions, reducers, effects and selectors to work with 'Product' entity;
* Router store in order to select router data. Is used to select 'Product' entity by id in the url from the store.
* Ngrx Entity and Ngrx Data for the 'Order' entity;
* Refactored components connected with 'Product' and 'Order'.


## Hometask 8
### Added:
* ProcessOrderComponent;
* ProcessOrderValidationService;
* CustomValidators class;
* EmailExists async directive. The test email is 'existsemail@example.com';
* Routing to ProcessOrderComponent. To reach this form you need to buy a
product, go to the cart and confirm your selections;
* ProcessOrderComponent added to '/home' route due to demonstration purposes.

## Hometask 9
### Added:
* app.component.spec.ts
* product.service.spec.ts
* order-by.pipe.spec.ts
* product.component.spec.ts
