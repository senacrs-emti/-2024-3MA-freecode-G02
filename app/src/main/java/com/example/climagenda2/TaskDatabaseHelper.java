package com.example.climagenda2;

import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import java.util.ArrayList;
import java.util.List;

public class TaskDatabaseHelper extends SQLiteOpenHelper {

    private static final String DATABASE_NAME = "tasks.db";
    private static final int DATABASE_VERSION = 1;

    public static final String TABLE_TASKS = "tasks";
    public static final String COLUMN_ID = "id";
    public static final String COLUMN_TITLE = "title";
    public static final String COLUMN_TIME = "time";
    public static final String COLUMN_DESCRIPTION = "description";
    public static final String COLUMN_DAY = "day";

    private static final String DATABASE_CREATE =
            "CREATE TABLE " + TABLE_TASKS + " (" +
                    COLUMN_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    COLUMN_TITLE + " TEXT, " +
                    COLUMN_TIME + " TEXT, " +
                    COLUMN_DESCRIPTION + " TEXT, " +
                    COLUMN_DAY + " INTEGER" +
                    ");";

    public TaskDatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(DATABASE_CREATE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_TASKS);
        onCreate(db);
    }

    // Função para adicionar uma nova tarefa
    public void addTask(String title, String time, String description, int day) {
        SQLiteDatabase db = this.getWritableDatabase();
        String query = "INSERT INTO " + TABLE_TASKS + " (" +
                COLUMN_TITLE + ", " + COLUMN_TIME + ", " + COLUMN_DESCRIPTION + ", " + COLUMN_DAY + ") " +
                "VALUES ('" + title + "', '" + time + "', '" + description + "', " + day + ");";
        db.execSQL(query);
        db.close();
    }

    // Função para buscar todas as tarefas de um dia específico
    public List<Task> getTasksByDay(int day) {
        List<Task> tasks = new ArrayList<>();
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.query(TABLE_TASKS, null, COLUMN_DAY + "=?", new String[]{String.valueOf(day)},
                null, null, null);

        if (cursor != null) {
            while (cursor.moveToNext()) {
                String title = cursor.getString(cursor.getColumnIndex(COLUMN_TITLE));
                String time = cursor.getString(cursor.getColumnIndex(COLUMN_TIME));
                String description = cursor.getString(cursor.getColumnIndex(COLUMN_DESCRIPTION));
                tasks.add(new Task(title, time, description));
            }
            cursor.close();
        }
        db.close();
        return tasks;
    }
}
