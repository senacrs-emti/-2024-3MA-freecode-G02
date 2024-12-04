package com.example.climagenda2;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.Keep;

import java.util.List;

public class WebAppInterface {
    private Context mContext;
    private TaskDatabaseHelper dbHelper;

    // Construtor da interface
    public WebAppInterface(Context c) {
        mContext = c;
        dbHelper = new TaskDatabaseHelper(c);  // Inicializa o banco de dados
    }

    // Método para adicionar tarefa
    @Keep
    @android.webkit.JavascriptInterface
    public void addTask(String title, String time, String description, int day) {
        dbHelper.addTask(title, time, description, day);
        Toast.makeText(mContext, "Tarefa adicionada", Toast.LENGTH_SHORT).show();
    }

    // Método para recuperar tarefas de um dia específico
    @Keep
    @android.webkit.JavascriptInterface
    public String getTasks(int day) {
        List<Task> tasks = dbHelper.getTasksByDay(day);
        StringBuilder tasksJson = new StringBuilder("[");

        for (Task task : tasks) {
            tasksJson.append("{")
                    .append("\"title\":\"").append(task.getTitle()).append("\",")
                    .append("\"time\":\"").append(task.getTime()).append("\",")
                    .append("\"description\":\"").append(task.getDescription()).append("\"")
                    .append("},");
        }

        if (tasksJson.length() > 1) {
            tasksJson.setLength(tasksJson.length() - 1); // Remover a última vírgula
        }

        tasksJson.append("]");

        return tasksJson.toString(); // Retorna as tarefas como um JSON
    }
}
