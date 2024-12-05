<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

  
class Report extends Model
{
    protected $table='reports';  
    protected $fillable = [
        'title', 'profile_id', 'note', 'data', 'resolved_issue', 'status',
    ]; 
    
    public function profile()
    {
        return $this->hasOne('App\Models\Profile', 'id', 'profile_id');
    }
}