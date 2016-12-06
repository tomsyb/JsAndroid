package com.daqi.baseproject.utils;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.daqi.baseproject.R;
import com.daqi.baseproject.js.BaseWebActivity;

/**
 * Created by yanbo on 2016/12/5.
 * 跳转相关
 */
public class SkipUtils {
    //--------------------------------------------------------------------------------专门为跳转到网页封装的工具跳转
    public static void skip2WebPage(Context context,Activity targetActivity, Bundle bundle,int type) {
        Intent intent = new Intent(context,targetActivity.getClass());
        intent.putExtras(bundle);
        context.startActivity(intent);
        setTexiao(context,type);

    }



    //跳转设置特效
    public static void setTexiao(Context contextp, int type) {
        Activity context = (Activity) contextp;
        switch (type) {
            case 0:
                context.overridePendingTransition(R.anim.am_push_left_in,
                        R.anim.am_push_left_out);
                break;
            case 1:
                // context.overridePendingTransition(R.anim.z_zoom_no
                // ,R.anim.z_zoom_no);
                context.overridePendingTransition(0, 0);
                break;
            case 2:
                context.overridePendingTransition(R.anim.am_zoomin_in,
                        R.anim.am_zoomout_out);
                break;
            default:
                break;
        }
    }

}
