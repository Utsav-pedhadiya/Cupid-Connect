<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Qualitie;

class Profile extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'number', 
        'otp',
        'gender',
        'dob',
        'age',
        'nationality',
        'nationality_ar',
        'place_of_residence',
        'city','job','lineage',
        'skin_color',
        'martial_status',
        'number_of_children',
        'are_the_children_with_you',
        'religious_commitment',
        'financial_situation',
        'height',
        'width',
        'body_tone',
        'health_status',
        'write_about_yourself',
        'qualities_you_are_looking_for',
        'interests',
        'views',
        'likes',
        'profile_status',
        'city_ar',
        'por_ar',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'otp',
    ];

    public function getAuthPassword()
    {
        return null;
    }

    public function qualities()
    {
        return $this->hasMany('App\Models\Qualitie', 'profile_id', 'id');
    }

    public function views()
    {
        return $this->hasOne('App\Models\ProfileView', 'profile_id', 'id');
    }

}
