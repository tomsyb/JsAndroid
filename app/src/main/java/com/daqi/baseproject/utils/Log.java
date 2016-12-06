package com.daqi.baseproject.utils;

/**
 * 日志打印
 * 
 */
public class Log {

	protected static final String TAG = "YanBo";

	private static boolean DEBUG = true;

	public Log() {
	}

	/**
	 * Send a VERBOSE log message.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 */
	public static void v(String msg) {
		if (DEBUG)
			android.util.Log.v(TAG, buildMessage(msg));
	}

	/**
	 * Send a VERBOSE log message and log the exception.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @param thr
	 *            An exception to log
	 */
	public static void v(String msg, Throwable thr) {
		if (DEBUG)
			android.util.Log.v(TAG, buildMessage(msg), thr);
	}

	/**
	 * Send a DEBUG log message.
	 * 
	 * @param msg
	 */
	public static void d(String msg) {
		if (DEBUG)
			android.util.Log.d(TAG, buildMessage(msg));
	}

	/**
	 * Send a DEBUG log message and log the exception.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @param thr
	 *            An exception to log
	 */
	public static void d(String msg, Throwable thr) {
		if (DEBUG)
			android.util.Log.d(TAG, buildMessage(msg), thr);
	}

	/**
	 * Send an INFO log message.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 */
	public static void i(String msg) {
		if (DEBUG)
			android.util.Log.i(TAG, buildMessage(msg));
	}

	/**
	 * Send a INFO log message and log the exception.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @param thr
	 *            An exception to log
	 */
	public static void i(String msg, Throwable thr) {
		if (DEBUG)
			android.util.Log.i(TAG, buildMessage(msg), thr);
	}

	/**
	 * Send an ERROR log message.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 */
	public static void e(String msg) {
		if (DEBUG)
			android.util.Log.e(TAG, buildMessage(msg));
	}

	/**
	 * Send a WARN log message
	 * 
	 * @param msg
	 *            The message you would like logged.
	 */
	public static void w(String msg) {
		if (DEBUG)
			android.util.Log.w(TAG, buildMessage(msg));
	}

	/**
	 * Send a WARN log message and log the exception.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @param thr
	 *            An exception to log
	 */
	public static void w(String msg, Throwable thr) {
		if (DEBUG)
			android.util.Log.w(TAG, buildMessage(msg), thr);
	}

	/**
	 * Send an empty WARN log message and log the exception.
	 * 
	 * @param thr
	 *            An exception to log
	 */
	public static void w(Throwable thr) {
		if (DEBUG)
			android.util.Log.w(TAG, buildMessage(""), thr);
	}

	/**
	 * Send an ERROR log message and log the exception.
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @param thr
	 *            An exception to log
	 */
	public static void e(String msg, Throwable thr) {
		if (DEBUG)
			android.util.Log.e(TAG, buildMessage(msg), thr);
	}

	/**
	 * Building Message
	 * 
	 * @param msg
	 *            The message you would like logged.
	 * @return Message String
	 */
	protected static String buildMessage(String msg) {
		StackTraceElement caller = new Throwable().fillInStackTrace()
				.getStackTrace()[2];
		String className = caller.getClassName();
		String methodName = className.substring(className.lastIndexOf(".") + 1);
		int lineNumber = caller.getLineNumber();

		return methodName + ":" + lineNumber + "==>" + msg;

	}
}
