package backend.models;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "script_db")
public class Script {

    public Script() {
    }

    public UUID getScriptID() {
        return scriptID;
    }
    public void setScriptID(UUID scriptID) {
        this.scriptID = scriptID;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public Timestamp getPublishedAt() {
        return publishedAt;
    }
    public void setPublishedAt(Timestamp publishedAt) {
        this.publishedAt = publishedAt;
    }
    public Timestamp getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Id
    private UUID scriptID;
    private String title;
    private String description;
    private String author;
    private Timestamp publishedAt;
    private Timestamp updatedAt;
    
    public Script(@JsonProperty("title") String title, @JsonProperty("publishedAt") Timestamp publishedAt,
    @JsonProperty("description") String description, @JsonProperty("author") String author, @JsonProperty("updatedAt") Timestamp updatedAt) {
        this.scriptID = UUID.randomUUID();
        this.title = title;
        this.description = description;
        this.author = author;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.publishedAt = time;
        this.updatedAt = time;
    }
}
