<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\ProfileView;
use App\Models\ProfileLike;
use App\Models\SubscriptionProfileDetail;
use App\Models\Report;
use App\Models\Request as Req;
use App\Models\ProfileContact;
use App\Models\Subscription;
use App\Models\Feedback;
use App\Models\Payment;
use App\Models\SubscriptionHistorie;
use App\Models\TermsAndCondition;
use App\Services\NotificationService;
use App\Http\Traits\NotificationTrait;
use App\Models\Cities;
use App\Models\Country;
use App\Models\DeviceToken;
use App\Models\State;

class HomeController extends Controller
{
    protected $notificationService;
    use NotificationTrait;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }
    /**
 * @OA\Get(
 *     path="/datingapp/api/user/{id}",
 *     summary="Get Profile From ID + views",
 *     tags={"Users"},
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the user",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function getIdUser(Request $request,$id)
    {
        if($auth = auth()->user())
        {
        $profile = ProfileView::where('profile_id',$id)->where('viewer_id',$auth->id)->first();

        $user = Profile::with('qualities')->where('id',$id)->first();
        $user->views+=1;
        $user->save();

        $increment = new ProfileView;
        $increment->profile_id = $id;
        $increment->viewer_id = $auth->id;
        $increment->save(); 

        $type="profile_visit";
        $data = json_encode([$increment, $auth]);

        if(!$profile)
        {
            $notification = $this->notificationService->createNotification($id, $auth->id, $type, $data);
           
        }
        $deviceTokenArray = DeviceToken::where('profile_id', $id)->pluck('token')->toArray();

            // print_r($deviceTokenArray);exit;

        $notification_arr['title'] = 'Someone Show Your Profile';
        $notification_arr['body'] = $auth->name . " Just Show Your Profile ";
        $notification_arr['type'] = 'Show Profile';
        $notification_arr['msg'] = $auth->name . " Just Show Your Profile ";
        $notification_arr['data'] = $user;
        $this->anroid_send_pushnotification($notification_arr, $deviceTokenArray);

        return response()->json(['user' => $user], 200);
        }
        else
        {
            return response()->json(['message' => 'User Not Authenticate'], 401);
        }
        
    }

      /**
 * @OA\Get(
 *     path="/datingapp/api/user/like/{id}",
 *     summary="Send Profile Like",
 *     tags={"Like"},
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the user",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
public function likeProfile(Request $request,$id)
{
    $auth = auth()->user();
    
    $profile = ProfileLike::where('liked_profile_id',$id)->where('liker_id',$auth->id)->first();

    if($profile)
    {
        return response()->json(['message' => "You Already Liked Profile"], 200);
    }
    else
    {
        $user = Profile::where('id',$id)->first();
        $user->likes+=1;
        $user->save();
    
        $increment = new ProfileLike;
        $increment->liked_profile_id = $id;
        $increment->liker_id = $auth->id;
        $increment->save(); 
    
        $type="profile_like";
        $data = json_encode([$increment, $auth]);
    
        $notification = $this->notificationService->createNotification($id, $auth->id, $type, $data);
        $deviceTokenArray = DeviceToken::where('profile_id', $id)->pluck('token')->toArray();

        $notification_arr['title'] = 'Your Profile Just Liked';
        $notification_arr['body'] = $auth->name . " Just Liked Your Profile ";
        $notification_arr['type'] = 'Profile Liked';
        $notification_arr['msg'] =  $auth->name . " Just Liked Your Profile ";
        $notification_arr['data'] = $data;
        $this->anroid_send_pushnotification($notification_arr, $deviceTokenArray);
    
        return response()->json(['message' => "You Liked Profile"], 200);
    }
   
}

    /**
     * @OA\Get(
     *     path="/datingapp/api/get_user",
     *      tags={"Users"},
     *     summary="Get logged-in user details",
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function getUserDetail(Request $request)
    {
        // return response()->json(['user' =>'abc'], 200);
        // exit;
        $user = auth()->user();
        $userWithQualities = Profile::with('qualities')->find($user->id);
        $userWithQualities->interests = explode(',',$userWithQualities->interests);
//        echo '<pre>';
//        print_r($userWithQualities);
//        exit;
        return response()->json(['user' => $userWithQualities], 200);
    }

     /**
     * @OA\Get(
     *     path="/api/get_all_user",
     *      tags={"Users"},
     *     summary="Get All Users details",
     *     @OA\Response(response="200", description="Success"),
     * )
     */
    public function getAllUser(Request $request)
    {
        $userWithQualities = Profile::with('qualities')->get();
        return response()->json(['user' => $userWithQualities], 200);
    }

     /**
     * @OA\Get(
     *     path="/datingapp/api/notifications",
     *      tags={"Notifiaction"},
     *     summary="Get All Notification",
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function getAllNotification(Request $request)
    {
        $user = auth()->user();
        $notifications = Notification::where('profile_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();
        $responseData = [];
       if ($notifications->isNotEmpty()) {
            foreach ($notifications as $notification) {
                $status = NULL;
                $data = json_decode($notification->data, true);

                $subData = [
                    'name' => null,
                    'id' => null,
                ];
                
                $opp_profile = Profile::find($notification->opp_profile_id);

                if (isset($opp_profile)) {
                    $subData['name'] = $opp_profile->name ?? null;
                    $subData['id'] = $opp_profile->id ?? null;
                }

                if($notification->read_at != NULL)
                {
                    $status = 'checked';
                }

                $newData = [
                    'noti_id' => $notification->id,
                    'noti_type' => $notification->type,
                    'is_read' => $notification->read_at,
                    'status' => $status,
                    'time' => $notification->created_at,
                    'request_status' => $notification->request_status,
                    'noti_from' => $subData,
                ];

                if ($notification->type === "profile_contact_request" && isset($data['request_id'])) {
                    $newData['request_id'] = $data['request_id'];
                }

                $responseData[] = $newData;
            }

            return response()->json(['notification' => $responseData], 200);
        } else {
            return response()->json(['notification' => []], 200);
        }
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/notifications/view/{id}",
 *      tags={"Notifiaction"},
 *     summary="View Notification",
 *     
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the Notification",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function viewNotification(Request $request,$id)
    {
        $user = auth()->user();

        $view = Notification::find($id);
        $view->read_at = now();
        $view->save();

        $data = json_decode($view->data);

        return response()->json(['view' => $data], 200);
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/request/{id}",
 *     tags={"Requests"},
 *     summary="Send Contact Request",
 *     
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the user",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 * 
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */

    public function requestContactInfo(Request $request,$id)
    {
       
        $user = auth()->user();

        $find = Req::where('requester_id',$user->id)->where('profile_id',$id)->first();
        
        if($find)
        {
            return response()->json(['message' => 'You Already sent Request'], 200);
        }
        else
        {
            $req = new Req;
            $req->profile_id = $id;
            $req->requester_id = $user->id;
            $req->data = '';
            $req->status = 'pending';
            $req->save();
            $lastId = $req->id;
    
            $type="profile_contact_request";
            $data = json_encode([$req, $user, "request_id"=>$lastId]);
    
            $notification = $this->notificationService->createNotification($id, $user->id, $type, $data, $lastId);
            $deviceTokenArray = DeviceToken::where('profile_id', $id)->pluck('token')->toArray();

            if($deviceTokenArray)
            {
                $notification_arr['title'] = 'Contact Request';
                $notification_arr['body'] =  $user->name . " Requesting For Contact Details ";
                $notification_arr['type'] = 'Request For Contact Info';
                $notification_arr['msg'] =   $user->name . " Requesting For Contact Details ";
                $notification_arr['data'] = $data;
                $this->anroid_send_pushnotification($notification_arr, $deviceTokenArray);
            }
    
            return response()->json(['message' => 'Contact Request Sent'], 200);
        }
       
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/request/accept/{id}",
 *     summary="Accept Contact Request",
 *     tags={"Requests"},
 * 
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the request",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *  @OA\Parameter(
     *         name="number",
     *         in="query",
     *         description="Enter Number",
     *         @OA\Schema(type="integer")
     *     ),
     * @OA\Parameter(
     *         name="note",
     *         in="query",
     *         description="Enter Note",
     *         @OA\Schema(type="string")
     *     ),
 *     @OA\Response(
 *         response="200",
 *         description="Success",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Request Accepted")
 *         )
 *     ),
 *     security={{"bearerAuth":{}}}
 * )
 */

 public function requestContactAccept(Request $request, $id)
 {
    
     $user = auth()->user();
 
     $reqData = $request->validate([
         'number' => 'required|string',
         'note' => 'required|string',
     ]);

     $find = Req::find($id);

     if($find->status == 'accepted')
     {
        return response()->json(['message' => 'Request Accepted Already'], 200);
        exit;
     }
     else
     {
        $number = $reqData['number'];
        $note = $reqData['note'];
    
        $profileContact = new ProfileContact;
        $profileContact->profile_id = $user->id;
        $profileContact->number = $number;
        $profileContact->note = $note;
        $profileContact->save();
    
        $req = Req::findOrFail($id);
        $req->status = "accepted";
        $req->data = json_encode([$profileContact]);
        $req->save();

        $notifications = Notification::where('request_id',$id)->first();
            if ($notifications) {
                $notifications->read_at = now();
                $notifications->request_status = 'accepted';
                $notifications->save();
            }

        $type = "contact_request_accepted";
        $data = json_encode([$profileContact, $user, "request_id"=>$req->profile_id]);
        $notification = $this->notificationService->createNotification($req->requester_id, $user->id, $type, $data);

        $deviceTokenArray = DeviceToken::where('profile_id', $req->requester_id)->pluck('token')->toArray();

        $notification_arr['title'] = 'Request Accepted';
        $notification_arr['body'] =  $user->name . " Just Accepted Your Contact Request ";
        $notification_arr['type'] = 'Request Accepted';
        $notification_arr['msg'] =   $user->name . " Just Accepted Your Contact Request ";
        $notification_arr['data'] = $data;
        $this->anroid_send_pushnotification($notification_arr, $deviceTokenArray);
        
        return response()->json(['message' => 'Request Accepted'], 200);
     }
    
 }

