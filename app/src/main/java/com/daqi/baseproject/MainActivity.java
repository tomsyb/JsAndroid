package com.daqi.baseproject;

import android.os.Bundle;
import android.view.View;

import com.daqi.baseproject.base.B_BaseActivity;
import com.daqi.baseproject.common.Constant;
import com.daqi.baseproject.js.BaseWebActivity;
import com.daqi.baseproject.utils.BundleUtils;
import com.daqi.baseproject.utils.SkipUtils;

import org.xutils.view.annotation.ContentView;
import org.xutils.view.annotation.Event;

@ContentView(R.layout.ac_mian)
public class MainActivity extends B_BaseActivity {
    private Bundle mBundle;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }
    //点击进入网页
    @Event(R.id.main_btn)
    private void onClick(View v){
        Bundle bundle = BundleUtils.getBundle(Constant.HTMLREALPERSONURL, getString(R.string.main_real_person_num), true);
        SkipUtils.skip2WebPage(MainActivity.this,new BaseWebActivity(),bundle,0);
    }





}
