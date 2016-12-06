package com.daqi.baseproject.http;

import android.webkit.WebView;
import android.webkit.JavascriptInterface;

import com.daqi.baseproject.common.Constant;
import com.daqi.baseproject.utils.Log;

import org.xutils.common.Callback;
import org.xutils.http.RequestParams;
import org.xutils.x;

/**
 * Created by yanbo on 2016/12/5.
 * html网络请求
 */
public class Rq_htmlData {
    private static RequestParams params;

    OnGetWebTitle onGetWebTitle;
    public interface OnGetWebTitle {
        void setTitle(String title);
    }
    public static WebView currentWebView = null;
    public Rq_htmlData setOnGetWebTitle(OnGetWebTitle onGetWebTitle) {
        this.onGetWebTitle = onGetWebTitle;
        return this;
    }

    public static void href2Page(String url) {
    }

    @JavascriptInterface
    public static void getSceneryToday(final String code){
        params = new RequestParams(Constant.SCENERYTODAYHTMLURL);
        params.addBodyParameter("resourcecode",code);
        x.http().get(params, new Callback.CacheCallback<String>() {
            @Override
            public boolean onCache(String result) {
                return false;
            }

            @Override
            public void onSuccess(String result) {
                Log.e("成功");
                currentWebView.loadUrl("javascript:sceneriesToday(" + result + ")");

            }

            @Override
            public void onError(Throwable ex, boolean isOnCallback) {
                Log.e("失败");
            }

            @Override
            public void onCancelled(CancelledException cex) {

            }

            @Override
            public void onFinished() {

            }
        });

    }

}
