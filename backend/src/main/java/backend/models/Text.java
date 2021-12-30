package backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "text_db")
public class Text {

    public Text() {
    }

    public UUID getTextID() {
        return textID;
    }
    public void setTextID(UUID textID) {
        this.textID = textID;
    }
    public UUID getScriptID() {
        return scriptID;
    }
    public void setScriptID(UUID scriptID) {
        this.scriptID = scriptID;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Timestamp getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
    public Timestamp getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Id
    private UUID textID;
    private UUID scriptID;
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    private String title;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public Text(@JsonProperty("scriptID") UUID scriptID, @JsonProperty("textID") UUID textID,
            @JsonProperty("content") String content, @JsonProperty("title") String title, @JsonProperty("createdAt") Timestamp createdAt,
            @JsonProperty("updatedAt") Timestamp updatedAt) {
        this.scriptID = scriptID;
        this.textID = UUID.randomUUID();
        this.content = content;
        this.title = title;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.createdAt = time;
        this.updatedAt = time;
    }
}
