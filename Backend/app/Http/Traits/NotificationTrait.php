<?php

namespace App\Http\Traits;

trait NotificationTrait
{
    // public function anroid_send_pushnotification($notification_arr, $deviceTokenArray)
    // {
    //     $access_key = "AAAAyw6wzv0:APA91bHA1tE2uRRmHM6WaO51pXwtABXravdgLQ0QhbRbWOiMfQIg33YFUUn2V5bGLq4LIVvB3h2dRHTGAbtMQ7pLWN_E0NhfRCWqydTMHG4VexKkQM_tKDW036ei2qnAR1wCBnooj2Eb";
    //     if(is_array($deviceTokenArray)){
    //         $registrationIds = $deviceTokenArray;
    //     }else{
    //         $registrationIds = array($deviceTokenArray);
    //     }

    //     $fields = array (
    //         'registration_ids' => $registrationIds,
    //         'notification' => array (
    //             "body" => $notification_arr['body'],
    //             "title" => $notification_arr['title'],
    //             "icon" => "myicon",
    //             "sound" => "default",
    //             "click_action"=>"FCM_PLUGIN_ACTIVITY"
    //         ),
    //         'data' => array("type"=>$notification_arr['type'],"message"=>$notification_arr['msg'])
    //     );
    //     $fields = json_encode ( $fields );

    //     $headers = array(
    //         'Authorization: key=' . $access_key,
    //         'Content-Type: application/json'
    //     );

    //     #Send Reponse To FireBase Server
    //     $ch = curl_init();
    //     curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
    //     curl_setopt( $ch,CURLOPT_POST, true );
    //     curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
    //     curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
    //     curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
    //     curl_setopt( $ch,CURLOPT_POSTFIELDS, $fields );

    //     $result = curl_exec($ch );
    //     curl_close( $ch );

    //     // print_r($result);
    //     // exit;
    //     return $result;
    // }

    public function anroid_send_pushnotification(array $notificationArr, $deviceTokenArray): bool|string
    {
        $projectId = "legalapp-694a9";
        $serviceAccountPath = "/var/www/html/legalapp-694a9-65110eabb4e8.json";

        $accessToken = $this->getAccessToken($serviceAccountPath);

        if (!$accessToken) {
            return false;
        }

        if (empty($deviceTokenArray)) {
            return "No device tokens provided";
        }

        $results = [];

        foreach ($deviceTokenArray as $token) {
            $fields = [
                'message' => [
                    'token' => $token,
                    'notification' => [
                        'title' => $notificationArr['title'] ?? null,
                        'body' => $notificationArr['body'] ?? null,
                    ],
                    'data' => [
                        'title' => $notificationArr['title'] ?? null,
                        'message' => $notificationArr['msg'] ?? null,
                        'body' => $notificationArr['body'] ?? null,
                        'type' => $notificationArr['type'] ?? null,
                    ],
                    'android' => [
                        'notification' => [
                            'channelId' => $notificationArr['channelId'] ?? "LEGALFINAL_CHANNEL",
                            // 'sound' => $notificationArr['sound'] ?? "rn_sound.mp3",
                            'title' => $notificationArr['title'] ?? null,
                            'body' => $notificationArr['body'] ?? null,
                        ]
                    ],
                ]
            ];

            $fieldsJson = json_encode($fields);

            $headers = [
                'Authorization: Bearer ' . $accessToken, // FCM V1 uses Bearer tokens
                'Content-Type: application/json',
            ];

            try {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, "https://fcm.googleapis.com/v1/projects/{$projectId}/messages:send");
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $fieldsJson);

                $result = curl_exec($ch);
                // print_r($result);
                // exit;
                curl_close($ch);
            } catch (Exception $e) {
                echo 'Failed to Curl: ' . $e->getMessage();
                exit;
            }
        }
        return implode("\n", $results);
    }

    private function getAccessToken(string $serviceAccountPath): ?string
    {
        $client = new \Google_Client();
        $client->setAuthConfig($serviceAccountPath);
        $client->addScope('https://www.googleapis.com/auth/firebase.messaging');

        $accessToken = $client->fetchAccessTokenWithAssertion()['access_token'] ?? null;

        return $accessToken;
    }

    // public function web_send_pushnotification($data, $deviceToken)
    // {
    //     $access_key='AAAAhaTPuLY:APA91bE4nV2ifkBIp1oF3KkJ9k5M19OH4aq8W73uIiyb-mM6FG11nPpf9GT-0Grvi-AcBejtk9kMsxBKKPT6hvP5NnsnLzzdFKwcQZRJyI3FwYIDQ_pLSsONEI8pBdjT2QPIZhD1-GnN';


    //     $fields = array (
    //         'registration_ids' => $deviceToken,
    //         "notification" => array(
    //             "body" => $data['body'],
    //             "title" => $data['title'],
    //             "icon" => "myicon",
    //             "click_action"=>"FCM_PLUGIN_ACTIVITY"
    //         ),
    //         'data' => array("type"=>$data['type'],"message"=>$data['msg'],"data"=>$data['data'])
    //     );
    //     $fields = json_encode ( $fields );


    //     $headers = array(
    //         'Authorization: key=' . $access_key,
    //         'Content-Type: application/json'
    //     );

    //     #Send Reponse To FireBase Server
    //     $ch = curl_init();
    //     curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
    //     curl_setopt( $ch,CURLOPT_POST, true );
    //     curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
    //     curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
    //     curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
    //     curl_setopt( $ch,CURLOPT_POSTFIELDS, $fields );

    //     $result = curl_exec($ch );
    //     curl_close( $ch );

    //     return $result;
    // }
}