/**
 * @OA\Post(
 *     path="/datingapp/api/request/reject/{id}",
 *     tags={"Requests"},
 *     summary="Send Contact Request",
 *     
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the user",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */

 public function requestContactReject(Request $request, $id)
 {
     $user = auth()->user();

     $find = Req::find($id);

     if($find->status == 'rejected')
     {
        return response()->json(['message' => 'Request Rejected Already'], 200);
        exit;
     }
     else
     {
        
     $req = Req::findOrFail($id);
     $req->status = "rejected";
     $req->data = json_encode([$user]);
     $req->save();

     $notifications = Notification::where('request_id',$id)->first();
     if ($notifications) {
         $notifications->read_at = now();
         $notifications->request_status = 'rejected';
         $notifications->save();
     }
 
     $type = "contact_request_rejected";
     $data = json_encode([$req, $user, "request_id"=>$req->profile_id]);
     $notification = $this->notificationService->createNotification($req->requester_id, $user->id, $type, $data);

    $deviceTokenArray = DeviceToken::where('profile_id', $req->requester_id)->pluck('token')->toArray();

    $notification_arr['title'] = 'Request Rejected';
    $notification_arr['body'] =  $user->name . " Just Rejected Your Contact Request ";
    $notification_arr['type'] = 'Request Rejected';
    $notification_arr['msg'] =   $user->name . " Just Rejected Your Contact Request ";
    $notification_arr['data'] = $data;
    $this->anroid_send_pushnotification($notification_arr, $deviceTokenArray);
 
     return response()->json(['message' => 'Request Rejected'], 200);
     }
 
 }

  /**
     * @OA\Get(
     *     path="/datingapp/api/get_all_contacts",
     *      tags={"Contacts"},
     *     summary="Get All Request Contacts",
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function get_accepted_request_list()
    {
        $user = auth()->user();

        $records = Req::where('requester_id',$user->id)->where('status','accepted')->get()->toArray();
        $newData=[];

        if(count($records)>0)
        {
            foreach($records as $key => $value)
            {
                $data = json_decode($value['data']);
                foreach($data as $item)
                {
                    if (isset($item->number)) {
                        $getUser = Profile::find($item->profile_id);
                        $newData['number'] = $item->number;
                        $newData['note'] = $item->note;
                        $newData['date'] = $item->created_at;
                        $newData['name'] = $getUser->name;
                        $newData['id'] = $getUser->id;
                    }
                }
            }
            return response()->json(['data' => $newData], 200);
        }
        else
        {
            return response()->json(['data' => ''], 200);
        }
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/report/send",
 *     tags={"Report"},
 *     summary="Send Report",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"title", "note"},
 *             @OA\Property(property="title", type="string"),
 *             @OA\Property(property="note", type="string"),
 *             @OA\Property(property="data", type="string"),
 *         ),
 *     ),
 *     @OA\Response(response="200", description="Report Submitted"),
 *     @OA\Response(response="404", description="Report Not Submitted"),
 *      security={{"bearerAuth":{}}}
 * )
 */
