package backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Table(name = "choice_db")
public class Choice {

    public UUID getChoiceID() {
        return choiceID;
    }
    public void setChoiceID(UUID choiceID) {
        this.choiceID = choiceID;
    }
    public UUID getTextID() {
        return textID;
    }
    public void setTextID(UUID textID) {
        this.textID = textID;
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
    private UUID choiceID;
    @Nullable private UUID textID;
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

    // constructor
    public Choice(@JsonProperty("textId") UUID textID, @JsonProperty("choiceId") UUID choiceID,
                  @JsonProperty("content") String content,@JsonProperty("title") String title,  @JsonProperty("created_at") Timestamp createdAt,
                  @JsonProperty("updated_at") Timestamp updatedAt) {
        this.choiceID = UUID.randomUUID();
        this.textID = textID;
        this.content = content;
        this.title = title;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.createdAt = time;
        this.updatedAt = time;
    }
}
