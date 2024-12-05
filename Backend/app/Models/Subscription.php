<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Exception;
  
class Subscription extends Model
{
    protected $table='subscriptions';
    protected $fillable = [
        'plan_name', 'price', 'months', 'description','color_code','is_active',
    ];    
}