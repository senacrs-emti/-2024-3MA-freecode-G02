package com.example.climagenda2;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = findViewById(R.id.webview);

        // Configurar o WebView
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);  // Habilita JavaScript
        webSettings.setDomStorageEnabled(true);  // Habilita o armazenamento local (localStorage)

        // Definir WebViewClient para abrir links dentro do WebView
        webView.setWebViewClient(new WebViewClient());

        // Adicionar a interface do WebApp para comunicação com JavaScript
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");

        // Carregar o arquivo HTML
        webView.loadUrl("file:///android_asset/index.html");
    }
}
