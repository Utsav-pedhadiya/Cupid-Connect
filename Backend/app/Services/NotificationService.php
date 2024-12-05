<?php

namespace App\Services;

use App\Models\Notification;

class NotificationService
{
    public function createNotification($userId, $opp_id, $type, $data, $req = NULL)
    {
        $notification = new Notification();
        $notification->profile_id = $userId;
        $notification->opp_profile_id = $opp_id;
        $notification->type = $type;
        $notification->data = $data;
        $notification->request_id = $req;
        $notification->save();

        return $notification;
    }
}
