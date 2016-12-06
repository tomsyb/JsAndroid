package com.daqi.baseproject.utils;

import android.os.Bundle;

import com.daqi.baseproject.js.BaseWebActivity;

/**
 * Created by yanbo on 2016/12/5.
 */
public class BundleUtils {
    //为跳转网页封装的bundle

    /**
     *
     * @param url 网址
     * @param title 标题
     * @param isRrefresh 是否刷新
     */
    public static Bundle getBundle(String url,String title,boolean isRrefresh){
        Bundle bundle = new Bundle();
        bundle.putString(BaseWebActivity.PARAMS_HTMLURL,url);
        bundle.putString(BaseWebActivity.PARAMS_TITLE,title);
        bundle.putString(BaseWebActivity.PARAMS_ISREFRESH, isRrefresh+"");
        return bundle;
    }
}
