package com.daqi.baseproject.js;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.WebSettings;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.LinearLayout;

import com.daqi.baseproject.R;
import com.daqi.baseproject.base.B_BaseActivity;
import com.daqi.baseproject.http.Rq_htmlData;
import com.daqi.baseproject.js.broad.DaqsoftBroad;
import com.daqi.baseproject.js.broad.IDaqsoftBroadInterface;
import com.daqi.baseproject.js.broad.NetBroad;
import com.daqi.baseproject.utils.EmptyUtils;
import com.daqi.baseproject.utils.CommonUtils;
import com.daqi.baseproject.view.V_AlwaysMarqueeTextView;
import com.daqi.baseproject.view.V_ProgressWebView;

import org.xutils.view.annotation.ContentView;

/**
 * Created by yanbo on 2016/12/5.
 */
@ContentView(R.layout.ac_b_web)
public class BaseWebActivity extends B_BaseActivity implements View.OnClickListener ,IDaqsoftBroadInterface{
    //本页面需要显示的标题
    private String strTitle = "";
    //本页面需要显示的网页地址
    private String strUrl = "";
    public static final String PARAMS_HTMLURL = "htmlUrl";//网址
    public static final String PARAMS_TITLE = "title";//标题
    public static final String PARAMS_ISREFRESH="isRefresh";//是否刷新
    /** 是否可进行刷新操作,默认刷新 */
    private boolean isRefresh = true;
    //------------------
    //若无网络，进行提示
    private Button btnNetworkState;
    //用于显示或隐藏返回键，并设置其点击事件
    private Button btnBack;
    //是否显示返回键，默认显示
    private boolean isShowBack = true;
    //-------------------
    //是否检查网络状态，默认不检查
    private boolean isCheckNetState = false;
    //-------------------
    private LinearLayout mllError;
    //回到顶部按钮
    private ImageButton mToTop;
    protected V_ProgressWebView mWebView;
    private Handler handler = new Handler();
    //---------------------
    /**监听是否关闭本页面的广播*/
    private DaqsoftBroad broad=null;
    //---------------------网页缓存
    private final String HTMLCACHEDIR="/cache/";




    @SuppressLint({ "JavascriptInterface", "SetJavaScriptEnabled" })
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        prepareData();
        doInit();
        setWebIno();

    }

    @Override
    public void onBackPressed() {
        finish();
        overridePendingTransition(R.anim.am_exit_right_in, R.anim.am_exit_right_out);
        super.onBackPressed();
    }
    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
    }
    @Override
    protected void onDestroy() {
        try {
//			ShowCountdownDialog.hideDialog();
            mWebView.destroy();
        } catch (Exception e) {
            e.printStackTrace();
        }
        super.onDestroy();
    }

    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.ll_web_activity_anim) {// 点击重新加载
        } else if (id == R.id.web_btn_ui_title_back) {// 返回上一页
//			ShowCountdownDialog.hideDialog();
            if (mWebView.canGoBack())
                mWebView.goBack();
            else {
                finish();
                overridePendingTransition(R.anim.am_exit_right_in, R.anim.am_exit_right_out);
            }
        } else if (id == R.id.ib_web_activity_totop) {// 回到底部
            mWebView.scrollTo(0, 0);
        }
    }
    //设置网页相关信息
    protected void setWebIno() {
        mWebView.requestFocus();
        mWebView.requestFocusFromTouch();//设置webview支持手势

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);
        webSettings.setAppCacheMaxSize(1024 * 1024 * 8);//设置缓冲大小，我设的是8M
        //支持js默认false
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.getSettings().setPluginState(WebSettings.PluginState.ON);

        //设置使用 宽 的Viewpoint,默认是false
        //Android browser以及chrome for Android的设置是`true`
        //而WebView的默认设置是`false`
        //如果设置为`true`,那么网页的可用宽度为`980px`,并且可以通过 meta data来设置
        //如果设置为`false`,那么可用区域和WebView的显示区域有关.
        mWebView.getSettings().setUseWideViewPort(true);
        mWebView.getSettings().setAllowFileAccess(true);//设置js可访问文件
        mWebView.getSettings().setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);//设置布局方式
        mWebView.getSettings().setDomStorageEnabled(true);// 开启 DOM storage API 功能
        webSettings.setDatabaseEnabled(true);//开启 database storage API 功能
        String appCachePath = getApplicationContext().getCacheDir().getAbsolutePath();
        mWebView.getSettings().setAppCachePath(appCachePath);
        mWebView.getSettings().setAppCacheEnabled(true);
        mWebView.getSettings().setSupportMultipleWindows(true);
        mWebView.getSettings().setLoadWithOverviewMode(true);
        mWebView.getSettings().setSavePassword(true);
        mWebView.getSettings().setSaveFormData(true);
        String cacheDirPath = SysUtils.getSDPath()+HTMLCACHEDIR;
        mWebView.getSettings()
        mWebView.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                return true;
            }
        });
        mWebView.addJavascriptInterface(new Rq_htmlData(),"htmlData");
        mWebView.loadUrl(strUrl);

    }
    /**
     * 返回浏览界面前一页
     */
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && mWebView.canGoBack()) {
            mWebView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }


    //准备基础数据(获得标题，网址，是否刷新)
    private void prepareData() {
        Intent intent = getIntent();
        strTitle = intent.getStringExtra(PARAMS_TITLE);
        strUrl = intent.getStringExtra(PARAMS_HTMLURL);
        String isrefresh = intent.getStringExtra(PARAMS_ISREFRESH);
        if (EmptyUtils.isNotEmpty(isrefresh)){
            isRefresh = isrefresh.equals("true") ? true : false;
        }else {
            isRefresh = false;
        }
    }
    //初始化控件
    private void doInit() {
        broad=new DaqsoftBroad(this);
        NetBroad.initBroad(this, broad);

        this.btnNetworkState = (Button) findViewById(R.id.web_btn_ui_network_state);
        this.btnBack = (Button) findViewById(R.id.web_btn_ui_title_back);
        this.tvTitle = (V_AlwaysMarqueeTextView) findViewById(R.id.web_tv_ui_title_text);
        //用广播监听网络改变布局
        if (isCheckNetState && null != btnNetworkState)
            NetBroad.registerNetReceiver(btnNetworkState);

        btnBack.setVisibility(isShowBack ? View.VISIBLE : View.GONE);
        btnBack.setOnClickListener(this);
        tvTitle.setText(CommonUtils.isnotNull(strTitle) ? strTitle : "");

        this.mllError = (LinearLayout) findViewById(R.id.ll_web_activity_anim);
        mllError.setOnClickListener(this);
        this.mToTop = (ImageButton) findViewById(R.id.ib_web_activity_totop);
        mToTop.setOnClickListener(this);
        mWebView = (V_ProgressWebView) findViewById(R.id.wv_web_activity);
        //mToTop.setVisibility(isShowToTop ? View.VISIBLE : View.GONE);
        mToTop.setVisibility(View.GONE);
        Rq_htmlData.currentWebView = mWebView;

    }

    //*************************广播**************************
    @Override
    public void closePage() {

    }

    @Override
    public void doSearch(String key) {

    }
}
