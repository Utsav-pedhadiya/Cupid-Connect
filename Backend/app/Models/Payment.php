<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class Payment extends Model
{
    protected $table='payments';  
    
    public function profile()
    {
        return $this->hasOne('App\Models\Profile', 'id', 'profile_id');
    }

    public function subscription()
    {
        return $this->hasOne('App\Models\Subscription', 'id', 'subscription_id');
    }
}