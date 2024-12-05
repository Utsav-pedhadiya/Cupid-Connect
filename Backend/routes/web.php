<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Authenticate;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('content.dashboard.dashboards-analytics')->name('dashboard-analytics');
// });

// Auth::routes();

$controller_path = 'App\Http\Controllers';

Route::get('/auth/login-basic', $controller_path . '\authentications\LoginBasic@index')->name('auth-login-basic');
Route::post('/auth/login-basic/authenticate', $controller_path . '\authentications\LoginBasic@authenticate')->name('auth-login-basic-auth');
Route::get('/logout', $controller_path . '\HomeController@logout')->name('logout');

Route::middleware([Authenticate::class])->group(function () {

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard-analytics');

Route::get('/profiles', [ProfilesController::class, 'index'])->name('profiles.index');
Route::get('/demoprofile', [ProfilesController::class, 'demoprofile'])->name('demoprofile.index');
Route::get('/profiles/create', [ProfilesController::class, 'create'])->name('profiles.create');
Route::post('/profiles/store', [ProfilesController::class, 'store'])->name('profiles.store');
Route::get('/profiles/edit/{id}', [ProfilesController::class, 'edit'])->name('profiles.edit');
Route::post('/profiles/update', [ProfilesController::class, 'update'])->name('profiles.update');
Route::get('/profiles/delete/{id}', [ProfilesController::class, 'delete'])->name('profiles.delete');
Route::get('/profiles/show/{id}', [ProfilesController::class, 'show'])->name('profiles.show');


//Profile Controller 
Route::get('/users', [UserController::class, 'index'])->name('users.view');
Route::post('/users/update', [UserController::class, 'update'])->name('users.update');


Route::get('/subscriber/index', [App\Http\Controllers\SubscriptionController::class, 'index'])->name('subscriber');
Route::get('/subscriber/create', [App\Http\Controllers\SubscriptionController::class, 'create'])->name('subscriber.create');
Route::post('/subscriber/store', [App\Http\Controllers\SubscriptionController::class, 'store'])->name('subscriber.store');
Route::get('/subscriber/edit/{id}', [App\Http\Controllers\SubscriptionController::class, 'edit'])->name('subscriber.edit');
Route::post('/subscriber/update', [App\Http\Controllers\SubscriptionController::class, 'update'])->name('subscriber.update');
Route::get('/subscriber/delete/{id}', [App\Http\Controllers\SubscriptionController::class, 'delete'])->name('subscriber.delete');

// Supports Routes
Route::get('/support/index', [App\Http\Controllers\SupportController::class, 'index'])->name('support');
Route::get('/support/show/{id}', [App\Http\Controllers\SupportController::class, 'show'])->name('support.show');
Route::get('/support/edit/{id}', [App\Http\Controllers\SupportController::class, 'edit'])->name('support.edit');
Route::post('/support/update', [App\Http\Controllers\SupportController::class, 'update'])->name('support.update');
Route::get('/support/delete/{id}', [App\Http\Controllers\SupportController::class, 'delete'])->name('support.delete');

//Payments Routes
Route::get('/payment/index', [App\Http\Controllers\PaymentController::class, 'index'])->name('payment');
Route::get('/payment/show/{id}', [App\Http\Controllers\PaymentController::class, 'show'])->name('payment.show');
Route::post('/payment/update', [App\Http\Controllers\PaymentController::class, 'update'])->name('payment.update');
Route::get('/payment/refund_transaction/{id}', [App\Http\Controllers\PaymentController::class, 'refund_transaction'])->name('payment.refund');

//Subscription Routes
Route::get('/subscriptionProfile/index', [App\Http\Controllers\SubscriptionProfileController::class, 'index'])->name('subscriptionprofile');
Route::get('/subscriptionProfile/show/{id}', [App\Http\Controllers\SubscriptionProfileController::class, 'show'])->name('subscriptionprofile.show');
Route::post('/subscriptionProfile/update', [App\Http\Controllers\SubscriptionProfileController::class, 'update'])->name('subscriptionprofile.update');

// Route::get('/support/show/{id}', [App\Http\Controllers\SupportController::class, 'show'])->name('support.show');
// Route::get('/support/edit/{id}', [App\Http\Controllers\SupportController::class, 'edit'])->name('support.edit');
// Route::post('/support/update', [App\Http\Controllers\SupportController::class, 'update'])->name('support.update');
// Route::post('/support/delete/{id}', [App\Http\Controllers\SupportController::class, 'delete'])->name('support.delete');

//Admin User Routes
Route::get('/AdminUser/index', [App\Http\Controllers\AdminUserController::class, 'index'])->name('adminuser');
Route::post('/AdminUser/store', [App\Http\Controllers\AdminUserController::class, 'store'])->name('adminuser.store');
Route::post('/AdminUser/update', [App\Http\Controllers\AdminUserController::class, 'update'])->name('adminuser.update');
Route::get('/AdminUser/delete/{id}', [App\Http\Controllers\AdminUserController::class, 'delete'])->name('adminuser.delete');
// Route::post('/subscriptionProfile/update', [App\Http\Controllers\SubscriptionProfileController::class, 'update'])->name('subscriptionprofile.update');

//Terms And Condition 
Route::get('/terms/index', [App\Http\Controllers\TermsController::class, 'index'])->name('terms');
Route::get('/terms/create', [App\Http\Controllers\TermsController::class, 'create'])->name('terms.create');
Route::post('/terms/store', [App\Http\Controllers\TermsController::class, 'store'])->name('terms.store');
Route::get('/terms/edit/{id}', [App\Http\Controllers\TermsController::class, 'edit'])->name('terms.edit');
Route::post('/terms/update', [App\Http\Controllers\TermsController::class, 'update'])->name('terms.update');
Route::get('/terms/delete/{id}', [App\Http\Controllers\TermsController::class, 'delete'])->name('terms.delete');

//Collection - country
Route::get('/country/index', [App\Http\Controllers\CollectionController::class, 'country_index'])->name('collection.country.index');
Route::get('/country/edit/{id}', [App\Http\Controllers\CollectionController::class, 'country_edit'])->name('collection.country.edit');
Route::post('/country/update', [App\Http\Controllers\CollectionController::class, 'country_update'])->name('collection.country.update');
Route::get('/country/add', [App\Http\Controllers\CollectionController::class, 'country_add'])->name('collection.country.add');
Route::post('/country/store', [App\Http\Controllers\CollectionController::class, 'country_store'])->name('collection.country.store');
Route::get('/country/delete/{id}', [App\Http\Controllers\CollectionController::class, 'country_delete'])->name('collection.country.delete');

//Collection - state
Route::get('/state/index', [App\Http\Controllers\CollectionController::class, 'state_index'])->name('collection.state.index');
Route::get('/state/add', [App\Http\Controllers\CollectionController::class, 'state_add'])->name('collection.state.add');
Route::post('/state/store', [App\Http\Controllers\CollectionController::class, 'state_store'])->name('collection.state.store');
Route::get('/state/delete/{id}', [App\Http\Controllers\CollectionController::class, 'state_delete'])->name('collection.state.delete');

//Collection - City
Route::get('/city/index', [App\Http\Controllers\CollectionController::class, 'city_index'])->name('collection.city.index');
Route::get('/city/add', [App\Http\Controllers\CollectionController::class, 'city_add'])->name('collection.city.add');
Route::post('/city/store', [App\Http\Controllers\CollectionController::class, 'city_store'])->name('collection.city.store');
Route::get('/city/delete/{id}', [App\Http\Controllers\CollectionController::class, 'city_delete'])->name('collection.city.delete');

//AJAX 
Route::post('/ajax/change_subscription_status', [App\Http\Controllers\AjaxController::class, 'change_subscription_status'])->name('ajax.change_subscription_status');
Route::get('/ajax/get_profile/{id}', [App\Http\Controllers\AjaxController::class, 'get_profile'])->name('ajax.get_profile');
Route::get('/ajax/get_subscription/{id}', [App\Http\Controllers\AjaxController::class, 'get_subscription'])->name('ajax.get_subscription');
Route::get('/ajax/fetch_subdetail/{id}', [App\Http\Controllers\AjaxController::class, 'fetch_subdetail'])->name('ajax.fetch_subdetail');
Route::get('/ajax/user_detail/{id}', [App\Http\Controllers\AjaxController::class, 'user_detail'])->name('ajax.user_detail');
Route::get('/ajax/user_add', [App\Http\Controllers\AjaxController::class, 'user_add'])->name('ajax.user_add');
Route::get('/ajax/update_payment/{id}', [App\Http\Controllers\AjaxController::class, 'updatePaymentStatus'])->name('ajax.update_payment');
Route::get('/ajax/payment_detail/{id}', [App\Http\Controllers\AjaxController::class, 'payment_detail'])->name('ajax.payment_detail');
Route::post('/ajax/nationality_ar',[App\Http\Controllers\AjaxController::class, 'nationality_ar'])->name('ajax.nationality_ar');

});