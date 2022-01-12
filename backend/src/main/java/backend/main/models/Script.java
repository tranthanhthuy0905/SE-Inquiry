package backend.main.models;

import java.sql.Timestamp;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data @NoArgsConstructor
@Table(name = "script_db")
public class Script {

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