public function sent_report(Request $request)
{
    $reqData = $request->all();
    $user = auth()->user();
    $title = $reqData['title'];
   
    $note = $reqData['note'];
    $profile_id = $user->id;
    // $data = json_encode($reqData['data']);


    $report = new Report;
    $report->title = $title;
    $report->profile_id = $profile_id;
    $report->note = $note;
    $report->status = 'pending';
    // $report->data = $data;
    $report->save();

    return response()->json(['message' => 'Report Submitted'], 200);
}
/**
     * @OA\Post(
     *     path="/datingapp/api/get_filter_data",
     *      tags={"Data"},
     *     summary="Filter Data List",
     *     @OA\Parameter(
     *         name="min_age",
     *         in="query",
     *         description="Enter Min Age",
     *         @OA\Schema(type="integer")
     *     ),
     *   @OA\Parameter(
     *         name="max_age",
     *         in="query",
     *         description="Enter Max Age",
     *         @OA\Schema(type="integer")
     *     ),
     *  @OA\Parameter(
     *         name="min_children",
     *         in="query",
     *         description="Enter Min Children",
     *         @OA\Schema(type="integer")
     *     ),
     *   @OA\Parameter(
     *         name="max_children",
     *         in="query",
     *         description="Enter Max Children",
     *         @OA\Schema(type="integer")
     *     ),
     *  @OA\Parameter(
     *         name="city",
     *         in="query",
     *         description="Enter City",
     *         @OA\Schema(type="string")
     *     ),
     *  @OA\Parameter(
     *         name="martial_status",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     *  @OA\Parameter(
     *         name="job",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     *  @OA\Parameter(
     *         name="nationality",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     * 
     * *  @OA\Parameter(
     *         name="nationality_ar",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     * *  @OA\Parameter(
     *         name="city_ar",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     * 
     *   @OA\Parameter(
     *         name="por_ar",
     *         in="query",
     *         description="Enter Martial Status",
     *         @OA\Schema(type="string")
     *     ),
     *  @OA\Parameter(
     *         name="place_of_residence",
     *         in="query",
     *         description="Enter Place of Residence",
     *         @OA\Schema(type="string")
     *     ),
     *  @OA\Parameter(
     *         name="min_length",
     *         in="query",
     *         description="Enter Min Height",
     *         @OA\Schema(type="integer")
     *     ),
     *   @OA\Parameter(
     *         name="max_length",
     *         in="query",
     *         description="Enter Max Height",
     *         @OA\Schema(type="integer")
     *     ),
     *  @OA\Parameter(
     *         name="min_weight",
     *         in="query",
     *         description="Enter Min Weight",
     *         @OA\Schema(type="integer")
     *     ),
     *   @OA\Parameter(
     *         name="max_weight",
     *         in="query",
     *         description="Enter Max Weight",
     *         @OA\Schema(type="integer")
     *     ),
     *   @OA\Parameter(
     *         name="type_of_marriage",
     *         in="query",
     *         description="Enter Max Weight",
     *         @OA\Schema(type="string")
     *     ),
     *   @OA\Parameter(
     *         name="type_of_marriage_ar",
     *         in="query",
     *         description="Enter Max Weight",
     *         @OA\Schema(type="string")
     *     ),
     *   @OA\Parameter(
     *         name="type_of_hijab",
     *         in="query",
     *         description="Enter Max Weight",
     *         @OA\Schema(type="string")
     *     ),
     *   @OA\Parameter(
     *         name="type_of_hijab_ar",
     *         in="query",
     *         description="Enter Max Weight",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found"),
     *     @OA\Response(response="400", description="Not Valid"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function filter_records(Request $request)
    {
        $user = auth()->user(); 
        $query = Profile::query();
        $query->where('id', '!=', $user->id);
        $query->where('profile_status',1);

        if ($request->filled('nationality')) {
            $query->where('nationality', $request->input('nationality'));
        }

        if ($request->filled('nationality_ar')) {
            $query->where('nationality_ar', $request->input('nationality_ar'));
        }

        if ($request->filled('city')) {
            $query->where('city', $request->input('city'));
        }

        if ($request->filled('city_ar')) {
            $query->where('city_ar', $request->input('city_ar'));
        }

        if ($request->filled('job')) {
            $query->where('job', $request->input('job'));
        }

        if ($request->filled('martial_status')) {
            $query->where('martial_status', $request->input('martial_status'));
        }

        if ($request->filled('place_of_residence')) {
            $query->where('place_of_residence', $request->input('place_of_residence'));
        }

        if ($request->filled('por_ar')) {
            $query->where('por_ar', $request->input('por_ar'));
        }

        if ($request->filled('min_age')) {
            $query->where('age', '>=', $request->input('min_age'));
        }

        if ($request->filled('max_age')) {
            $query->where('age', '<=', $request->input('max_age'));
        }

        if ($request->filled('min_children')) {
            $query->where('number_of_children', '>=', $request->input('min_children'));
        }

        if ($request->filled('max_children')) {
            $query->where('number_of_children', '<=', $request->input('max_children'));
        }

        if ($request->filled('min_length')) {
            $query->where('height', '>=', $request->input('min_length'));
        }

        if ($request->filled('max_length')) {
            $query->where('height', '<=', $request->input('max_length'));
        }

        if ($request->filled('min_weight')) {
            $query->where('width', '>=', $request->input('min_weight'));
        }

        if ($request->filled('max_weight')) {
            $query->where('width', '<=', $request->input('max_weight'));
        }

        if ($request->filled('type_of_marriage')) {
            $query->where('type_of_marriage', '=', $request->input('type_of_marriage'));
        }

        if ($request->filled('type_of_marriage_ar')) {
            $query->where('type_of_marriage_ar', '=', $request->input('type_of_marriage_ar'));
        }

        if ($request->filled('type_of_hijab')) {
            $query->where('type_of_hijab', '=', $request->input('type_of_hijab'));
        }

        if ($request->filled('type_of_hijab_ar')) {
            $query->where('type_of_hijab_ar', '=', $request->input('type_of_hijab_ar'));
        }

        $query->with('qualities');

        $filteredUsers = $query->get();

        return response()->json(['users' => $filteredUsers->isEmpty() ? 'no-data' : $filteredUsers], 200);
    }

     /**
     * @OA\GET(
     *     path="/datingapp/api/get_subscription_list",
     *      tags={"Subscriptions"},
     *     summary="Get All Subscription",
     *     @OA\Response(response="200", description="Success"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function get_subscription_list(Request $request)
    {
        $subscriptions = Subscription::where('is_active','1')->get();
        return response()->json(['data' => $subscriptions], 200);
    }

    /**
     * @OA\GET(
     *     path="/datingapp/api/history_list",
     *      tags={"History"},
     *     summary="Get All History List",
     *     @OA\Response(response="200", description="Success"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function get_history_list()
    {
        $user = auth()->user();
        $notifications = Notification::where('profile_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        $responseData = [];

        if ($notifications->isNotEmpty()) {
            foreach ($notifications as $notification) {
                $data = json_decode($notification->data, true); 

                $subData = [
                    'name' => null,
                    'id' => null,
                ];

                if (isset($data[1])) {
                    $subData['name'] = $data[1]['name'] ?? null;
                    $subData['id'] = $data[1]['id'] ?? null;
                }

                $newData = [
                    // 'noti_id' => $notification->id,
                    'history_type' => $notification->type,
                    // 'is_read' => $notification->read_at,
                    'time' => $notification->created_at,
                    'history_data' => $subData,
                ];

                // if ($notification->type === "profile_contact_request" && isset($data['request_id'])) {
                //     $newData['request_id'] = $data['request_id'];
                // }

                $responseData[] = $newData;
            }

            return response()->json(['history' => $responseData], 200);
        } else {
            return response()->json(['history' => []], 200);
        }
    }

 /**
     * @OA\GET(
     *     path="/datingapp/api/whome_list",
     *      tags={"History"},
     *     summary="Get All Whome List",
     *     @OA\Response(response="200", description="Success"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function get_whome_list()
    {
        $user = auth()->user();
        $notifications = Notification::where('opp_profile_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        $responseData = [];

        if ($notifications->isNotEmpty()) {
            foreach ($notifications as $notification) {
                $oppData = Profile::find($notification->profile_id);
                $data = json_decode($notification->data, true); 

                $subData = [
                    'name' => null,
                    'id' => null,
                ];

                if (isset($data[1])) {
                    $subData['name'] = $oppData->name ?? null;
                    $subData['id'] = $oppData->id ?? null;
                }

                $newData = [
                    // 'noti_id' => $notification->id,
                    'type' => $notification->type,
                    // 'is_read' => $notification->read_at,
                    'time' => $notification->created_at,
                    'data' => $subData,
                ];

                // if ($notification->type === "profile_contact_request" && isset($data['request_id'])) {
                //     $newData['request_id'] = $data['request_id'];
                // }

                $responseData[] = $newData;
            }

            return response()->json(['whome' => $responseData], 200);
        } else {
            return response()->json(['whome' => []], 200);
        }
    }

     /**
     * @OA\GET(
     *     path="/datingapp/api/get_subscription_details/{id}",
     *      tags={"Subscriptions"},
     *     summary="Get All Subscription",
     * 
     *   @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the user",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
     *     @OA\Response(response="200", description="Success"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function get_subscription_details($id)
    {
        $subscriptions = Subscription::find($id);
        return response()->json(['details' => $subscriptions], 200);
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/feedback/send",
 *     tags={"Feedback"},
 *     summary="Send Feedback",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"data"},
 *             @OA\Property(property="data", type="string"),
 *         ),
 *     ),
 *     @OA\Response(response="200", description="Feedback Submitted"),
 *     @OA\Response(response="404", description="Feedback Not Submitted"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function store_feedback(Request $request)
    {
        $reqData = $request->all();
        $user = auth()->user();

        $feedback = new Feedback;
        $feedback->profile_id = $user->id;
        $feedback->data = $reqData['data'];
        $feedback->save();

        return response()->json(['Feedback Saved' => $feedback], 200);
    }


/**
 * @OA\Post(
 *     path="/datingapp/api/profile/search/{id}",
 *     tags={"Search"},
 *     summary="Send Search Para Request",
 *     
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="Enter Name",
 *         required=true,
 *         @OA\Schema(type="string")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function search_list(Request $request, $id)
    {
        $reqData = $request->all();
        $user = auth()->user();
        if($id=='')
        {
            $query = Profile::query();
            $query->with('qualities');
        }
        else
        {
            $query = Profile::query();
            $query->where('id', '!=', $user->id);
            $query->where('name', 'LIKE', '%' . $id . '%');
            $query->with('qualities');
        }

        $filteredUsers = $query->get();

        return response()->json(['users' => $filteredUsers->isEmpty() ? 'no-data' : $filteredUsers], 200);
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/subscription/history",
 *     tags={"Subscriptions"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function get_subscription_history()
    {
        $user = auth()->user();
        $data = SubscriptionProfileDetail::with('subscriptions')->where('profile_id',$user->id)->get();

        if($data)
        {
            return response()->json(['data' => $data], 200);
        }
        else
        {
            return response()->json(['message' => 'No Data Found'], 100);
        }
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/terms/list",
 *     tags={"Terms & Condition"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function get_temrs_condition_list()
    {
        $data = TermsAndCondition::get();
        return response()->json(['data' => $data], 200);
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/terms/details/{id}",
 *     tags={"Terms & Condition"},
 *     summary="Send Search Para Request",
 *     
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of the Terms",
 *         required=true,
 *         @OA\Schema(type="string")
 *     ),
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function get_terms_condition_details($id)
    {
        $data = TermsAndCondition::find($id);
        return response()->json(['data' => $data], 200);
    }
/**
 * @OA\Get(
 *     path="/datingapp/api/payment/history",
 *     tags={"Payment"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function payment_history()
    {
        $user = auth()->user();

        $data = Payment::where('profile_id',$user->id)->get();
        return response()->json(['data' => $data], 200);
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/subscription/history/new",
 *     tags={"Subscription"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success"),
 *      security={{"bearerAuth":{}}}
 * )
 */
    public function subscription_history()
    {
        $user= auth()->user();
        $data= SubscriptionHistorie::with('subscription_profile','profile','subscription')->where('profile_id',$user->id)->get();
        return response()->json(['data' => $data], 200);
    }


