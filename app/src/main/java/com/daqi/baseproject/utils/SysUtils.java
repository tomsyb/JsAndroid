package com.daqi.baseproject.utils;

import android.content.Intent;
import android.provider.Settings;

import com.daqi.baseproject.base.B_IApplication;

/**
 * Created by yanbo on 2016/12/5.
 * 系统的一些工具类
 */
public class SysUtils {
    /**
     * 跳转至设置页面
     */
    public static void skip2Setting() {
        Intent intent = new Intent(Settings.ACTION_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        B_IApplication.mActivity.startActivity(intent);
    }


}
