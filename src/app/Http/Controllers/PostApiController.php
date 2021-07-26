<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PostApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'summary' => 'required',
            'content' => 'required',
            'imgUrl' => 'required',
            'imgText' => 'required',
            'tag' => 'required',
            'category' => 'required',
            'publishedAt' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['status' => 'error', 'message' => $errors->all()], 500);
        } else {
            Post::create([
                'author_id' => request('authorId'),
                'title' => request('title'),
                'slug' => Str::slug(request('title'), '-'),
                'summary' => request('summary'),
                'content' => request('content'),
                'img_url' => request('imgUrl'),
                'img_text' => request('imgText'),
                'published_at' => request('publishedAt'),
                'tag' => request('tag'),
                'category_id' => request('category'),
            ]);

            return response()->json(['status' => 'success', 'message' => 'Post was successfully save!'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::where("slug", $slug)->firstOrFail();
        return response()->json([$post], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return response()->json([$post], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'summary' => 'required',
            'content' => 'required',
            'imgUrl' => 'required',
            'imgText' => 'required',
            'tag' => 'required',
            'category' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['status' => 'error', 'message' => $errors->all()], 500);
        } else {
            Post::where('id', $id)
                ->update([
                    'title' => request('title'),
                    'summary' => request('summary'),
                    'content' => request('content'),
                    'img_url' => request('imgUrl'),
                    'img_text' => request('imgText'),
                    'published_at' => request('publishedAt'),
                    'tag' => request('tag'),
                    'category_id' => request('category'),
                ]);

            return response()->json(['status' => 'success', 'message' => 'Post was successfully updated!'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json(['status' => 'success', 'message' => 'Post was successfully deleted!'], 200);
    }
}
