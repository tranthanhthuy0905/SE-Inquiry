package backend.main.models;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "text")
public class Text {

    @Id
    private UUID textID;
    @Column(name = "content", length = 10485760)
    private String content;
    private String title;
    private Timestamp createdAt;
    private Timestamp updatedAt;


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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public Script getScript() {
        return script;
    }

    public void setScript(Script script) {
        this.script = script;
    }

    public Set<Choice> getChoices() {
        return choices;
    }

    public void setChoices(Set<Choice> choices) {
        this.choices = choices;
    }

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "text_id", referencedColumnName = "scriptId")
    private Script script;

    @JsonManagedReference
    @ManyToMany
    @JoinTable(
            name="text_choice",
            joinColumns = @JoinColumn(name="textId"),
            inverseJoinColumns = @JoinColumn(name="choiceId")
    )
    Set<Choice> choices = new HashSet<>();

    public Text(@JsonProperty("textId") UUID textID, @JsonProperty("content") String content, @JsonProperty("title") String title) {
        this.textID = textID ;
        this.content = content;
        this.title = title;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.createdAt = time;
        this.updatedAt = time;
    }

}
