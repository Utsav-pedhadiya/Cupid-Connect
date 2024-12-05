<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Exception;
use Twilio\Rest\Client;
  
class Qualitie extends Model
{
    protected $table='qualities';   
    protected $fillable = ['quality_name']; 
}