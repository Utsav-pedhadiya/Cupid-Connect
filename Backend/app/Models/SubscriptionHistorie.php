<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class SubscriptionHistorie extends Model
{
    protected $table='subscription_histories';
    
    public function subscription()
    {
        return $this->hasMany('App\Models\Subscription', 'id', 'subscription_id');
    }

    public function profile()
    {
        return $this->hasMany('App\Models\Profile', 'id', 'profile_id');
    }

    public function subscription_profile()
    {
        return $this->hasMany('App\Models\SubscriptionProfileDetail', 'id', 'subscription_profile_id');
    }
}