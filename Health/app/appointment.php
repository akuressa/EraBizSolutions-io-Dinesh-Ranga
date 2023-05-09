<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class appointment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'doctor_id','appointment_date', 'appointment_time'
    ];

    public function doctor(){
        return $this->belongsTo(Doctor::class, 'doctor_id', 'id');
    }
}
