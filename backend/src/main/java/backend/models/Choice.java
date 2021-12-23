package backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.sql.Timestamp;
import java.util.UUID;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
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
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public Choice(@JsonProperty("textID") UUID textID,
                  @JsonProperty("content") String content, @JsonProperty("createdAt") Timestamp createdAt,
                  @JsonProperty("updatedAt") Timestamp updatedAt) {
        this.choiceID = UUID.randomUUID();
        this.textID = textID;
        this.content = content;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
