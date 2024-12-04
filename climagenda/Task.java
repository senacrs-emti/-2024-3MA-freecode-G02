package com.example.climagenda;

public class Task {
    private String title;
    private String time;
    private String description;

    public Task(String title, String time, String description) {
        this.title = title;
        this.time = time;
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public String getTime() {
        return time;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return title + " - " + time + "\n" + description;
    }
}
