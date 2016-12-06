package com.daqi.baseproject.base;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageButton;

import com.daqi.baseproject.R;
import com.daqi.baseproject.utils.CommonUtils;
import com.daqi.baseproject.view.V_AlwaysMarqueeTextView;

import org.xutils.view.annotation.ViewInject;
import org.xutils.x;

/**
 * Created by yanbo on 2016/12/5.
 * baseactivity
 */
public class B_BaseActivity extends AppCompatActivity{
    @ViewInject(R.id.include_title_ib_left)
    protected ImageButton ibLeft;
    @ViewInject(R.id.include_title_tv)
    protected V_AlwaysMarqueeTextView tvTitle;
    @ViewInject(R.id.include_title_ib_right)
    protected ImageButton ibRight;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        x.view().inject(this);//--
        B_IApplication.mActivity = this;
        B_IApplication.addActivity(this);
    }
    //------------------------------------------------------------生命周期管理
    @Override
    protected void onResume() {
        super.onResume();
        B_IApplication.mActivity = this;
    }
    protected void onDestroy() {
        B_IApplication.removeActivity(this);
        super.onDestroy();
    }

    @Override
    public void finish() {
        super.finish();
        B_IApplication.removeActivity(this);
        overridePendingTransition(R.anim.am_push_left_in, R.anim.am_push_left_out);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            finish();
            overridePendingTransition(R.anim.am_push_left_in, R.anim.am_push_left_out);
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    //------------------------------------------------------------初始化标题栏
    /**
     * 初始化标题栏--已超
     * @param isShowBack  true:显示返回键，false:隐藏返回键
     * @param title       String:标题
     * @param isShowRight true:显示右侧菜单键，false:隐藏右侧菜单键
     */
    protected void initTitle(boolean isShowBack, String title, boolean isShowRight) {
        if (null != ibLeft && !isShowBack) {
            ibLeft.setVisibility(View.INVISIBLE);
            ibLeft.setBackgroundResource(android.R.color.transparent);
        }
        if (null != tvTitle && CommonUtils.isnotNull(title)) {
            tvTitle.setText(title);
        }
    }

    /**
     * 初始化标题栏
     *
     * @param isShowBack  true:显示返回键，false:隐藏返回键
     * @param title       int:标题
     * @param isShowRight true:显示右侧菜单键，false:隐藏右侧菜单键
     */
    protected void initTitle(boolean isShowBack, int title, boolean isShowRight) {
        String tit = getString(title);
        initTitle(isShowBack, tit, isShowRight);
    }

    /**
     * 设置标题
     *
     * @param title 标题
     */
    protected void setTitle(String title) {
        if (null != tvTitle && CommonUtils.isnotNull(title)) {
            tvTitle.setText(title);
        }
    }

}
