<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = DB::table('transactions')->get();

        return response()->json($transactions);
    }

    public function getOneTransaction($customer_id, $transaction_id)
    {
        $transactions = DB::table('transactions')->where('user_id' , $customer_id)->where('id' , $transaction_id)->first();
        return response()->json($transactions);
    }

    public function store(Request $request)
    {
        DB::table('transactions')->insert(
            ['user_id' => $request->get('customer_id'), 'amount' => $request->get('amount')]
        );
        return response()->json($request);
    }

    public function update(Request $request)
    {
       $transactions = DB::table('transactions')->where('id' , $request->get('id'))->update(['amount' => $request->get('amount')]);
       return response()->json($transactions);
    }

    public function destroy(Request $request)
    {
        DB::table('transactions')->where('id', '=', $request->get('id'))->delete();
    }
}
