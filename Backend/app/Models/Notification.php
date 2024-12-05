<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class Notification extends Model
{
    protected $table='notifications';
    
    public function opp_profile()
    {
        return $this->hasOne('App\Models\Profile', 'id', 'opp_profile_id');
    }
}