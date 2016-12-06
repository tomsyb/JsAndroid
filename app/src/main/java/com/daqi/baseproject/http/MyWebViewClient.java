package com.daqi.baseproject.http;

import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Created by yulh on 2016/6/14.
 */
public class MyWebViewClient extends WebViewClient {


    private OnWebviewPageFinished onWebviewPageFinished;

    private static MyWebViewClient myWebViewClient;

    public static MyWebViewClient getInstance(OnWebviewPageFinished onWebviewPageFinished){
        if (myWebViewClient == null){
            myWebViewClient = new MyWebViewClient();
        }
        myWebViewClient.onWebviewPageFinished = onWebviewPageFinished;
        return  myWebViewClient;
    }

    public MyWebViewClient(OnWebviewPageFinished onWebviewPageFinished) {
        super();
        this.onWebviewPageFinished = onWebviewPageFinished;
    }

    public MyWebViewClient() {
        super();
    }

    @Override
    public void onReceivedError(WebView view, int errorCode,
                                String description, String failingUrl) {
    }



    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        //view.loadUrl(url);
        Rq_htmlData.href2Page(url);
        return true;
    }

    public void onPageFinished(WebView view, String url) {
//			ShowCountdownDialog.hideDialog();
        if (onWebviewPageFinished!=null){
            onWebviewPageFinished.onFinished();
        }
    }

    public interface OnWebviewPageFinished{
        void onFinished();
    };
}
