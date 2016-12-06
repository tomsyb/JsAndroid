package com.daqi.baseproject.base;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.res.Resources;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import com.daqi.baseproject.utils.Log;

import org.xutils.x;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yanbo on 2016/12/5.
 */
public class B_IApplication extends Application {
    public static Activity mActivity = null;
    public static Resources mResources = null;
    public static List<Activity> activityList;
    public static Context RUNNINGContext = null;// 当前运行的activity的Context上下文
    private static boolean haveNet = true;// 是否有网络

    @Override
    public void onCreate() {
        super.onCreate();
        //初始化xutils
        x.Ext.init(this);
        RUNNINGContext = getApplicationContext();
        mResources = getResources();
    }
    //-------------------------------------------activity相关类--------------------------------------
    /**
     * 添加activity
     *
     * @param a
     */
    public static void addActivity(Activity a) {
        if (activityList == null) {
            activityList = new ArrayList<Activity>();
        }
        activityList.add(a);
    }

    /**
     * 移除activity
     *
     * @param a
     */
    public static void removeActivity(Activity a) {
        synchronized (activityList) {
            if (activityList != null && activityList.size() > 0) {
                try {
                    activityList.remove(a);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * finish所有list中的activity
     */
    public static void exit() {
        synchronized (activityList) {
            int size = activityList.size();
            for (int i = 0; i < size; i++) {
                if (activityList.get(0) != null) {
                    activityList.get(0).finish();
                }
            }
            System.gc();// 垃圾回收
            android.os.Process.killProcess(android.os.Process.myPid());
            System.runFinalization();
            System.exit(0);
        }
    }

    //-------------------------------------------判断是否有网--------------------------------------
    public static boolean gethaveNet(Context context) {
        boolean success = false;
        // 获得网络连接服务
        ConnectivityManager connManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo.State state = connManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI).getState(); // 获取网络连接状态
        if (NetworkInfo.State.CONNECTED == state) { // 判断是否正在使用WIFI网络
            success = true;
        }
        state = connManager.getNetworkInfo(ConnectivityManager.TYPE_MOBILE).getState(); // 获取网络连接状态
        if (NetworkInfo.State.CONNECTED == state) { // 判断是否正在使用GPRS网络
            success = true;
        }
        try {
            if (!success) {
                haveNet = false;
                Log.e("您的网络连接已中断");
//				BaseActivity.tvNetWorkState
//						.setVisibility(BaseActivity.currentIsShowNetWork ? View.VISIBLE
//								: View.GONE);
            } else {
//				BaseActivity.tvNetWorkState.setVisibility(View.GONE);
                Log.e("您的网络连接成功");
            }
        } catch (Exception e) {
        }
        return success;
    }



}
