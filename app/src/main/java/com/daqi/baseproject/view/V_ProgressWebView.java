package com.daqi.baseproject.view;

import android.content.Context;
import android.os.Handler;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebView;


public class V_ProgressWebView extends WebView{
    private V_WebViewProgressBar progressBar;
    private Handler handler;
    private WebView _this;
    public V_ProgressWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        progressBar = new V_WebViewProgressBar(context);
        progressBar.setLayoutParams(new ViewGroup.LayoutParams
                (ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        progressBar.setVisibility(GONE);
        addView(progressBar);
        handler = new Handler();
        _this = this;
        //setWebChromeClient(new MyWebChromeClient());

    }

    public void setProgress(int newProgress){
        if(newProgress == 100){
            progressBar.setProgress(100);
            handler.postDelayed(runnable,200);
        }else if(progressBar.getVisibility() == GONE){
            progressBar.setVisibility(VISIBLE);
        }
        if(newProgress < 5){
            newProgress = 5;
        }
        progressBar.setProgress(newProgress);
    }

    private class MyWebChromeClient extends WebChromeClient {
        @Override
        public void onProgressChanged(WebView view, int newProgress) {
            if(newProgress == 100){
                progressBar.setProgress(100);
                handler.postDelayed(runnable,200);
            }else if(progressBar.getVisibility() == GONE){
                progressBar.setVisibility(VISIBLE);
            }
            if(newProgress < 5){
                newProgress = 5;
            }
            progressBar.setProgress(newProgress);
            super.onProgressChanged(view, newProgress);
        }
    }

    private Runnable runnable = new Runnable() {
        @Override
        public void run() {
            progressBar.setVisibility(View.GONE);
        }
    };
}