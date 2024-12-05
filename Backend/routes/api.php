<?php

use App\Http\Controllers\api\HomeController;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['cors','auth:sanctum']], function() {

    Route::get('/user/{id}',[HomeController::class,'getIdUser']);
    Route::get('/user/like/{id}',[HomeController::class,'likeProfile']);
    Route::get('/get_user',[HomeController::class,'getUserDetail']);
    Route::get('/notifications',[HomeController::class,'getAllNotification']);
    Route::get('/get_all_contacts',[HomeController::class,'get_accepted_request_list']);
    Route::get('/notifications/view/{id}',[HomeController::class,'viewNotification']);
    Route::get('/get_all_user',[HomeController::class,'getAllUser']);
    Route::post('/logout',[LoginController::class,'logout']);
    Route::post('/deavtive_account',[LoginController::class,'deactivateAccount']);
    Route::post('/delete_account',[LoginController::class,'deleteAccount']);
    
    Route::post('/request/accept/{id}',[HomeController::class,'requestContactAccept']);
    Route::post('/request/reject/{id}',[HomeController::class,'requestContactReject']);
    Route::post('/report/send',[HomeController::class,'sent_report']);
    Route::post('/get_filter_data',[HomeController::class,'filter_records']);
    Route::get('/get_subscription_list',[HomeController::class,'get_subscription_list']);
    Route::get('/get_subscription_details/{id}',[HomeController::class,'get_subscription_details']);
    Route::get('/history_list',[HomeController::class,'get_history_list']);
    Route::get('/whome_list',[HomeController::class,'get_whome_list']);
    Route::post('/profile_update/{id}',[LoginController::class,'updateUser']);
    Route::post('/feedback/send',[HomeController::class,'store_feedback']);
    Route::post('/payment/store',[PaymentController::class,'payment']);
    Route::post('/payment/intial',[PaymentController::class,'IntialPayment']);
    Route::post('/payment/stripe',[PaymentController::class,'stripePost']);
    Route::post('/payment/check_status',[PaymentController::class,'check_payment']);
    Route::post('/subscription/check',[PaymentController::class,'check_subscription']);
    Route::post('/profile/search/{id}',[HomeController::class,'search_list']);
    Route::get('/subscription/history',[HomeController::class,'get_subscription_history']);
    Route::get('/terms/list',[HomeController::class,'get_temrs_condition_list']);
    Route::get('/payment/history',[HomeController::class,'payment_history']);
    Route::get('/subscription/history/new',[HomeController::class,'subscription_history']);
    Route::get('/terms/details/{id}',[HomeController::class,'get_terms_condition_details']);
    Route::post('/subscription_update/{old_id}/{new_id}',[PaymentController::class,'upgrade_subscription']);
});

Route::post('/request/{id}',[HomeController::class,'requestContactInfo'])->middleware('auth:sanctum');

Route::post('/generate_otp',[LoginController::class,'generateOTP']);
Route::post('/registration',[LoginController::class,'registraion']);
Route::post('/login',[LoginController::class,'authenticate']);

Route::get('/country/list',[HomeController::class,'country_list']);
Route::get('/country_por/list',[HomeController::class,'country_list_por']);
Route::post('/state/list/{country_id}',[HomeController::class,'state_list']);
Route::post('/city/list/{country_id}',[HomeController::class,'city_list']);
// Route::post('/city/list/{state_id}',[HomeController::class,'city_list']);


