<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Appointment;

class AppointmentController extends Controller
{
    public function check_availability(Request $request)
    {
        $available = Appointment::where('doctor_id', $request->input('doctor_id'))
                        ->where('appointment_date', $request->input('appointment_date'))
                        ->where('appointment_time', $request->input('appointment_time'))
                        ->first();
        
        if(!$available) {
            return response()->json(['message' => 'The doctor is available on the sfecific date and time'], 200);
        }else{
            return response()->json(['message' => 'The doctor is not available on the sfecific date and time'], 200);
        }
    }

    public function create_appointment(Request $request)
    {
        $appointment = Appointment::create([
                        'doctor_id' => $request->input('doctor_id'),
                        'appointment_date' => $request->input('appointment_date'),
                        'appointment_time' => $request->input('appointment_time')
                    ]);
                    
        return response()->json(['message' => 'The appointment is created'], 200);
    }
}