/**
 * @OA\Get(
 *     path="/datingapp/api/country/list",
 *     tags={"Collection"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success")
 * )
 */
    public function country_list()
    {
        $states = Country::orderBy('name','asc')->get();
        $data = [];

        foreach ($states as $state) {
            $data[] = [
                'id' => $state->id,
                'value' => $state->name,
                'value_ar' => $state->name_ar,
                'label' => $state->name,
                'label_ar' => $state->name_ar,
                'is_gcc' => $state->is_gcc 
            ];
        }

        return response()->json(['data' => $data], 200);
    }

/**
 * @OA\Get(
 *     path="/datingapp/api/country_por/list",
 *     tags={"Collection"},
 *     summary="Send Search Para Request",
 *     @OA\Response(response="200", description="Success")
 * )
 */
public function country_list_por()
{
    $states = Country::where('is_gcc','1')->orderBy('name','asc')->get();
    $data = [];

    foreach ($states as $state) {
        $data[] = [
            'id' => $state->id,
            'value' => $state->name,
            'value_ar' => $state->name_ar,
            'label' => $state->name,
            'label_ar' => $state->name_ar
        ];
    }

    return response()->json(['data' => $data], 200);
}

/**
 * @OA\Post(
 *     path="/datingapp/api/state/list/{country_id}",
 *     tags={"Collection"},
 *     summary="Send Search Para Request",
 *     
 *     @OA\Parameter(
 *         name="country_id",
 *         in="path",
 *         description="Enter Country Id",
 *         required=true,
 *         @OA\Schema(type="string")
 *     ),
 *     @OA\Response(response="200", description="Success")
 * )
 */
    public function state_list(Request $request, $country_id)
    {
        $states = State::where("country_id", $country_id)->orderBy('name','asc')->get();
        // $states = State::orderBy('name','asc')->get();

        $data = [];

        foreach ($states as $state) {
            $data[] = [
                'id' => $state->id,
                'value' => $state->name,
                'value_ar' => $state->name_ar,
                'label' => $state->name,
                'label_ar' => $state->name_ar,
                'country_id' => $state->country_id
            ];
        }

        return response()->json(['data' => $data], 200);
    }

/**
 * @OA\Post(
 *     path="/datingapp/api/city/list/{country_id}",
 *     tags={"Collection"},
 *     summary="Send Search Para Request",
 *     
 *     @OA\Parameter(
 *         name="country_id",
 *         in="path",
 *         description="Enter Country Id",
 *         required=true,
 *         @OA\Schema(type="string")
 *     ),
 *     @OA\Response(response="200", description="Success")
 * )
 */
public function city_list(Request $request, $country_id)
{
    // $states = Cities::where("country_id", $country_id)->where('state_id',$state_id)->orderBy('name','asc')->get();
    $states = Cities::where('country_id',$country_id)->orderBy('name','asc')->get();

    $data = [];

    foreach ($states as $state) {
        $data[] = [
            'id' => $state->id,
            'value' => $state->name,    
            'value_ar' => $state->name_ar,
            'label' => $state->name,
            'label_ar' => $state->name_ar,
            // 'state_id' => $state->state_id,
            'country_id' => $state->country_id
        ];
    }

    return response()->json(['data' => $data], 200);
}
}
