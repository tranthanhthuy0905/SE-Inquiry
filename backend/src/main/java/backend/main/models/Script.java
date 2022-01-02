package backend.main.models;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

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
