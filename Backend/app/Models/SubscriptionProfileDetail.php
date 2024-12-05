<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class SubscriptionProfileDetail extends Model
{
    protected $table='subscription_profile_details'; 
    
    protected $fillable = [
        'subscription_id', 'strt_date', 'end_date', 'renewal_date','auto_renewal','status',
    ]; 
    
    public function profile()
    {
        return $this->hasOne('App\Models\Profile', 'id', 'profile_id');
    }

    public function subscription()
    {
        return $this->hasOne('App\Models\Subscription', 'id', 'subscription_id');
    }

    public function subscriptions()
    {
        return $this->hasOne('App\Models\Subscription', 'id', 'subscription_id');
    }
}