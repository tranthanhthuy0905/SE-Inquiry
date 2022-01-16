package backend.main.models;

import java.sql.Timestamp;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "script_db")
public class Script {

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

    public Set<Text> getTexts() {
        return texts;
    }

    public void setTexts(Set<Text> texts) {
        this.texts = texts;
    }

    @Id
    private UUID scriptID;
    private String title;
    private String description;
    private String author;
    private Timestamp publishedAt;
    private Timestamp updatedAt;

    @OneToMany(mappedBy = "script")
    private Set<Text> texts;

    public Script(@JsonProperty("title") String title,
    @JsonProperty("description") String description, @JsonProperty("author") String author) {
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
