<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class State extends Model
{
    protected $table='states';    

    public function country()
    {
        return $this->hasOne('App\Models\Country', 'id', 'country_id');
    }
}