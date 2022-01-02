package backend.main.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Entity
@Data @NoArgsConstructor
@Table(name = "text")
public class Text {

    @Id
    private UUID textID;
    private UUID scriptID;
    private String content;
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
