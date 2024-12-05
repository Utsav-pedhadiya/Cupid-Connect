<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TermsAndCondition;

class TermsController extends Controller
{
    public function index()
    {
        $data = TermsAndCondition::get();
        return view('pages.terms.index',compact('data'));
    }

    public function create()
    {
        return view('pages.terms.add');
    }

    public function store(Request $request)
    {
        $reqData = $request->all();

        $terms = new TermsAndCondition();
        $terms->title = $reqData['title'];
        $terms->content = $reqData['content'];
        $terms->save();

        return redirect()->route('terms')->with('success', 'Terms Added successfully.');
    }

    public function edit($id)
    {
        $find = TermsAndCondition::find($id);
        return view('pages.terms.edit',compact('find'));
    }

    public function update(Request $request)
    {
        $reqData = $request->all();

        $terms = TermsAndCondition::find($reqData['id']);
        $terms->title = $reqData['title'];
        $terms->content = $reqData['content'];
        $terms->save();

        return redirect()->route('terms')->with('success', 'Terms Updated successfully.');
    }

    public function delete($id)
    {
        $terms = TermsAndCondition::find($id);
        $terms->delete();

        return redirect()->route('terms')->with('success', 'Terms Deleted successfully.');
    }
}
