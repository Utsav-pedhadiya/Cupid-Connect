<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class PaymentDetail extends Model
{
    protected $table='payment_details';
    
    protected $fillable = [
        'payment_id', 'profile_id', 'card_holder_name', 'card_number','expiry_date','cvv',
    ];

}