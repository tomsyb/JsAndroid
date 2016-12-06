package com.daqi.baseproject.view;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.widget.TextView;

/**
 * 达到条件就会一直滚动的显示的TextView
 */
public class V_AlwaysMarqueeTextView extends TextView {

    public V_AlwaysMarqueeTextView(Context context) {
        super(context);
    }

    public V_AlwaysMarqueeTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public V_AlwaysMarqueeTextView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    //始终返回true，即一直获得焦点
    @Override
    public boolean isFocused() {
        return true;
    }

    @Override
    protected void onFocusChanged(boolean focused, int direction, Rect previouslyFocusedRect) {
        super.onFocusChanged(focused,direction,previouslyFocusedRect);
    }
}