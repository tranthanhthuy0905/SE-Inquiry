package backend.main.models;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.sql.Timestamp;
import java.util.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "choice")
public class Choice {

    @Id
    private UUID choiceID;
    private UUID scriptID;
    private String content;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    @JsonIgnore
    @ManyToMany(mappedBy = "choices")
    private Set<Text> texts = new HashSet<>();

    // constructor
    public Choice(@JsonProperty("scriptId") UUID scriptID,
                  @JsonProperty("content") String content) {

        this.choiceID = UUID.randomUUID();
        this.content = content;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.scriptID = scriptID;
        this.createdAt = time;
        this.updatedAt = time;
    }

    public UUID getChoiceID() {
        return choiceID;
    }

    public void setChoiceID(UUID choiceID) {
        this.choiceID = choiceID;
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

    public Set<Text> getTexts() {
        return texts;
    }

    public void setTexts(Set<Text> texts) {
        this.texts = texts;
    }
}
