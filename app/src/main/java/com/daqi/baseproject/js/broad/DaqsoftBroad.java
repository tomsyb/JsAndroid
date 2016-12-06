package com.daqi.baseproject.js.broad;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/**
 * Created by yanbo on 2016/12/5.
 * 自己定义一个广播
 */
public class DaqsoftBroad extends BroadcastReceiver{
    public DaqsoftBroad(IDaqsoftBroadInterface broad) {
        mBroad = broad;
    }

    private IDaqsoftBroadInterface mBroad;
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        //如果接到的广播是刷新数据
        if (action.equals("com.daqsoft.android.closepage")){
            mBroad.closePage();
        }else if (action.equals("com.daqsoft.android.doSearch")){
            String key = intent.getStringExtra("key");
            mBroad.doSearch(key);
        }
    }
}
