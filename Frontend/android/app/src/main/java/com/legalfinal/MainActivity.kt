package com.legalfinal


import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.ContentResolver;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

import androidx.core.app.NotificationCompat;

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "LegalFinal"

   override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(null)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          val notificationChannel = NotificationChannel(
              "LEGALFINAL_CHANNEL",
              "LegalFinal",
              NotificationManager.IMPORTANCE_HIGH
          ).apply {
              setShowBadge(true)
              description = ""
              val att = AudioAttributes.Builder()
                  .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                  .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                  .build()
              setSound(
                  Uri.parse(ContentResolver.SCHEME_ANDROID_RESOURCE + "://" + packageName + "/raw/rn_sound"),
                  att
              )
              enableVibration(true)
              vibrationPattern = longArrayOf(400, 400)
              lockscreenVisibility = NotificationCompat.VISIBILITY_PUBLIC
          }
          val manager = getSystemService(NotificationManager::class.java)
          manager?.createNotificationChannel(notificationChannel)
      }
  }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
