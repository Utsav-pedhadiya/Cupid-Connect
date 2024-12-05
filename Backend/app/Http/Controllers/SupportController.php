<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;

class SupportController extends Controller
{
    public function index()
    {
        $data = Report::with('profile')->get();
        // dd($data);
        return view('pages.support.index', compact('data'));
    }

    public function show($id)
    {
        $result = Report::find($id);
        return view('pages.support.show', compact('result'));
    }

    public function edit($id)
    {
        $data = Report::with('profile')->find($id);
        return view('pages.support.edit', compact('data'));
    }

    public function update(Request $request)
    {
        $reqData = $request->all();
        $id=$reqData['id'];
        $status = $reqData['status'];

        $sub = Report::findOrFail($id);
        // dd($reqData);
        $sub->update([
            'title' => $reqData['title'],
            'note' => $reqData['note'],
            'status' => $status,
            'resolved_issue' => $reqData['resolved'],
        ]);

        return redirect()->route('support')->with('status', 'Support Ticket updated successfully.');
    }

    public function delete($id)
    {
        $sub = Report::findOrFail($id);
        $sub->delete();

        return redirect()->route('support')->with('status', 'Support Ticket Deleted successfully.');
    }   

}