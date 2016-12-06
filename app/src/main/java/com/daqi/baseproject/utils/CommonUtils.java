package com.daqi.baseproject.utils;

/**
 * Created by yanbo on 2016/12/5.
 * 通用工具类
 */
public class CommonUtils {
    /**
     * 判断对象内容是否为空
     * @param obj 判断的对象
     * @return 不为空返回true。 为空返回false
     */
    public static boolean isnotNull(Object obj) {
        boolean b = false;
        if (null != obj && !obj.toString().equals("")
                && !obj.toString().toLowerCase().equals("null")
                && "undefined" != obj) {
            b = true;
        }
        return b;
    }

}
