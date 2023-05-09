<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Appointment;

class Doctor extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','hospital_name'
    ];

    public function appointments(){
        return $this->hasMany(Appointment::class, 'doctor_id', 'id');
    }
}
