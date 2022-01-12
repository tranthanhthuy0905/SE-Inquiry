package backend.main.models;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

@Entity @Data
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


    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "script_id", referencedColumnName = "scriptId")
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
