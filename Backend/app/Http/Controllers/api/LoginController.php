<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\Request as Req;
use App\Models\ProfileContact;
use App\Models\ProfileLike;
use App\Models\Qualitie;
use App\Models\DeviceToken;
use App\Models\Payment;
use App\Models\ProfileView;
use App\Models\Report;
use App\Models\SubscriptionHistorie;
use App\Models\SubscriptionProfileDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{


    /**
     * @OA\Post(
     *     path="/datingapp/api/login",
     *      tags={"Auth"},
     *     summary="Authenticate User & Create Sanctum Token",
     *     @OA\Parameter(
     *         name="number",
     *         in="query",
     *         description="Enter Mobile Number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *   @OA\Parameter(
     *         name="otp",
     *         in="query",
     *         description="Enter OTP",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *    @OA\Parameter(
     *         name="device_token",
     *         in="query",
     *         description="Enter Device Token",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found"),
     *     @OA\Response(response="400", description="Not Valid"),
     * )
     */
    public function authenticate(Request $request)
    {   
        $numb = $request->input('number');
        //$profile = Profile::get();
        $profile = Profile::with('qualities')->where('number',$numb)->first();
        $deviceToken = $request->input('device_token');
        //return response()->json($profile);
        //exit;

        if (!$profile) {
            return response()->json(['message' => 'You Are Not Registered'], 404);
            $registrationResponse = $this->registraion($request);
            return $registrationResponse;
        }

        if ($profile->profile_status === 2) {
            $data = [
                'message' => 'You Are Suspended. Please Contact Admin Staff.',
                'contact_email' => 'admin@example.com' // Change this to the actual admin email address
            ];
            return response()->json($data, 404);
        } else {
            if ($request->input('otp') !== $profile->otp) {
                return response()->json(['message' => 'OTP Not Valid'], 400);
            }

            $token = $profile->createToken('auth-token')->plainTextToken;
            $tokenWithoutId = explode('|', $token)[1];

            $find = DeviceToken::where('profile_id', $profile->id)->first();

            if ($find) {
                $find->token = $deviceToken;
                $find->save();
            } else {
                $NewdeviceToken = new DeviceToken();
                $NewdeviceToken->profile_id = $profile->id;
                $NewdeviceToken->token = $deviceToken;
                $NewdeviceToken->save();
            }

            if ($profile->profile_status == 0) {
                $profile->profile_status = 1;
                $profile->save();
            }

            return response()->json([
                'token' => $tokenWithoutId,
                'profile' => $profile->toArray(), // This sends the entire profile data
            ], 200);
        }
    }

    /**
     * @OA\Post(
     *     path="/datingapp/api/registration",
     *    tags={"Auth"},
     *     summary="Register New User",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"number", "otp"},
     *             @OA\Property(property="number", type="string"),
     *             @OA\Property(property="otp", type="string"),
     *             @OA\Property(property="gender", type="string"),
     *             @OA\Property(property="name", type="string"),
     *             @OA\Property(property="age", type="integer", format="int64"),
     *             @OA\Property(property="nationality", type="string"),
     *             @OA\Property(property="interests_ar", type="string"),
     *             @OA\Property(property="city_ar", type="string"),
     *             @OA\Property(property="por_ar", type="string"),
     *             @OA\Property(property="place_of_residence", type="string"),
     *             @OA\Property(property="city", type="string"),
     *             @OA\Property(property="job", type="string"),
     *             @OA\Property(property="lineage", type="string"),
     *             @OA\Property(property="skin_color", type="string"),
     *             @OA\Property(property="martial_status", type="string"),
     *             @OA\Property(property="number_of_children", type="integer", format="int64"),
     *             @OA\Property(property="religious_commitment", type="string"),
     *             @OA\Property(property="financial_situation", type="string"),
     *             @OA\Property(property="height", type="number", format="double"),
     *             @OA\Property(property="width", type="number", format="double"),
     *             @OA\Property(property="body_tone", type="string"),
     *             @OA\Property(property="health_status", type="string"),
     *             @OA\Property(property="write_about_yourself", type="string"),
     *             @OA\Property(property="qualities", type="array", @OA\Items(type="string"),),
     *             @OA\Property(property="interests", type="string"),
     *             @OA\Property(property="device_token", type="string"),
     *             @OA\Property(property="type_of_marriage", type="string"),
     *             @OA\Property(property="type_of_hijab", type="string"),
     *             @OA\Property(property="type_of_marriage_ar", type="string"),
     *             @OA\Property(property="type_of_hijab_ar", type="string"),
     *         ),
     *     ),
     *     @OA\Response(response="200", description="Login successful"),
     *     @OA\Response(response="401", description="Invalid credentials")
     * )
     */
    public function registraion(Request $request)
    {
        $reqData = $request->all();
        $deviceToken = $request->input('device_token');

        $validator = Validator::make($request->all(), [
            'number' => 'required|unique:profiles,deleted_at,NULL',
            'otp' => 'required',
            'name' => 'required',
            
            // Add more rules if necessary
        ]);

       
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $number = $reqData['number'];
        $otp = $reqData['otp'];
        $gender = $reqData['gender'];
        $name = $reqData['name'];
        $age = $reqData['age'];
        $nationality = $reqData['nationality'];
        $nationality_ar = $reqData['nationality_ar'];
        $place_of_residence = $reqData['place_of_residence'];
        $city = $reqData['city'];
        $job = $reqData['job'];
        $lineage = $reqData['lineage'];
        $skin_color = $reqData['skin_color'];
        $martial_status = $reqData['martial_status'];
        $number_of_children = $reqData['number_of_children'];
        $are_the_children_with_you = $reqData['are_the_children_with_you']??NULL;
        $religious_commitment = $reqData['religious_commitment'];
        $financial_situation = $reqData['financial_situation'];
        $height = $reqData['height'];
        $width = $reqData['width'];
        $body_tone = $reqData['body_tone'];
        $health_status = $reqData['health_status'];
        $write_about_yourself = $reqData['write_about_yourself'];
        $qualities_you_are_looking_for = $reqData['qualities'];
        $city_ar = $reqData['city_ar'];
        $por_ar = $reqData['por_ar'];
        $type_of_marriage = $reqData['type_of_marriage'] ?? NULL;
        $type_of_hijab = $reqData['type_of_hijab'] ?? NULL;
        $type_of_marriage_ar = $reqData['type_of_marriage_ar'] ?? NULL;
        $type_of_hijab_ar = $reqData['type_of_hijab_ar'] ?? NULL;
        
//        $interests = json_encode($reqData['interests']);
        $interests = implode(',',$reqData['interests']);

        $profile = new Profile;
        $profile->number = $number;
        $profile->otp = $otp;
        $profile->gender = $gender;
        $profile->name = $name;
        $profile->age = $age;
        $profile->nationality = $nationality;
        $profile->nationality_ar = $nationality_ar;
        $profile->place_of_residence = $place_of_residence;
        $profile->city = $city;
        $profile->job = $job;
        $profile->lineage = $lineage;
        $profile->skin_color = $skin_color;
        $profile->martial_status = $martial_status;
        $profile->number_of_children = $number_of_children;
        $profile->are_the_children_with_you = $are_the_children_with_you;
        $profile->religious_commitment = $religious_commitment;
        $profile->financial_situation = $financial_situation;
        $profile->height = $height;
        $profile->width = $width;
        $profile->body_tone = $body_tone;
        $profile->health_status = $health_status;
        $profile->write_about_yourself = $write_about_yourself;
        // $profile->qualities_you_are_looking_for = $qualities_you_are_looking_for;
        $profile->interests = $interests;
        // $profile->interests_ar = $interests_ar;
        $profile->city_ar = $city_ar;
        $profile->por_ar = $por_ar;
        $profile->type_of_marriage = $type_of_marriage;
        $profile->type_of_hijab = $type_of_hijab;
        $profile->type_of_marriage_ar = $type_of_marriage_ar;
        $profile->type_of_hijab_ar = $type_of_hijab_ar;

        $profile->views = 0;
        $profile->likes = 0;
        $profile->save();

        //Last Recorded ID
        $lastRecordedId = $profile->id;

        // Storing Qualities In Different Table
        foreach ($qualities_you_are_looking_for as $key => $value) {
            $quality = new Qualitie;
            $quality->quality_name = $value;
            $quality->profile_id = $lastRecordedId;
            $quality->save();
        }

        if ($lastRecordedId) {
            $profile = Profile::with('qualities')->where('number', $request->input('number'))->first();

            if (!$profile) {
                return response()->json(['message' => 'You Are Not Registered'], 404);
                $registrationResponse = $this->registraion($request);
                return $registrationResponse;
            }

            if ($request->input('otp') !== $profile->otp) {
                return response()->json(['message' => 'OTP Not Valid'], 400);
            }

            $token = $profile->createToken('auth-token')->plainTextToken;
            $tokenWithoutId = explode('|', $token)[1];

            if ($deviceToken) {
                $NewdeviceToken = new DeviceToken();
                $NewdeviceToken->profile_id = $profile->id;
                $NewdeviceToken->token = $deviceToken;
                $NewdeviceToken->save();
            }

            return response()->json(['message' => 'Profile created successfully', 'profile' => $profile, 'token' => $tokenWithoutId], 200);
            exit;
        }
        return response()->json(['message' => 'Profile Not Created'], 200);
        exit;
    }

    /**
     * @OA\Post(
     *     path="/datingapp/api/logout",
     *      tags={"Auth"},
     *     summary="User Logout & Token Also Deleted",
     *
     *    @OA\Parameter(
     *         name="device_token",
     *         in="query",
     *         required=true,
     *         description="Enter Device Token",
     *         @OA\Schema(type="string")
     *     ),
     *
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function logout(Request $request)
    {
        $profile = Auth::user();

        $validator = Validator::make($request->all(), [
            'device_token' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
            exit;
        }

        $device_token = $request->input('device_token');

        $data = DeviceToken::where('token', $device_token)->first();
        $data->delete();

        if ($profile instanceof Profile) {
            $profile->tokens()->delete();
            return response()->json(['message' => 'Logged out successfully']);
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    /**
     * @OA\Post(
     *     path="/datingapp/api/delete_account",
     *      tags={"Auth"},
     *     summary="Delete Account",
     *     @OA\Parameter(
     *         name="number",
     *         in="query",
     *         description="Enter Mobile Number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found"),
     *     @OA\Response(response="400", description="Not Valid"),
     *      security={{"bearerAuth":{}}}
     * )
     */
    public function deleteAccount(Request $request)
    {
        try {
            $user = auth()->user();
            $reqData = $request->all();
            $number = $reqData['number'];

            if ($user->number != $number) {
                return response()->json(['message' => 'Mobile Number Not Matching'], 400);
            }

            $profileId = $user->id;

            // Delete related records
            Qualitie::where('profile_id', $profileId)->delete();
            Notification::where('profile_id', $profileId)->delete();
            Notification::where('opp_profile_id', $profileId)->delete();
            Req::where('profile_id', $profileId)->delete();
            Req::where('requester_id', $profileId)->delete();
            ProfileView::where('profile_id', $profileId)->delete();
            ProfileView::where('viewer_id', $profileId)->delete();
            ProfileLike::where('liked_profile_id', $profileId)->delete();
            ProfileLike::where('liker_id', $profileId)->delete();
            ProfileContact::where('profile_id', $profileId)->delete();
            SubscriptionHistorie::where('profile_id', $profileId)->delete();
            SubscriptionProfileDetail::where('profile_id', $profileId)->delete();
            Payment::where('profile_id', $profileId)->delete();
            Report::where('profile_id',$profileId)->delete();
            DeviceToken::where('profile_id',$profileId)->delete();

            // Delete the user profile
            Profile::findOrFail($profileId)->delete();

            return response()->json(['message' => 'Account Deleted'], 200);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'User not found'], 404);
        } catch (\Exception $exception) {
            // Log the error
            \Log::error('Error deleting account: ' . $exception->getMessage());
            return response()->json(['message' => 'An error occurred while deleting the account'], 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/datingapp/api/generate_otp",
     *      tags={"Auth"},
     *     summary="Genrate OTP",
     *     @OA\Parameter(
     *         name="number",
     *         in="query",
     *         description="Enter Mobile Number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found"),
     *     @OA\Response(response="400", description="Not Valid"),
     * )
     */
    public function generateOTP(Request $request)
    {
        $reqData = $request->all();
        $number = $reqData['number'];
        //check user is exist or not

        $otp = rand(123456, 999999);
        $user = Profile::where('number', $number)->first();

        if ($user) {
            $user->update([
                'otp' => $otp
            ]);

            return response()->json(['message' => 'login', "otp" => $otp, "code" => '1'], 200);
        } else {
            return response()->json(['message' => 'register', "otp" => $otp, 'code' => '0'], 200);
        }
    }


    /**
     * @OA\Post(
     *     path="/datingapp/api/profile_update/{id}",
     *    tags={"Auth"},
     *     summary="Prodile Update",
     * @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the user",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="number", type="string"),
     *             @OA\Property(property="gender", type="string"),
     *             @OA\Property(property="name", type="string"),
     *             @OA\Property(property="age", type="integer", format="int64"),
     *             @OA\Property(property="nationality", type="string"),
     *             @OA\Property(property="nationality_ar", type="string"),
     *             @OA\Property(property="city_ar", type="string"),
     *             @OA\Property(property="por_ar", type="string"),
     *             @OA\Property(property="place_of_residence", type="string"),
     *             @OA\Property(property="city", type="string"),
     *             @OA\Property(property="job", type="string"),
     *             @OA\Property(property="lineage", type="string"),
     *             @OA\Property(property="skin_color", type="string"),
     *             @OA\Property(property="martial_status", type="string"),
     *             @OA\Property(property="number_of_children", type="integer", format="int64"),
     *             @OA\Property(property="religious_commitment", type="string"),
     *             @OA\Property(property="financial_situation", type="string"),
     *             @OA\Property(property="height", type="number", format="double"),
     *             @OA\Property(property="width", type="number", format="double"),
     *             @OA\Property(property="body_tone", type="string"),
     *             @OA\Property(property="health_status", type="string"),
     *             @OA\Property(property="write_about_yourself", type="string"),
     *             @OA\Property(property="qualities", type="array", @OA\Items(type="string"),),
     *             @OA\Property(property="interests", type="array", @OA\Items(type="string"),),
     *             @OA\Property(property="type_of_marriage", type="string"),
     *             @OA\Property(property="type_of_hijab", type="string"),
     *             @OA\Property(property="type_of_marriage_ar", type="string"),
     *             @OA\Property(property="type_of_hijab_ar", type="string"),
     *         ),
     *     ),
     *     @OA\Response(response="200", description="Profile Updated"),
     *     @OA\Response(response="401", description="Data Invalid"),
     *     @OA\Response(response="500", description="Update  failed"),
     *    security={{"bearerAuth":{}}}
     * )
     */
    public function updateUser(Request $request, $id)
    {
        $reqData = $request->all();


        $validator = Validator::make($request->all(), [
            'number' => 'required|string|max:9',
            'gender' => 'string|max:30',
            'name' => 'string|max:255',
            'age' => 'nullable|integer',
            'nationality' => 'nullable|string|max:255',
            'nationality_ar' => 'nullable|string|max:255',
            'city_ar' => 'nullable|string|max:255',
            'por_ar' => 'nullable|string|max:255',
            'place_of_residence' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'job' => 'nullable|string|max:255',
            'lineage' => 'nullable|string|max:255',
            'skin_color' => 'nullable|string|max:255',
            'martial_status' => 'nullable|string|max:255',
            'number_of_children' => 'nullable|integer',
            'religious_commitment' => 'nullable|string|max:255',
            'financial_situation' => 'nullable|string|max:255',
            'height' => 'nullable|numeric',
            'width' => 'nullable|numeric',
            'body_tone' => 'nullable|string|max:255',
            'health_status' => 'nullable|string|max:255',
            'write_about_yourself' => 'nullable|string',
            'qualities' => 'nullable|array',
            'interests' => 'nullable|array',

            
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);

        }

        $profile = Profile::findOrFail($id);


        $nameChanged = isset($reqData['name']) && $reqData['name'] !== $profile->name;

        $profile->number = $reqData['number'] ?? $profile->number;
        $profile->gender = $reqData['gender'] ?? $profile->gender;
        $profile->name = $reqData['name'] ?? $profile->name;
        $profile->age = $reqData['age'] ?? $profile->age;
        $profile->nationality = $reqData['nationality'] ?? $profile->nationality;
        $profile->nationality_ar = $reqData['nationality_ar'] ?? $profile->nationality_ar;
        $profile->city_ar = $reqData['city_ar'] ?? $profile->city_ar;
        $profile->por_ar = $reqData['por_ar'] ?? $profile->por_ar;
        $profile->place_of_residence = $reqData['place_of_residence'] ?? $profile->place_of_residence;
        $profile->city = $reqData['city'] ?? $profile->city;
        $profile->job = $reqData['job'] ?? $profile->job;
        $profile->lineage = $reqData['lineage'] ?? $profile->lineage;
        $profile->skin_color = $reqData['skin_color'] ?? $profile->skin_color;
        $profile->martial_status = $reqData['martial_status'] ?? $profile->martial_status;
        $profile->number_of_children = $reqData['number_of_children'] ?? $profile->number_of_children;
        // $profile->are_the_children_with_you = $reqData['are_the_children_with_you'] ?? $profile->are_the_children_with_you;
        $profile->religious_commitment = $reqData['religious_commitment'] ?? $profile->religious_commitment;
        $profile->financial_situation = $reqData['financial_situation'] ?? $profile->financial_situation;
        $profile->height = $reqData['height'] ?? $profile->height;
        $profile->width = $reqData['width'] ?? $profile->width;
        $profile->body_tone = $reqData['body_tone'] ?? $profile->body_tone;
        $profile->health_status = $reqData['health_status'] ?? $profile->health_status;
        $profile->write_about_yourself = $reqData['write_about_yourself'] ?? $profile->write_about_yourself;
        $profile->interests = implode(',', $reqData['interests']) ?? $profile->interests;
        $profile->type_of_marriage = $reqData['type_of_marriage'] ?? $profile->type_of_marriage;
        $profile->type_of_hijab = $reqData['type_of_hijab'] ?? $profile->type_of_hijab;
        $profile->type_of_marriage_ar = $reqData['type_of_marriage_ar'] ?? $profile->type_of_marriage_ar;
        $profile->type_of_hijab_ar = $reqData['type_of_hijab_ar'] ?? $profile->type_of_hijab_ar;
        $profile->save();

        if (isset($reqData['qualities']) &&
            $reqData['qualities'] !== $profile->qualities->pluck('quality_name')->toArray()) {
            $profile->qualities()->delete();

            foreach ($reqData['qualities'] as $key => $value) {
                $quality = new Qualitie;
                $quality->quality_name = $value;
                $quality->profile_id = $profile->id;
                $quality->save();
            }
        }

        $response = ['message' => 'User updated successfully'];
        if ($nameChanged) {
            $response['changed_name'] = $profile->name;
        }
        return response()->json($response, 200);
    }

    /**
     * @OA\Post(
     *     path="/datingapp/api/deavtive_account",
     *      tags={"Auth"},
     *     summary="User Account Deactivated",
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function deactivateAccount()
    {
        $user = auth()->user();

        $profile = Profile::find($user->id);
        $profile->profile_status = 0;
        $profile->save();

        DB::table('personal_access_tokens')
            ->where('tokenable_id', $user->id)
            ->delete();

        $response = ['message' => 'Your Account Has been Deactived. For active account just login again'];
        return response()->json($response, 200);

    }
}
