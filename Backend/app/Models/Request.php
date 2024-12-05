<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class Request extends Model
{
    protected $table='requests';  
    
    public function request_view()
    {
        return $this->hasOne('App\Models\Profile', 'id', 'requester_id');
    }
}