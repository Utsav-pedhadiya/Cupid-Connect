<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class Cities extends Model
{
    protected $table='cities';    

    public function country()
    {
        return $this->hasOne('App\Models\Country', 'id', 'country_id');
    }

    public function state()
    {
        return $this->hasOne('App\Models\State', 'id', 'state_id');
    }
}